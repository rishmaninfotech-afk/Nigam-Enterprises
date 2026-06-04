export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface CompanyStat {
  label: string;
  value: number;
  suffix?: string;
  icon?: string;
}

export interface AboutSection {
  title: string;
  description: string;
  highlights: string[];
}
