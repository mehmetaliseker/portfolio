import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { routeConfig } from '../config/routes';

/**
 * Sayfa bilgilerini almak için custom hook
 */
export const usePage = () => {
  const { t } = useLanguage();

  const navItems = useMemo(() => {
    return routeConfig.map((route) => ({
      ...route,
      label: t(route.labelKey),
    }));
  }, [t]);

  return {
    navItems,
    routes: routeConfig,
  };
};
