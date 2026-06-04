export interface ContactFormData {
  name: string;
  phone: string;
  serviceRequired: string;
  message: string;
  timestamp?: Date;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  hours: string;
  city: string;
  state: string;
  zipCode: string;
  latitude?: number;
  longitude?: number;
}