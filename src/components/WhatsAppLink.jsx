import { memo } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

/**
 * WhatsApp iletişim linki component'i
 * Tıklandığında WhatsApp'a yönlendirir ve otomatik mesaj yazar
 */
const WhatsAppLink = memo(({ phoneNumber, message = 'Merhaba!', className = '' }) => {
  // Telefon numarasını temizle (sadece rakamlar)
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // WhatsApp link formatı: https://wa.me/905468303055?text=Merhaba!
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = (e) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.a
      href={whatsappUrl}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-2 text-sm transition-all duration-300 hover:text-white relative ${className}`}
      style={{ color: '#c8c8c8' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.textShadow = 'none';
      }}
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: 0.15 }}
    >
      <FaWhatsapp size={16} />
      WhatsApp
    </motion.a>
  );
});

WhatsAppLink.displayName = 'WhatsAppLink';

export default WhatsAppLink;
