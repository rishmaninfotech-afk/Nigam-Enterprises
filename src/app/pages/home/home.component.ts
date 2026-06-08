import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { CTAComponent } from '../../shared/components/cta/cta.component';
import { DataService } from '../../core/services/data.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { Service } from '../../core/models/service.model';
import { Project } from '../../core/models/project.model';
import { Testimonial } from '../../core/models/testimonial.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    ServiceCardComponent,
    ProjectCardComponent,
    CTAComponent
  ],
  template: `
    <app-navbar></app-navbar>

    <!-- Hero Section -->
    <app-hero
      title="Professional IT & Security Solutions"
      subtitle="From CCTV systems to computer repairs - we've got you covered"
      backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
      primaryButtonText="Get Your Free Quote"
      primaryButtonLink="/contact"
      secondaryButtonText="View Services"
      secondaryButtonLink="/services"
    ></app-hero>

    <!-- Company Introduction -->
    <section class="section section-light" data-aos="fade-up">
      <div class="container">
        <div class="intro-grid">
          <div class="intro-content">
            <h2 data-aos="fade-right" data-aos-delay="100">Welcome to Nigam Enterprises</h2>
            <p class="intro-subtitle" data-aos="fade-right" data-aos-delay="200">
              Your trusted partner for comprehensive IT and security solutions since 2016
            </p>
            <p data-aos="fade-right" data-aos-delay="300">
              We're a dedicated team of professionals committed to delivering exceptional service and innovative solutions
              to businesses and individuals throughout the region. Whether you need CCTV installation, computer repair, or
              networking solutions, we're here to help.
            </p>
            <div class="intro-features" data-aos="fade-right" data-aos-delay="400">
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Expert Technicians</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Affordable Pricing</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>24/7 Support</span>
              </div>
              <div class="feature">
                <span class="feature-icon">✓</span>
                <span>Warranty Coverage</span>
              </div>
            </div>
          </div>
          <div class="intro-image" data-aos="fade-left" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500" alt="Team working" loading="lazy">
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section section-dark" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Our Services</h2>
          <p data-aos="fade-down" data-aos-delay="100">Comprehensive solutions tailored to your needs</p>
        </div>
        <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
          <app-service-card *ngFor="let service of featuredServices; let i = index" [service]="service" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100"></app-service-card>
        </div>
        <div class="section-cta" data-aos="fade-up" data-aos-delay="300">
          <a href="/services" class="btn btn-primary">Explore All Services →</a>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="section section-light" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Why Choose Nigam Enterprises?</h2>
        </div>
        <div class="why-choose-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="why-card" data-aos="zoom-in" data-aos-delay="100">
            <div class="why-icon">🎯</div>
            <h3>Experience</h3>
            <p>8+ years of proven track record in IT and security solutions</p>
          </div>
          <div class="why-card" data-aos="zoom-in" data-aos-delay="200">
            <div class="why-icon">💡</div>
            <h3>Innovation</h3>
            <p>Latest technology and best practices for optimal results</p>
          </div>
          <div class="why-card" data-aos="zoom-in" data-aos-delay="300">
            <div class="why-icon">🤝</div>
            <h3>Trust</h3>
            <p>Built on customer trust and reliability since day one</p>
          </div>
          <div class="why-card" data-aos="zoom-in" data-aos-delay="400">
            <div class="why-icon">⚡</div>
            <h3>Support</h3>
            <p>24/7 customer support to ensure your peace of mind</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistics Counter -->
    <section class="section section-dark stats-section" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Our Impact</h2>
          <p data-aos="fade-down" data-aos-delay="100">Numbers that define our success</p>
        </div>
        <div class="stats-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="stat-card" data-aos="flip-left" data-aos-delay="100">
            <div class="stat-number">1200+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-card" data-aos="flip-left" data-aos-delay="200">
            <div class="stat-number">500+</div>
            <div class="stat-label">Happy Customers</div>
          </div>
          <div class="stat-card" data-aos="flip-left" data-aos-delay="300">
            <div class="stat-number">8</div>
            <div class="stat-label">Years of Experience</div>
          </div>
          <div class="stat-card" data-aos="flip-left" data-aos-delay="400">
            <div class="stat-number">35+</div>
            <div class="stat-label">Team Members</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="section section-light" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Featured Projects</h2>
          <p data-aos="fade-down" data-aos-delay="100">Success stories from our satisfied clients</p>
        </div>
        <div class="projects-grid" data-aos="fade-up" data-aos-delay="200">
          <app-project-card *ngFor="let project of featuredProjects; let i = index" [project]="project" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100"></app-project-card>
        </div>
        <div class="section-cta" data-aos="fade-up" data-aos-delay="300">
          <a href="/projects" class="btn btn-primary">View All Projects →</a>
        </div>
      </div>
    </section>

    <!-- Testimonials Preview -->
    <section class="section section-dark testimonials-section" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header testimonials-header">
          <h2 data-aos="fade-down">What Our Clients Say</h2>
          <p data-aos="fade-down" data-aos-delay="100">Real feedback from real customers</p>
        </div>
        <div class="testimonials-preview-grid" data-aos="fade-up" data-aos-delay="200">
          <div 
            *ngFor="let testimonial of featuredTestimonials; let i = index" 
            class="testimonial-preview-card"
            [class.highlighted]="i === 0"
            [attr.data-aos]="'fade-up'"
            [attr.data-aos-delay]="i * 100"
          >
            <div class="testimonial-header">
              <img [src]="testimonial.clientImage" [alt]="testimonial.clientName" class="client-avatar">
              <div class="client-info">
                <h4>{{ testimonial.clientName }}</h4>
                <p class="client-company">{{ testimonial.clientCompany }}</p>
                <div class="rating">
                  <span 
                    *ngFor="let star of [].constructor(testimonial.rating); let idx = index" 
                    class="star filled"
                  >★</span>
                </div>
              </div>
            </div>
            <div class="testimonial-content">
              <p>"{{ testimonial.quote }}"</p>
              <div class="testimonial-service">
                {{ testimonial.service }}
              </div>
            </div>
          </div>
        </div>
        <div class="section-cta" data-aos="fade-up" data-aos-delay="300">
          <a href="/testimonials" class="btn btn-secondary">Read More Testimonials →</a>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section section-light" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <app-cta
          title="Ready to Transform Your IT Infrastructure?"
          description="Get in touch with our team today for a free consultation and quote"
          primaryButtonText="Contact Us Now"
          primaryButtonLink="/contact"
          secondaryButtonText="Call Now"
          secondaryButtonLink="tel:+916391647935"
        ></app-cta>
      </div>
    </section>

    <!-- Quick Contact Preview -->
    <section class="section section-light quick-contact" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <h3 data-aos="fade-down">Get In Touch</h3>
        <div class="quick-contact-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="contact-item" data-aos="zoom-in" data-aos-delay="100">
            <span class="contact-icon">📧</span>
            <p>
              <strong>Email</strong><br>
              <a href="mailto:n.sushmit71@gmail.com">n.sushmit71@gmail.com</a>
            </p>
          </div>
          <div class="contact-item" data-aos="zoom-in" data-aos-delay="200">
            <span class="contact-icon">📞</span>
            <p>
              <strong>Phone</strong><br>
              <a href="tel:+916391647935">+91 63916 47935</a>
            </p>
          </div>
          <div class="contact-item" data-aos="zoom-in" data-aos-delay="300">
            <span class="contact-icon">💬</span>
            <p>
              <strong>WhatsApp</strong><br>
              <a href="https://wa.me/916391647935" target="_blank">Message us</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredServices: Service[] = [];
  featuredProjects: Project[] = [];
  featuredTestimonials: Testimonial[] = [];

  constructor(
    private dataService: DataService,
    private analyticsService: AnalyticsService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.setMetaTags();
    this.analyticsService.trackPageView('Home', 'homepage');

    this.dataService.getServices().subscribe(services => {
      this.featuredServices = services.slice(0, 6);
    });

    this.dataService.getProjects().subscribe(projects => {
      this.featuredProjects = projects.slice(0, 3);
    });

    this.dataService.getTestimonials().subscribe(testimonials => {
      this.featuredTestimonials = testimonials.slice(0, 3);
    });
  }

  private setMetaTags() {
    this.titleService.setTitle('Nigam Enterprises | Professional IT & Security Solutions');
    this.metaService.updateTag({
      name: 'description',
      content: 'Expert IT and security solutions including CCTV installation, computer repair, and networking services. Your trusted technology partner.'
    });
    this.metaService.updateTag({
      name: 'keywords',
      content: 'CCTV, computer repair, networking, IT support, security solutions'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Nigam Enterprises | Professional IT & Security Solutions'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'Expert IT and security solutions including CCTV installation, computer repair, and networking services.'
    });
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website'
    });
  }
}