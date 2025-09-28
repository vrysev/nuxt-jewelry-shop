export interface NavigationItem {
  name: string;
  route: string;
}

export interface IconItem {
  name: string;
  route?: string;
  icon: string;
  action?: () => void;
}
