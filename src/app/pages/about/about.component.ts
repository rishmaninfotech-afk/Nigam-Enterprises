import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { DataService } from '../../core/services/data.service';
import { Company } from "../../shared/components/navbar/navbar.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, HeroComponent],
  template: `
    <app-navbar></app-navbar>

    <app-hero
      title="About Nigam Enterprises"
      subtitle="Your Trusted Technology Partner Since 2016"
      backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
      primaryButtonText="Contact Us"
      primaryButtonLink="/contact"
      secondaryButtonText="Our Services"
      secondaryButtonLink="/services"
    ></app-hero>

    <!-- Company Story -->
    <section class="section section-light" data-aos="fade-up">
      <div class="container">
        <div class="story-grid">
          <div class="story-content" data-aos="fade-right">
            <h2 data-aos="fade-right">Our Story</h2>
            <p data-aos="fade-right" data-aos-delay="100">
              Founded in 2016, Nigam Enterprises started with a simple vision: to provide affordable, reliable,
              and professional IT and security solutions to businesses and individuals throughout the region.
            </p>
            <p data-aos="fade-right" data-aos-delay="200">
              What began as a small local service provider has grown into a trusted partner for comprehensive
              IT services. Our commitment to excellence, innovation, and customer satisfaction has earned us the
              trust of over 500 satisfied clients across diverse industries.
            </p>
            <p data-aos="fade-right" data-aos-delay="300">
              Today, our team of expert technicians continues to deliver cutting-edge solutions in CCTV systems,
              computer repair, hardware solutions, and networking services. We take pride in every project and
              remain dedicated to exceeding our clients' expectations.
            </p>
          </div>
          <div class="story-image" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500" alt="Our team" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section section-dark" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="mission-vision-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="mission-card" data-aos="zoom-in" data-aos-delay="100">
            <h3>Our Mission</h3>
            <p>{{ company?.mission }}</p>
          </div>
          <div class="vision-card" data-aos="zoom-in" data-aos-delay="200">
            <h3>Our Vision</h3>
            <p>{{ company?.vision }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="section section-light" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Our Core Values</h2>
          <p data-aos="fade-down" data-aos-delay="100">What drives us every day</p>
        </div>
        <div class="values-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="value-card" *ngFor="let value of company?.values; let i = index" [attr.data-aos]="'zoom-in'" [attr.data-aos-delay]="i * 100">
            <div class="value-icon">{{ getValueEmoji(value.title) }}</div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Business Statistics -->
    <section class="section section-dark stats-section" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Our Impact</h2>
          <p data-aos="fade-down" data-aos-delay="100">Trusted by thousands, serving with excellence</p>
        </div>
        <div class="stats-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="stat-card" *ngFor="let stat of company?.stats; let i = index" [attr.data-aos]="'flip-left'" [attr.data-aos-delay]="i * 100">
            <div class="stat-number">
              {{ stat.value }}<span *ngIf="stat.suffix">{{ stat.suffix }}</span>
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section section-light" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Why Choose Nigam Enterprises?</h2>
        </div>
        <div class="benefits-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="benefit-item" *ngFor="let benefit of benefits; let i = index" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100">
            <div class="benefit-icon">{{ benefit.icon }}</div>
            <h4>{{ benefit.title }}</h4>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section section-light cta-section" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="cta-box" data-aos="zoom-in">
          <h2>Let's Work Together</h2>
          <p>Get in touch with our team to discuss your IT and security needs</p>
          <a href="/contact" class="btn btn-primary">Contact Us Today</a>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  company: Company | null = null;
  benefits = [
    {
      icon: '🎯',
      title: 'Expert Technicians',
      description: 'Our team consists of certified professionals with years of experience'
    },
    {
      icon: '💰',
      title: 'Affordable Pricing',
      description: 'Quality service doesn\'t have to break the bank'
    },
    {
      icon: '⏰',
      title: '24/7 Support',
      description: 'Emergency support available round the clock'
    },
    {
      icon: '🛡️',
      title: 'Warranty & Guarantee',
      description: 'All services come with comprehensive warranty coverage'
    },
    {
      icon: '🚀',
      title: 'Latest Technology',
      description: 'We use cutting-edge tools and methodologies'
    },
    {
      icon: '😊',
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority'
    }
  ];

  constructor(
    private dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.setMetaTags();
    this.company = this.dataService.getCompanyInfo();
  }

  getValueEmoji(title: string): string {
    const emojis: { [key: string]: string } = {
      'Trust': '🤝',
      'Excellence': '⭐',
      'Innovation': '💡',
      'Support': '🛟'
    };
    return emojis[title] || '✓';
  }

  private setMetaTags() {
    this.titleService.setTitle('About Nigam Enterprises | IT & Security Solutions');
    this.metaService.updateTag({
      name: 'description',
      content: 'Learn about Nigam Enterprises - your trusted IT and security partner since 2016. Committed to excellence and customer satisfaction.'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'About Nigam Enterprises'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Your trusted IT and security partner with 8+ years of proven excellence'
    });
  }
}