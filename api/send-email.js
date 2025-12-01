const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
    const {
      name = '',
      email = '',
      phone = '',
      subject = '',
      message = '',
      state = '',
      attachments = []
    } = body;

    if (!name || !email || !subject || !message) {
      res.status(400).json({ error: 'Campos obrigatórios faltando' });
      return;
    }

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '465', 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.MAIL_TO || 'renan@dwgranitos.com.br';
    const from = process.env.MAIL_FROM || user || 'no-reply@dwgranitos.com.br';

    if (!host || !user || !pass) {
      res.status(500).json({ error: 'Servidor de e-mail não configurado' });
      return;
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass }
    });

    const text = [
      `Nova mensagem do site DW Granitos`,
      `Nome: ${name}`,
      `Email: ${email}`,
      `Telefone: ${phone}`,
      `Estado: ${state}`,
      '',
      'Mensagem:',
      message
    ].join('\n');

    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: `[DW Site] ${subject || 'Nova mensagem'}`,
      text,
      attachments: Array.isArray(attachments) ? attachments.map(a => ({
        filename: a.filename,
        content: Buffer.from(a.content || '', 'base64'),
        contentType: a.contentType || 'application/octet-stream'
      })) : []
    });

    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Falha ao enviar e-mail', detail: String(err && err.message || err) });
  }
};
