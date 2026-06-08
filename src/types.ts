export type Experience = {
  company: string;
  role: string;
  start: string; // 'YYYY-MM'
  end: string; // 'YYYY-MM' or 'Present'
  summary: string;
  bullets: string[];
};

export type Project = {
  title: string;
  href: string;
  image: string;
  description: string;
  tags?: string[];
};

export type AboutCard = {
  heading: string;
  subheading?: string;
  body: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'mail' | 'calendar' | 'medium';
};
