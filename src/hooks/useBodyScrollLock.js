import { useEffect } from 'react';

/**
 * Body scroll'unu kilitlemek/açmak için custom hook
 * @param {boolean} isLocked - Scroll'un kilitli olup olmadığı
 */
export const useBodyScrollLock = (isLocked) => {
  useEffect(() => {
    if (isLocked) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isLocked]);
};
