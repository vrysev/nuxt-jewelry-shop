import type { NavigationItem, IconItem } from "~/types/navigation";

export const useNavigation = () => {
  const isSearchOpen = ref(false);

  const iconActions = {
    search: () => {
      isSearchOpen.value = !isSearchOpen.value;
    },
    cart: () => {
      navigateTo("/cart");
    },
    favorites: () => {
      navigateTo("/favorites");
    },
    profile: () => {
      navigateTo("/profile");
    },
  };

  const navigation: NavigationItem[] = [
    { name: "Home", route: "/" },
    { name: "About us", route: "/about" },
  ];

  const icons: IconItem[] = [
    {
      name: "Search",
      icon: "material-symbols-light:search-rounded",
      action: iconActions.search,
    },
    {
      name: "Cart",
      icon: "material-symbols-light:shopping-cart-outline",
      action: iconActions.cart,
    },
    {
      name: "Favorites",
      icon: "material-symbols-light:favorite-outline",
      action: iconActions.favorites,
    },
    {
      name: "Profile",
      icon: "material-symbols-light:person-outline",
      action: iconActions.profile,
    },
  ];

  const footerNavigation: NavigationItem[] = [
    { name: "Contact Us", route: "/contact" },
    { name: "Terms of Service", route: "/terms" },
    { name: "Privacy Policy", route: "/privacy" },
  ];

  const socialLinks: IconItem[] = [
    { name: "Twitter", icon: "mdi:twitter", route: "https://twitter.com" },
    { name: "Facebook", icon: "mdi:facebook", route: "https://facebook.com" },
    {
      name: "Instagram",
      icon: "mdi:instagram",
      route: "https://instagram.com",
    },
    { name: "LinkedIn", icon: "mdi:linkedin", route: "https://linkedin.com" },
  ];

  return {
    navigation,
    icons,
    footerNavigation,
    socialLinks,
    isSearchOpen,
  };
};
