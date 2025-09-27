import type { NavigationItem, IconItem } from '~/types/navigation'

export const useNavigation = () => {
  const navigation: NavigationItem[] = [
    { name: 'Home', route: '/' },
    { name: 'About us', route: '/about' },
  ]

  const icons: IconItem[] = [
    { name: 'Search', icon: 'material-symbols-light:search-rounded', route: '/search' },
    { name: 'Cart', icon: 'material-symbols-light:shopping-cart-outline', route: '/cart' },
    { name: 'Favorites', icon: 'material-symbols-light:favorite-outline', route: '/favorites' },
    { name: 'Profile', icon: 'material-symbols-light:person-outline', route: '/profile' }
  ]

  const footerNavigation: NavigationItem[] = [
    { name: 'Contact Us', route: '/contact' },
    { name: 'Terms of Service', route: '/terms' },
    { name: 'Privacy Policy', route: '/privacy' },
  ]

  const socialLinks: IconItem[] = [
    { name: 'Twitter', icon: 'mdi:twitter', route: '/twitter' },
    { name: 'Facebook', icon: 'mdi:facebook', route: '/facebook' },
    { name: 'Instagram', icon: 'mdi:instagram', route: '/instagram' },
    { name: 'LinkedIn', icon: 'mdi:linkedin', route: '/linkedin' },
  ]

  return {
    navigation,
    icons,
    footerNavigation,
    socialLinks,
  }
}