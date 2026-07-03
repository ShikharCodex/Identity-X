// Types for the portfolio website
import type { LucideIcon } from 'lucide-react';

export interface BadgeDetails {
  readonly description: string;
  readonly achievements: readonly string[];
  readonly tech: readonly string[];
}

export interface Badge {
  readonly id: string;
  readonly bgColor: string;
  readonly textColor: string;
  readonly strapColor: string;
  readonly role: string;
  readonly company: string;
  readonly date: string;
  readonly access: string;
  readonly yOffset: number;
  readonly details: BadgeDetails;
}

export interface Book {
  readonly title: string;
  readonly author: string;
  readonly bgColor: string;
  readonly textColor: string;
  readonly width: string;
  readonly height: string;
  readonly font: string;
  readonly layout: string;
  readonly tilted: boolean;
  readonly readDirection: 'top-down' | 'bottom-up';
}

export interface Project {
  readonly type: 'folder' | 'txt';
  readonly label: string;
  readonly link: string;
  readonly color?: string;
  readonly isDownload?: boolean;
}

export interface NavItem {
  readonly name: string;
  readonly href: string;
  readonly Arrow: LucideIcon;
}
