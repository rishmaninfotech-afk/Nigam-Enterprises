export interface Service {
  id: string;
  title: string;
  shortTitle?: string;
  description: string;
  fullDescription?: string;
  icon: string;
  category: 'cctv' | 'computer' | 'hardware' | 'networking';
  image: string;
  features: string[];
  pricing?: string;
  learnMoreUrl?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  services: Service[];
  bgColor: string;
}
