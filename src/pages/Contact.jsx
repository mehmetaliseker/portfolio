import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import emailjs from 'emailjs-com';
import ShinyText from '../components/ShinyText';
import Footer from '../components/Footer';

const Contact = ({ onPageChange }) => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [result, setResult] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot kontrolü - eğer bot honeypot alanını işaretlediyse gönderme
    const honeypot = e.target.querySelector('input[name="botcheck"]');
    if (honeypot && honeypot.checked) {
      setResult('Bot detected!');
      return;
    }

    setIsSubmitting(true);
    setResult('');

    const currentTime = new Date().toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    // Template parametreleri
    const templateParams = {
      title: formData.subject,
      name: formData.name,
      time: currentTime,
      message: formData.message,
      email: formData.email,
      phone: formData.phone || 'Not provided'
    };

    try {
      // Contact us template - kullanıcının mailine gönderilecek
      await emailjs.send(
        'service_udzcwsk',
        'template_qo059qg',
        templateParams,
        'UhzQZ5iUeHGz23OD2'
      );

      // Auto reply template - kullanıcıya otomatik gönderilecek
      await emailjs.send(
        'service_udzcwsk',
        'template_jqu8a2j',
        templateParams,
        'UhzQZ5iUeHGz23OD2'
      );

      setResult(t('contact.form.success'));
      // Formu temizle
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setResult(t('contact.form.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/mehmetaliseker/',
      label: 'GitHub',
      username: 'mehmetaliseker',
      labelKey: null
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/mehmetaliseker/',
      label: 'LinkedIn',
      username: 'mehmetaliseker',
      labelKey: null
    },
    {
      icon: LuMail,
      href: 'mailto:maliseker2005@gmail.com',
      label: 'Email',
      username: 'maliseker2005@gmail.com',
      labelKey: null
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com/maseker35_',
      label: 'Instagram',
      username: 'maseker35_',
      labelKey: null
    },
    {
      icon: FaPhone,
      href: 'tel:+905468303055',
      label: language === 'tr' ? 'Telefon' : 'Phone',
      username: '+90 546 830 30 55',
      labelKey: 'phone'
    },
    {
      icon: FaMapMarkerAlt,
      href: 'https://www.google.com/maps/search/?api=1&query=İzmir,Turkey',
      label: language === 'tr' ? 'Adres' : 'Address',
      username: 'İzmir, Türkiye',
      labelKey: 'address'
    }
  ];

  return (
    <div className="flex flex-col w-full">
      <div className="relative z-10 min-h-screen px-4 md:px-8 lg:px-16 py-20 md:py-24 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Sol Taraf - İletişim Formu */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left"
                style={{ color: '#e8e8e8' }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`get-in-touch-${language}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="inline-block"
                  >
                    <ShinyText text={t('contact.getInTouch')} speed={1} className="text-[#e8e8e8]" />
                  </motion.span>
                </AnimatePresence>
              </h2>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`contact-desc-${language}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="text-base md:text-lg mb-8 text-center lg:text-left"
                  style={{ color: '#c8c8c8' }}
                >
                  {t('contact.description')}
                </motion.p>
              </AnimatePresence>

              <div
                className="relative overflow-hidden rounded-2xl border backdrop-blur-sm"
                style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
                }}
              >
                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                  {/* Honeypot - Bot koruması için görünmez alan */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* 2 Sütunlu Grid - İlk Satır: Name ve Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        style={{ color: '#e8e8e8' }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`label-name-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            {t('contact.form.name')} <span style={{ color: '#ff4444' }}>*</span>
                          </motion.span>
                        </AnimatePresence>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-white/30 focus:outline-none transition-all duration-300"
                        style={{ color: '#e8e8e8' }}
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        style={{ color: '#e8e8e8' }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`label-email-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            {t('contact.form.email')} <span style={{ color: '#ff4444' }}>*</span>
                          </motion.span>
                        </AnimatePresence>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-white/30 focus:outline-none transition-all duration-300"
                        style={{ color: '#e8e8e8' }}
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  {/* 2 Sütunlu Grid - İkinci Satır: Phone ve Subject */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                        style={{ color: '#e8e8e8' }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`label-phone-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            {t('contact.form.phone')}
                          </motion.span>
                        </AnimatePresence>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-white/30 focus:outline-none transition-all duration-300"
                        style={{ color: '#e8e8e8' }}
                        placeholder={t('contact.form.phonePlaceholder')}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium mb-2"
                        style={{ color: '#e8e8e8' }}
                      >
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={`label-subject-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="inline-block"
                          >
                            {t('contact.form.subject')} <span style={{ color: '#ff4444' }}>*</span>
                          </motion.span>
                        </AnimatePresence>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-white/30 focus:outline-none transition-all duration-300"
                        style={{ color: '#e8e8e8' }}
                        placeholder={t('contact.form.subjectPlaceholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                      style={{ color: '#e8e8e8' }}
                    >
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={`label-message-${language}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="inline-block"
                        >
                          {t('contact.form.message')} <span style={{ color: '#ff4444' }}>*</span>
                        </motion.span>
                      </AnimatePresence>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-white/30 focus:outline-none transition-all duration-300 resize-none"
                      style={{ color: '#e8e8e8' }}
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  {result && (
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`result-${language}-${result}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className={`p-4 rounded-lg ${
                          result === t('contact.form.success')
                            ? 'bg-green-500/20 border border-green-500/50' 
                            : 'bg-red-500/20 border border-red-500/50'
                        }`}
                      >
                        <p
                          className="text-sm font-medium"
                          style={{
                            color: result === t('contact.form.success') ? '#4ade80' : '#f87171'
                          }}
                        >
                          {result}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#e8e8e8',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`button-${language}-${isSubmitting}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="inline-block"
                      >
                        {isSubmitting ? t('contact.form.sending') : t('contact.form.sendButton')}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sağ Taraf - Sosyal Medya */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <h2
                className="text-3xl md:text-4xl font-bold mb-8 text-center lg:text-left"
                style={{ color: '#e8e8e8' }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`contact-me-${language}`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="inline-block"
                  >
                    <ShinyText text={t('contact.connectWithMe')} speed={1} className="text-[#e8e8e8]" />
                  </motion.span>
                </AnimatePresence>
              </h2>
              <AnimatePresence mode="wait">
                <motion.p
                  key={`connect-desc-${language}`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="text-base md:text-lg mb-8 text-center lg:text-left"
                  style={{ color: '#c8c8c8' }}
                >
                  {t('contact.connectDescription')}
                </motion.p>
              </AnimatePresence>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  const content = (
                    <div
                      className="relative overflow-hidden rounded-2xl border backdrop-blur-sm transition-all duration-300"
                      style={{
                        background: 'rgba(0, 0, 0, 0.4)',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                        cursor: social.href ? 'pointer' : 'default'
                      }}
                      onMouseEnter={(e) => {
                        if (social.href) {
                          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(0, 0, 0, 0.4)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (social.href) {
                          e.currentTarget.style.background = 'rgba(0, 0, 0, 0.4)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.3)';
                        }
                      }}
                    >
                      <div className="p-6 flex items-center gap-4">
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300"
                          style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            color: '#e8e8e8'
                          }}
                        >
                          <Icon size={24} />
                        </div>
                        <div className="flex-1">
                          <AnimatePresence mode="wait">
                            <motion.h3
                              key={`social-label-${social.labelKey || social.label}-${language}`}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -5 }}
                              transition={{ duration: 0.3, ease: 'easeInOut' }}
                              className="text-lg font-semibold mb-1"
                              style={{ color: '#e8e8e8' }}
                            >
                              {social.label}
                            </motion.h3>
                          </AnimatePresence>
                          <p
                            className="text-sm"
                            style={{ color: '#c8c8c8' }}
                          >
                            {social.username}
                          </p>
                        </div>
                      </div>
                    </div>
                  );

                  if (social.href) {
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith('mailto:') || social.href.startsWith('tel:') ? '_self' : '_blank'}
                        rel={social.href.startsWith('mailto:') || social.href.startsWith('tel:') ? '' : 'noopener noreferrer'}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        {content}
                      </motion.a>
                    );
                  }

                  return (
                    <motion.div
                      key={social.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      {content}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer onPageChange={onPageChange} isMinimal={true} />
    </div>
  );
};

export default Contact;
