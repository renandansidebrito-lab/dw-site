# Instruções para Deploy no Vercel

Seu projeto está pronto para ser implantado no Vercel. Siga os passos abaixo:

## 1. Deploy via CLI (Recomendado)

Se você tem o Vercel CLI instalado:

1. Abra o terminal na pasta do projeto.
2. Execute o comando:
   ```bash
   vercel
   ```
3. Siga as instruções na tela (login, confirmar projeto, etc.).
4. Para deploy em produção:
   ```bash
   vercel --prod
   ```

## 2. Deploy via GitHub

1. Envie seu código para um repositório no GitHub.
2. Acesse [vercel.com](https://vercel.com) e faça login.
3. Clique em "Add New..." -> "Project".
4. Importe seu repositório do GitHub.
5. O Vercel detectará automaticamente que é um projeto Vite.
6. **Importante:** Configure as variáveis de ambiente (Environment Variables) nas configurações do projeto no Vercel, copiando os valores do arquivo `.env.example` e preenchendo com seus dados reais de SMTP.

## 3. Variáveis de Ambiente

Para que o formulário de contato funcione, você precisa configurar as seguintes variáveis no painel do Vercel (Settings -> Environment Variables):

- `SMTP_HOST`: Endereço do servidor SMTP.
- `SMTP_PORT`: Porta do servidor SMTP (ex: 465 ou 587).
- `SMTP_USER`: Usuário do e-mail.
- `SMTP_PASS`: Senha do e-mail.
- `MAIL_TO`: E-mail que receberá as mensagens do site.
- `MAIL_FROM`: E-mail que enviará as mensagens (deve ser o mesmo do SMTP_USER geralmente).

## Notas Técnicas

- A API de envio de e-mail foi configurada em `api/send-email.js` e adaptada para funcionar como uma Serverless Function no Vercel (convertida para ESM).
- O arquivo `vercel.json` já contém as regras de reescrita (rewrites) para garantir que a navegação (React Router) e a API funcionem corretamente.
