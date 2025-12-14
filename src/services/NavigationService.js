/**
 * Navigation Service
 * IOC Container pattern - Dependency Injection için service katmanı
 */
class NavigationService {
  constructor() {
    this.navigator = null;
  }

  /**
   * Navigator'ı inject et (IOC pattern)
   * @param {object} navigator - Navigation hook'undan gelen navigator
   */
  setNavigator(navigator) {
    this.navigator = navigator;
  }

  /**
   * Sayfaya yönlendir
   * @param {string} pageName - Sayfa adı
   */
  navigateToPage(pageName) {
    if (this.navigator) {
      this.navigator.navigateToPage(pageName);
    }
  }

  /**
   * Mevcut sayfayı al
   * @returns {string} - Mevcut sayfa adı
   */
  getCurrentPage() {
    if (this.navigator) {
      return this.navigator.getCurrentPage();
    }
    return 'home';
  }
}

// Singleton instance (IOC Container)
export const navigationService = new NavigationService();
