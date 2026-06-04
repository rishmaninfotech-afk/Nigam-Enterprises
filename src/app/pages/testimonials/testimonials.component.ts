import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { DataService } from '../../core/services/data.service';
import { Testimonial } from '../../core/models/testimonial.model';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, HeroComponent],
  template: `
    <app-navbar></app-navbar>

    <app-hero
      title="What Our Clients Say"
      subtitle="Hear from businesses and individuals who trust us"
      backgroundImage="https://images.unsplash.com/photo-1521737711867-e3b97375f7b7?w=1200"
      primaryButtonText="Leave Feedback"
      primaryButtonLink="/contact"
      secondaryButtonText="Our Services"
      secondaryButtonLink="/services"
    ></app-hero>

    <!-- Testimonials Grid -->
    <section class="section section-light" data-aos="fade-up">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Client Testimonials</h2>
          <p data-aos="fade-down" data-aos-delay="100">Real feedback from our valued customers</p>
        </div>
        
        <div class="testimonials-grid" data-aos="fade-up" data-aos-delay="200">
          <div 
            *ngFor="let testimonial of testimonials; let i = index" 
            class="testimonial-card"
            [class.highlighted]="i === 0"
            [attr.data-aos]="'fade-up'"
            [attr.data-aos-delay]="i * 100"
          >
            <div class="testimonial-header">
              <img [src]="testimonial.clientImage" [alt]="testimonial.clientName" class="client-avatar">
              <div class="client-info">
                <h3>{{ testimonial.clientName }}</h3>
                <p class="client-company">{{ testimonial.clientCompany }}</p>
                <div class="rating">
                  <span 
                    *ngFor="let star of [].constructor(testimonial.rating); let idx = index" 
                    class="star filled"
                  >★</span>
                  <span 
                    *ngFor="let star of [].constructor(5 - testimonial.rating); let idx = index" 
                    class="star empty"
                  >☆</span>
                </div>
              </div>
            </div>
            <div class="testimonial-content">
              <p class="quote">"{{ testimonial.quote }}"</p>
              <div class="testimonial-meta">
                <span class="service-used">Service: {{ testimonial.service }}</span>
                <span class="date" *ngIf="testimonial.date">{{ testimonial.date }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section section-dark stats-section" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="stats-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="stat-item" data-aos="flip-left" data-aos-delay="100">
            <div class="stat-number">500+</div>
            <div class="stat-label">Satisfied Customers</div>
          </div>
          <div class="stat-item" data-aos="flip-left" data-aos-delay="200">
            <div class="stat-number">98%</div>
            <div class="stat-label">Satisfaction Rate</div>
          </div>
          <div class="stat-item" data-aos="flip-left" data-aos-delay="300">
            <div class="stat-number">4.9</div>
            <div class="stat-label">Avg Rating</div>
          </div>
          <div class="stat-item" data-aos="flip-left" data-aos-delay="400">
            <div class="stat-number">8+</div>
            <div class="stat-label">Years in Business</div>
          </div>
        </div>
      </div>
    </section>

    <!-- How to Leave Review -->
    <section class="section section-light review-process" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Share Your Experience</h2>
          <p data-aos="fade-down" data-aos-delay="100">We'd love to hear about your experience with our services</p>
        </div>
        
        <div class="review-steps" data-aos="fade-up" data-aos-delay="200">
          <div class="step" data-aos="zoom-in" data-aos-delay="100">
            <div class="step-number">1</div>
            <h3>Receive Our Service</h3>
            <p>Enjoy our professional IT and security solutions</p>
          </div>
          <div class="step" data-aos="zoom-in" data-aos-delay="200">
            <div class="step-number">2</div>
            <h3>Share Your Feedback</h3>
            <p>Contact us with your thoughts and experience</p>
          </div>
          <div class="step" data-aos="zoom-in" data-aos-delay="300">
            <div class="step-number">3</div>
            <h3>Help Others Decide</h3>
            <p>Your review helps others make informed decisions</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-light" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="cta-box" data-aos="zoom-in">
          <h2>Ready to Experience Our Service?</h2>
          <p>Join hundreds of satisfied customers who trust us with their IT and security needs</p>
          <a href="/contact" class="btn btn-primary">Get Started Today</a>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  testimonials: Testimonial[] = [];

  constructor(
    private dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.setMetaTags();
    this.dataService.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials;
    });
  }

  private setMetaTags() {
    this.titleService.setTitle('Testimonials | Nigam Enterprises');
    this.metaService.updateTag({
      name: 'description',
      content: 'Read testimonials from satisfied customers of Nigam Enterprises. See why they trust us for IT and security solutions.'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Customer Testimonials | Nigam Enterprises'
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: 'See what our customers say about our professional IT and security services'
    });
  }
}