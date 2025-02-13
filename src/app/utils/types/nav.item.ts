export type NavItem = {
  id: number;
  label: string;
  href: string;
  icon?: string;
  children?: NavItem[];
};
