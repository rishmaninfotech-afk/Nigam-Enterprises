import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Service, ServiceCategory } from '../models/service.model';
import { Project } from '../models/project.model';
import { Testimonial } from '../models/testimonial.model';
import { Laptop } from '../models/laptop.model';
import { CompanyValue, CompanyStat } from '../models/company.model';
import { Company } from "../../shared/components/navbar/navbar.component";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private servicesSubject = new BehaviorSubject<Service[]>([]);
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  private testimonialsSubject = new BehaviorSubject<Testimonial[]>([]);
  private laptopsSubject = new BehaviorSubject<Laptop[]>([]);

  constructor() {
    this.initializeMockData();
  }

  private initializeMockData() {
    this.servicesSubject.next(this.getMockServices());
    this.projectsSubject.next(this.getMockProjects());
    this.testimonialsSubject.next(this.getMockTestimonials());
    this.laptopsSubject.next(this.getMockLaptops());
  }

  // Services
  getServices(): Observable<Service[]> {
    return this.servicesSubject.asObservable();
  }

  getServicesByCategory(category: string): Service[] {
    return this.servicesSubject.value.filter(s => s.category === category);
  }

  private getMockServices(): Service[] {
    return [
      // CCTV Services
      {
        id: 'cctv-1',
        title: 'CCTV Installation',
        description: 'Professional CCTV installation for homes and businesses',
        fullDescription: 'Our expert technicians install high-quality CCTV systems tailored to your security needs.',
        icon: 'videocam',
        category: 'cctv',
        image: 'https://images.unsplash.com/photo-1549109926-58f039549485?w=500',
        features: ['HD/4K Cameras', 'Night Vision', 'Remote Monitoring', 'Cloud Storage'],
        learnMoreUrl: '/services'
      },
      {
        id: 'cctv-2',
        title: 'CCTV Maintenance',
        description: 'Regular maintenance and repair of CCTV systems',
        icon: 'settings',
        category: 'cctv',
        image: 'https://images.unsplash.com/photo-1592933517548-f65267a96178?w=500',
        features: ['Regular Cleaning', 'Software Updates', '24/7 Support', 'Warranty Coverage'],
      },
      {
        id: 'cctv-3',
        title: 'CCTV AMC',
        description: 'Annual Maintenance Contract for peace of mind',
        icon: 'verified',
        category: 'cctv',
        image: 'https://images.unsplash.com/photo-1723399726195-1fc25450f80d?w=500',
        features: ['Quarterly Checkups', 'Priority Support', 'Parts Replacement', 'Guaranteed Uptime'],
      },

      // Computer Services
      {
        id: 'comp-1',
        title: 'Desktop Repair',
        description: 'Expert desktop computer repair and troubleshooting',
        icon: 'computer',
        category: 'computer',
        image: 'https://images.unsplash.com/photo-1604754742629-3e5728249d73?w=500',
        features: ['Hardware Diagnosis', 'OS Troubleshooting', 'Data Recovery', 'Performance Optimization'],
      },
      {
        id: 'comp-2',
        title: 'Laptop Repair',
        description: 'Comprehensive laptop repair and maintenance services',
        icon: 'laptop',
        category: 'computer',
        image: 'https://images.unsplash.com/photo-1658240527554-9cf987b4de49?w=500',
        features: ['Screen Replacement', 'Battery Service', 'Keyboard Repair', 'Motherboard Service'],
      },
      {
        id: 'comp-3',
        title: 'Software Installation',
        description: 'Professional software installation and configuration',
        icon: 'extension',
        category: 'computer',
        image: 'https://images.unsplash.com/photo-1762340915398-000c216e7cd6?w=500',
        features: ['Windows/Linux', 'Antivirus Setup', 'Driver Installation', 'License Activation'],
      },
      {
        id: 'comp-4',
        title: 'Virus Removal',
        description: 'Advanced malware and virus removal services',
        icon: 'security',
        category: 'computer',
        image: 'https://images.unsplash.com/photo-1751448555253-f39c06e29d82?w=500',
        features: ['Deep Scan', 'Malware Removal', 'System Cleanup', 'Prevention Tips'],
      },

      // Hardware Solutions
      {
        id: 'hw-1',
        title: 'Computer Hardware Sales',
        description: 'Quality computer components and accessories',
        icon: 'memory',
        category: 'hardware',
        image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=500',
        features: ['RAM Upgrades', 'SSD Installation', 'Motherboards', 'Cooling Solutions'],
      },
      {
        id: 'hw-2',
        title: 'Refurbished Laptops',
        description: 'High-quality refurbished laptops at affordable prices',
        icon: 'phoneAndroid',
        category: 'hardware',
        image: 'https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?w=500',
        features: ['Warranty Included', 'Quality Tested', 'Certified Refurbished', 'Great Value'],
      },
      {
        id: 'hw-3',
        title: 'Printer Setup',
        description: 'Professional printer installation and troubleshooting',
        icon: 'print',
        category: 'hardware',
        image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500',
        features: ['Driver Setup', 'Network Configuration', 'Troubleshooting', 'Maintenance'],
      },

      // Networking Solutions
      {
        id: 'net-1',
        title: 'WiFi Setup',
        description: 'Fast and secure WiFi installation',
        icon: 'wifi',
        category: 'networking',
        image: 'https://images.unsplash.com/photo-1612045194743-877419047a35?w=500',
        features: ['High-Speed Setup', 'Secure Network', 'Coverage Optimization', 'Device Support'],
      },
      {
        id: 'net-2',
        title: 'Office Networking',
        description: 'Enterprise-grade networking solutions',
        icon: 'router',
        category: 'networking',
        image: 'https://images.unsplash.com/photo-1691435828932-911a7801adfb?w=500',
        features: ['LAN Setup', 'Server Configuration', 'Security Implementation', 'Performance Tuning'],
      },
      {
        id: 'net-3',
        title: 'Router Configuration',
        description: 'Expert router setup and optimization',
        icon: 'settings_remote',
        category: 'networking',
        image: 'https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1?w=500',
        features: ['Advanced Setup', 'Port Forwarding', 'Security Hardening', 'Bandwidth Management'],
      },
    ];
  }

  // Projects
  getProjects(): Observable<Project[]> {
    return this.projectsSubject.asObservable();
  }

  getProjectsByCategory(category: string): Project[] {
    return this.projectsSubject.value.filter(p => p.category === category);
  }

  private getMockProjects(): Project[] {
    return [
      {
        id: 'proj-1',
        title: 'Bank Security System Installation',
        description: 'Complete CCTV and access control system',
        client: 'Central Bank Branch',
        image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600',
        category: 'CCTV',
        completionDate: '2024-01-15',
        technologies: ['4K CCTV', 'Night Vision', 'Cloud Storage'],
        results: 'Successfully monitored 24/7 with zero downtime',
      },
      {
        id: 'proj-2',
        title: 'Corporate Office Network Upgrade',
        description: 'Network infrastructure upgrade for 200+ employees',
        client: 'Tech Solutions Ltd',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
        category: 'Networking',
        completionDate: '2024-02-20',
        technologies: ['Fiber Optics', 'Managed Switches', 'WiFi 6'],
        results: '10x faster network speed, 99.9% uptime',
      },
      {
        id: 'proj-3',
        title: 'Retail Store CCTV Network',
        description: '12-camera CCTV system with remote monitoring',
        client: 'Fashion Retail Store',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
        category: 'CCTV',
        completionDate: '2023-12-10',
        technologies: ['HD Cameras', 'DVR System', 'Mobile App'],
        results: 'Real-time monitoring with mobile alerts',
      },
      {
        id: 'proj-4',
        title: 'Hospital IT Infrastructure',
        description: 'Complete IT setup for 100-bed hospital',
        client: 'City Medical Center',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600',
        category: 'Computer',
        completionDate: '2024-01-05',
        technologies: ['Servers', 'Medical Software', 'Security'],
        results: 'HIPAA compliant system handling 1000+ patients',
      },
      {
        id: 'proj-5',
        title: 'School Campus WiFi Rollout',
        description: 'WiFi network covering 50-acre campus',
        client: 'International School',
        image: 'https://images.unsplash.com/photo-1522661335684-37db76e84f4d?w=600',
        category: 'Networking',
        completionDate: '2023-11-30',
        technologies: ['WiFi 6', 'Mesh Network', 'Management Portal'],
        results: '500+ concurrent users, seamless connectivity',
      },
      {
        id: 'proj-6',
        title: 'Manufacturing Plant CCTV + WiFi',
        description: 'Integrated security and networking solution',
        client: 'Industrial Manufacturing Co',
        image: 'https://images.unsplash.com/photo-1581092162562-40038f5378cc?w=600',
        category: 'Combined',
        completionDate: '2024-02-01',
        technologies: ['Industrial Cameras', 'Rugged Network', 'Analytics'],
        results: 'Production area fully monitored with instant alerts',
      },
      {
        id: 'proj-7',
        title: 'Hotel Guest Network System',
        description: 'Guest WiFi + Admin network infrastructure',
        client: 'Grand Hotel Group',
        image: 'https://images.unsplash.com/photo-1559027615-cd2628902d4a?w=600',
        category: 'Networking',
        completionDate: '2023-10-15',
        technologies: ['Guest Portal', 'WPA3 Security', 'Analytics Dashboard'],
        results: 'Happy guests with reliable 5-star WiFi experience',
      },
      {
        id: 'proj-8',
        title: 'IT Support for Large Corporation',
        description: 'Desktop support for 500+ workstations',
        client: 'Enterprise Solutions Inc',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600',
        category: 'Computer',
        completionDate: '2024-01-20',
        technologies: ['Remote Management', 'Help Desk', 'Asset Management'],
        results: 'Reduced support tickets by 40%',
      },
      {
        id: 'proj-9',
        title: 'Apartment Complex Security',
        description: '24 gates + 48 camera security system',
        client: 'Luxury Apartments',
        image: 'https://images.unsplash.com/photo-1486884985991-2470891e113e?w=600',
        category: 'CCTV',
        completionDate: '2023-09-25',
        technologies: ['Access Control', '4K Recording', 'Mobile Alerts'],
        results: 'Complete security coverage, 24/7 monitoring',
      },
      {
        id: 'proj-10',
        title: 'Government Office Network',
        description: 'Secure network for sensitive operations',
        client: 'State Government',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600',
        category: 'Networking',
        completionDate: '2023-08-30',
        technologies: ['Military-grade Security', 'Redundancy', 'Compliance'],
        results: 'Full compliance with government standards',
      },
      {
        id: 'proj-11',
        title: 'E-commerce Warehouse Setup',
        description: 'Inventory tracking with CCTV and WiFi',
        client: 'Online Retail Giant',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
        category: 'Combined',
        completionDate: '2024-02-10',
        technologies: ['Barcode Tracking', 'CCTV', 'WiFi Network'],
        results: 'Real-time inventory visibility',
      },
      {
        id: 'proj-12',
        title: 'Restaurant POS Network',
        description: 'Integrated POS system with CCTV',
        client: 'Fine Dining Restaurant',
        image: 'https://images.unsplash.com/photo-1555521760-4cc46c309bba?w=600',
        category: 'Combined',
        completionDate: '2023-12-05',
        technologies: ['POS Integration', 'Kitchen Display', 'CCTV'],
        results: 'Seamless operations with full visibility',
      },
    ];
  }

  // Testimonials
  getTestimonials(): Observable<Testimonial[]> {
    return this.testimonialsSubject.asObservable();
  }

  private getMockTestimonials(): Testimonial[] {
    return [
      {
        id: 'test-1',
        clientName: 'Rajesh Kumar',
        clientCompany: 'Self',
        clientImage: 'https://images.unsplash.com/photo-1729157661483-ed21901ed892?w=150',
        quote: 'Nigam Enterprises installed our home CCTV system and the quality is exceptional. Their team was professional and delivered on time.',
        rating: 5,
        service: 'Home CCTV Installation',
        date: '2026-06-08'
      },
      {
        id: 'test-2',
        clientName: 'Priya Sharma',
        clientCompany: 'Self',
        clientImage: 'https://images.unsplash.com/photo-1706943262117-b35de4ba50b4?w=150',
        quote: 'Bought an SSD and graphics card for my PC upgrade. Genuine products, competitive pricing, and excellent customer support.',
        rating: 5,
        service: 'Computer Hardware Sales',
        date: '2026-05-29'
      },
      {
        id: 'test-3',
        clientName: 'Vikram Singh',
        clientCompany: 'Logistics Co',
        clientImage: 'https://images.unsplash.com/flagged/photo-1571367034861-e6729ad9c2d5?w=150',
        quote: 'Their computer repair service is fast and reliable. They resolved our system issues within hours. Great support!',
        rating: 4,
        service: 'Computer Repair',
        date: '2026-05-21'
      },
      {
        id: 'test-4',
        clientName: 'Anita Sharma',
        clientCompany: 'Retail Store',
        clientImage: 'https://images.unsplash.com/photo-1706943262473-fc393f495501?w=150',
        quote: 'The CCTV maintenance service they provide is top-notch. Our system runs smoothly 24/7 without any issues.',
        rating: 5,
        service: 'CCTV Maintenance',
        date: '2026-05-18'
      },
      {
        id: 'test-5',
        clientName: 'Suresh Nigam',
        clientCompany: 'Customer Support Network',
        clientImage: 'https://images.unsplash.com/photo-1534339480783-6816b68be29c?w=150',
        quote: 'Professional, reliable, and cost-effective. Nigam Enterprises helped us set up our entire IT infrastructure.',
        rating: 5,
        service: 'IT Support',
        date: '2026-05-15'
      },
      {
        id: 'test-6',
        clientName: 'Neha Gupta',
        clientCompany: 'Hotel',
        clientImage: 'https://images.unsplash.com/photo-1706943262459-3ef6ce03305c?w=150',
        quote: 'Excellent CCTV installation service for our hotel. The cameras provide clear footage, and the team ensured complete coverage of key areas.',
        rating: 5,
        service: 'CCTV Installation',
        date: '2026-05-10'
      },
      {
        id: 'test-7',
        clientName: 'Arun Nambiar',
        clientCompany: 'Finance Corp',
        clientImage: 'https://images.unsplash.com/photo-1694871420373-e9c1031b91ee?w=150',
        quote: 'Security is critical for us, and their CCTV and networking solutions give us complete peace of mind.',
        rating: 5,
        service: 'Security Solutions',
        date: '2026-05-03'
      },
      {
        id: 'test-8',
        clientName: 'Megha Verma',
        clientCompany: 'Student',
        clientImage: 'https://images.unsplash.com/photo-1618245472177-2a74ad3b994a?w=150',
        quote: 'Affordable, efficient, and friendly. Best decision we made for our IT needs!',
        rating: 4,
        service: 'Computer Services',
        date: '2026-04-28'
      },
    ];
  }

  // Laptops
  getLaptops(): Observable<Laptop[]> {
    return this.laptopsSubject.asObservable();
  }

  private getMockLaptops(): Laptop[] {
    return [
      {
        id: 'laptop-1',
        brand: 'Dell',
        model: 'Inspiron 15 3000',
        price: 18999,
        processor: 'Intel Core i5 11th Gen',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        condition: 'excellent',
        image: 'https://images.unsplash.com/photo-1588872657840-18fc6f6f4ee0?w=400',
        warranty: '6 months',
        inStock: true
      },
      {
        id: 'laptop-2',
        brand: 'HP',
        model: 'Pavilion 15',
        price: 22499,
        processor: 'AMD Ryzen 5 5500U',
        ram: '8GB DDR4',
        storage: '256GB SSD',
        condition: 'excellent',
        image: 'https://images.unsplash.com/photo-1517694712485-e4e4b89fd554?w=400',
        warranty: '6 months',
        inStock: true
      },
      {
        id: 'laptop-3',
        brand: 'Lenovo',
        model: 'ThinkPad E14',
        price: 25999,
        processor: 'Intel Core i7 10th Gen',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        condition: 'excellent',
        image: 'https://images.unsplash.com/photo-1521697474919-4b8b55e9f9db?w=400',
        warranty: '1 year',
        inStock: true
      },
      {
        id: 'laptop-4',
        brand: 'ASUS',
        model: 'VivoBook 15',
        price: 19999,
        processor: 'AMD Ryzen 3 5300U',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        condition: 'good',
        image: 'https://images.unsplash.com/photo-1491707014055-111ecb8f969f?w=400',
        warranty: '3 months',
        inStock: true
      },
      {
        id: 'laptop-5',
        brand: 'Dell',
        model: 'Vostro 14 5000',
        price: 29999,
        processor: 'Intel Core i7 11th Gen',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        condition: 'excellent',
        image: 'https://images.unsplash.com/photo-1588872657840-18fc6f6f4ee0?w=400',
        warranty: '1 year',
        inStock: true
      },
      {
        id: 'laptop-6',
        brand: 'HP',
        model: 'ProBook 445',
        price: 35999,
        processor: 'AMD Ryzen 5 Pro 5650U',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        condition: 'excellent',
        image: 'https://images.unsplash.com/photo-1517694712485-e4e4b89fd554?w=400',
        warranty: '1 year',
        inStock: true
      },
      {
        id: 'laptop-7',
        brand: 'Lenovo',
        model: 'IdeaPad 5',
        price: 24999,
        processor: 'Intel Core i5 11th Gen',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        condition: 'excellent',
        image: 'https://images.unsplash.com/photo-1520869db7652-8bada08788e4?w=400',
        warranty: '6 months',
        inStock: false
      },
      {
        id: 'laptop-8',
        brand: 'ASUS',
        model: 'X543U',
        price: 17999,
        processor: 'Intel Core i5 10th Gen',
        ram: '8GB DDR4',
        storage: '256GB SSD',
        condition: 'good',
        image: 'https://images.unsplash.com/photo-1491707014055-111ecb8f969f?w=400',
        warranty: '3 months',
        inStock: true
      },
      {
        id: 'laptop-9',
        brand: 'Dell',
        model: 'Latitude 5540',
        price: 44999,
        processor: 'Intel Core i7 12th Gen',
        ram: '16GB DDR4',
        storage: '512GB SSD',
        condition: 'excellent',
        image: 'https://images.unsplash.com/photo-1588872657840-18fc6f6f4ee0?w=400',
        warranty: '1 year',
        inStock: true
      },
      {
        id: 'laptop-10',
        brand: 'HP',
        model: 'Envy 13',
        price: 32999,
        processor: 'Intel Core i5 11th Gen',
        ram: '8GB DDR4',
        storage: '512GB SSD',
        condition: 'excellent',
        image: 'https://images.unsplash.com/photo-1517694712485-e4e4b89fd554?w=400',
        warranty: '1 year',
        inStock: true
      },
    ];
  }

  // Company Info
  getCompanyInfo(): Company {
    return {
      name: 'Nigam Enterprises',
      tagline: 'Your Trusted Technology Partner',
      logo: 'assets/logo.svg',
      mission: 'To provide affordable, reliable, and professional IT and security solutions that empower businesses and individuals.',
      vision: 'To be the leading IT service provider in the region, known for innovation, quality, and customer satisfaction.',
      values: [
        {
          id: 'val-1',
          title: 'Trust',
          description: 'We build lasting relationships through transparency and reliability',
          icon: 'handshake'
        },
        {
          id: 'val-2',
          title: 'Excellence',
          description: 'We deliver superior quality in every service we provide',
          icon: 'star'
        },
        {
          id: 'val-3',
          title: 'Innovation',
          description: 'We stay updated with latest technology and best practices',
          icon: 'lightbulb'
        },
        {
          id: 'val-4',
          title: 'Support',
          description: 'We provide 24/7 support to ensure your peace of mind',
          icon: 'support_agent'
        }
      ],
      stats: [
        { label: 'Happy Customers', value: 500, suffix: '+' },
        { label: 'Projects Completed', value: 1200, suffix: '+' },
        { label: 'Years of Experience', value: 8, suffix: '' },
        { label: 'Team Members', value: 35, suffix: '+' }
      ],
      aboutSections: [
        {
          title: 'Our Story',
          description: 'Founded in 2016, Nigam Enterprises started as a local service provider with a vision to deliver quality IT and security solutions.',
          highlights: ['Started small, grew big', 'Built on customer trust', 'Expanded service portfolio']
        },
        {
          title: 'Why Choose Us',
          description: 'We combine expertise, experience, and customer-centric approach to deliver solutions that matter.',
          highlights: ['Expert technicians', 'Affordable pricing', '24/7 Support', 'Warranty coverage']
        }
      ]
    };
  }
}
