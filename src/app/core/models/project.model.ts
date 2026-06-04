export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription?: string;
  image: string;
  category: string;
  completionDate: string;
  client: string;
  technologies: string[];
  images?: string[];
  results?: string;
}
