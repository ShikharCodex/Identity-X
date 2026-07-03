// Types for the portfolio website

export interface BadgeDetails {
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Badge {
  id: string;
  bgColor: string;
  textColor: string;
  strapColor: string;
  role: string;
  company: string;
  date: string;
  access: string;
  yOffset: number;
  details: BadgeDetails;
}

export interface Book {
  title: string;
  author: string;
  bgColor: string;
  textColor: string;
  width: string;
  height: string;
  font: string;
  layout: string;
  tilted: boolean;
  readDirection: 'top-down' | 'bottom-up';
}

export interface Project {
  type: 'folder' | 'txt';
  label: string;
  link: string;
  color?: string;
  isDownload?: boolean;
}

export interface NavItem {
  name: string;
  href: string;
  Arrow: React.ComponentType<React.SVGProps<SVGSVGElement> & { size?: number | string; strokeWidth?: number | string }>; // Lucide icon component
}
