import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Award, Users, MapPin, Calendar, Star, Shield, CheckCircle, ChevronDown } from "lucide-react";
import { useTranslation } from "@/contexts/i18nContext";
import { 
  fadeInUp, 
  scaleIn, 
  slideInLeft, 
  slideInRight,
  staggerContainer,
  scrollReveal 
} from "@/utils/animations";
import { Card, Button } from "@/components/ui";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import Seo from "@/components/seo/Seo";
import { institutionalContent } from "@/data/institutionalContent";

export default function Sobre() {
  const { t, language } = useTranslation();
  const { scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  const seo = institutionalContent[language].seo.about;

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: 5000, suffix: "+", label: t('home.stats.projects') },
    { number: 25, suffix: "+", label: t('home.stats.experience') },
    { number: 50, suffix: "+", label: t('home.stats.materials') },
    { number: 100, suffix: "%", label: t('home.stats.satisfaction') }
  ];

  const values = [
    {
      icon: Award,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    },
    {
      icon: Users,
      title: t('about.values.commitment.title'),
      description: t('about.values.commitment.description')
    },
    {
      icon: Shield,
      title: t('about.values.trust.title'),
      description: t('about.values.trust.description')
    },
    {
      icon: Star,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    }
  ];

  const timeline = [
    {
      year: "2000",
      title: t('about.timeline.2000.title'),
      description: t('about.timeline.2000.description')
    },
    {
      year: "2010",
      title: t('about.timeline.2010.title'),
      description: t('about.timeline.2010.description')
    },
    {
      year: "2016",
      title: t('about.timeline.2016.title'),
      description: t('about.timeline.2016.description')
    },
    {
      year: "2021",
      title: t('about.timeline.2021.title'),
      description: t('about.timeline.2021.description')
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      <Seo title={seo.title} description={seo.description} path="/sobre" />
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Parallax Layer */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black" />
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand/20 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-20" />
        </motion.div>

        {/* Foreground Parallax Layer */}
        <motion.div 
          style={{ y: foregroundY, scale: scaleProgress }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <ScrollReveal direction="up" delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t('about.hero.title')}
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {t('about.hero.description')}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <div className="h-8"></div>
          </ScrollReveal>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => {
              const nextSection = document.querySelector('#mission');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <span className="text-sm font-medium">{t('about.discoverMore')}</span>
            <ChevronDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                  {t('about.missionSection.title.prefix')} <span className="text-brand">{t('about.missionSection.title.highlight')}</span>
                </h2>
                <div className="w-24 h-1 bg-brand"></div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('about.missionSection.paragraphs.1')}
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {t('about.missionSection.paragraphs.2')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-brand/80 to-brand rounded-2xl p-8 shadow-2xl"
                >
                  <div className="text-center text-white space-y-4">
                    <div className="text-6xl mb-4">🏛️</div>
                    <h3 className="text-2xl font-bold">{t('about.traditionCard.title')}</h3>
                    <p className="text-white/90">
                      {t('about.traditionCard.description')}
                    </p>
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-brand rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                >
                  25+
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('about.statsSection.title.prefix')} <span className="text-brand">{t('about.statsSection.title.highlight')}</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                {t('about.statsSection.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-brand transition-colors">
                    <AnimatedCounter to={stat.number} />{stat.suffix}
                  </div>
                  <div className="text-slate-300 text-sm uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('about.valuesSection.title.prefix')} <span className="text-brand">{t('about.valuesSection.title.highlight')}</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {t('about.valuesSection.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Card className="h-full text-center p-8 hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand/20 transition-colors"
                    >
                      <value.icon className="h-8 w-8 text-brand" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-brand transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                {t('about.timelineSection.title.prefix')} <span className="text-brand">{t('about.timelineSection.title.highlight')}</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                {t('about.timelineSection.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-brand/20"></div>

            {timeline.map((item, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"}>
                <div className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                    >
                      <div className="text-brand font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-6 h-6 bg-brand rounded-full border-4 border-white shadow-lg z-10"
                  />
                  
                  <div className="w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand to-brand2 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('about.cta.title')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t('about.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button variant="primary" size="lg" className="bg-white text-brand hover:bg-slate-100 w-full sm:w-auto">
                  {t('about.cta.button')}
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
