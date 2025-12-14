import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
import { getRouteByName, getRouteNameByPath } from '../config/routes';

const STORAGE_KEY = 'currentPage';

/**
 * Navigation yönetimi için custom hook
 * IOC pattern ile dependency injection
 */
export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [, setSavedPage] = useLocalStorage(STORAGE_KEY, 'home');

  const currentPageName = getRouteNameByPath(location.pathname);

  const navigateToPage = useCallback((pageName) => {
    const route = getRouteByName(pageName);
    if (route) {
      navigate(route);
      setSavedPage(pageName);
    }
  }, [navigate, setSavedPage]);

  const getCurrentPage = useCallback(() => {
    return currentPageName;
  }, [currentPageName]);

  return {
    navigateToPage,
    getCurrentPage,
    currentPage: currentPageName,
  };
};
