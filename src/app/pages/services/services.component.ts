import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ServiceCardComponent } from '../../shared/components/service-card/service-card.component';
import { DataService } from '../../core/services/data.service';
import { Service } from '../../core/models/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, HeroComponent, ServiceCardComponent],
  template: `
    <app-navbar></app-navbar>

    <app-hero
      title="Our Services"
      subtitle="Comprehensive IT and Security Solutions"
      backgroundImage="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200"
      primaryButtonText="Get Quote"
      primaryButtonLink="/contact"
      secondaryButtonText="View Projects"
      secondaryButtonLink="/projects"
    ></app-hero>

    <!-- Services by Category -->
    <section class="section section-light" data-aos="fade-up">
      <div class="container">
        <!-- CCTV Services -->
        <div class="service-category" data-aos="fade-up" data-aos-delay="100">
          <h2 class="category-title">
            <span class="category-icon">📹</span>
            CCTV Solutions
          </h2>
          <p class="category-description">Professional security monitoring and surveillance systems</p>
          <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            <app-service-card *ngFor="let service of cctvServices; let i = index" [service]="service" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100"></app-service-card>
          </div>
        </div>

        <!-- Computer Services -->
        <div class="service-category" data-aos="fade-up" data-aos-delay="100">
          <h2 class="category-title">
            <span class="category-icon">💻</span>
            Computer Services
          </h2>
          <p class="category-description">Repair, maintenance, and software solutions</p>
          <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            <app-service-card *ngFor="let service of computerServices; let i = index" [service]="service" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100"></app-service-card>
          </div>
        </div>

        <!-- Hardware Solutions -->
        <div class="service-category" data-aos="fade-up" data-aos-delay="100">
          <h2 class="category-title">
            <span class="category-icon">🖥️</span>
            Hardware Solutions
          </h2>
          <p class="category-description">Quality components and refurbished systems</p>
          <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            <app-service-card *ngFor="let service of hardwareServices; let i = index" [service]="service" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100"></app-service-card>
          </div>
        </div>

        <!-- Networking Services -->
        <div class="service-category" data-aos="fade-up" data-aos-delay="100">
          <h2 class="category-title">
            <span class="category-icon">🌐</span>
            Networking Solutions
          </h2>
          <p class="category-description">Fast, secure, and reliable network infrastructure</p>
          <div class="services-grid" data-aos="fade-up" data-aos-delay="200">
            <app-service-card *ngFor="let service of networkingServices; let i = index" [service]="service" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100"></app-service-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Process -->
    <section class="section section-dark" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Our Process</h2>
          <p data-aos="fade-down" data-aos-delay="100">How we deliver excellence</p>
        </div>
        <div class="process-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="process-step" data-aos="zoom-in" data-aos-delay="100">
            <div class="step-number">1</div>
            <h3>Consultation</h3>
            <p>We understand your specific needs and requirements</p>
          </div>
          <div class="process-step" data-aos="zoom-in" data-aos-delay="200">
            <div class="step-number">2</div>
            <h3>Assessment</h3>
            <p>Thorough evaluation of your current setup</p>
          </div>
          <div class="process-step" data-aos="zoom-in" data-aos-delay="300">
            <div class="step-number">3</div>
            <h3>Solution Design</h3>
            <p>Customized solution tailored to your needs</p>
          </div>
          <div class="process-step" data-aos="zoom-in" data-aos-delay="400">
            <div class="step-number">4</div>
            <h3>Implementation</h3>
            <p>Professional installation and configuration</p>
          </div>
          <div class="process-step" data-aos="zoom-in" data-aos-delay="500">
            <div class="step-number">5</div>
            <h3>Training</h3>
            <p>Complete training for your team</p>
          </div>
          <div class="process-step" data-aos="zoom-in" data-aos-delay="600">
            <div class="step-number">6</div>
            <h3>Support</h3>
            <p>Ongoing 24/7 support and maintenance</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-light" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="cta-box" data-aos="zoom-in">
          <h2>Ready to Get Started?</h2>
          <p>Let's discuss how we can help transform your IT infrastructure</p>
          <a href="/contact" class="btn btn-primary">Contact Us Today</a>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  cctvServices: Service[] = [];
  computerServices: Service[] = [];
  hardwareServices: Service[] = [];
  networkingServices: Service[] = [];

  constructor(
    private dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.setMetaTags();
    this.dataService.getServices().subscribe(services => {
      this.cctvServices = services.filter(s => s.category === 'cctv');
      this.computerServices = services.filter(s => s.category === 'computer');
      this.hardwareServices = services.filter(s => s.category === 'hardware');
      this.networkingServices = services.filter(s => s.category === 'networking');
    });
  }

  private setMetaTags() {
    this.titleService.setTitle('Services | Nigam Enterprises');
    this.metaService.updateTag({
      name: 'description',
      content: 'CCTV installation, computer repair, hardware solutions, and networking services. Expert IT solutions for your business.'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Our Services | Nigam Enterprises'
    });
  }
}