import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ContactService } from '../../core/services/contact.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { DataService } from '../../core/services/data.service';
import { Service } from '../../core/models/service.model';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NavbarComponent, FooterComponent, HeroComponent],
  template: `
    <app-navbar></app-navbar>

    <app-hero
      title="Contact Us"
      subtitle="Get in touch with our team"
      backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
      primaryButtonText="Scroll Down"
      primaryButtonLink="#contact-form"
      secondaryButtonText="Back to Home"
      secondaryButtonLink="/"
    ></app-hero>

    <!-- Contact Section -->
    <section class="section section-light" id="contact-form" data-aos="fade-up">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-wrapper" data-aos="fade-right">
            <h2 data-aos="fade-right">Send Us a Message</h2>
            <p data-aos="fade-right" data-aos-delay="100">We'll get back to you within 24 hours</p>

            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <!-- Name Field -->
              <div class="form-group">
                <label for="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  formControlName="name"
                  placeholder="Your Name"
                  class="form-control"
                >
                <span class="form-error" *ngIf="isFieldInvalid('name')">
                  Full name is required
                </span>
              </div>


              <!-- Phone Field -->
              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  formControlName="phone"
                  placeholder="+91 98765 43210"
                  class="form-control"
                >
                <span class="form-error" *ngIf="isFieldInvalid('phone')">
                  {{ getPhoneError() }}
                </span>
              </div>

              <!-- Service Selection -->
              <div class="form-group">
                <label for="service">Service Required</label>
                <select formControlName="serviceRequired" id="service" class="form-control">
                  <option value="">Select a Service</option>
                  <option *ngFor="let service of services" [value]="service.title">
                    {{ service.title }}
                  </option>
                </select>
                <span class="form-error" *ngIf="isFieldInvalid('serviceRequired')">
                  Please select a service
                </span>
              </div>

              <!-- Message Field -->
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  formControlName="message"
                  placeholder="Tell us about your requirements..."
                  class="form-control"
                  rows="5"
                ></textarea>
                <span class="form-error" *ngIf="isFieldInvalid('message')">
                  Message must be at least 10 characters
                </span>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                [disabled]="contactForm.invalid || isSubmitting"
                class="btn btn-primary btn-full"
              >
                {{ isSubmitting ? 'Sending...' : 'Send via WhatsApp' }}
              </button>

              <!-- Success Message -->
              <div class="form-success" *ngIf="submitSuccess">
                {{ successMessage }}
              </div>

              <!-- Error Message -->
              <div class="form-error" *ngIf="submitError">
                {{ errorMessage }}
              </div>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="contact-info-wrapper" data-aos="fade-left">
            <h2 data-aos="fade-left">Get In Touch</h2>

            <!-- Contact Details -->
            <div class="contact-info-section" data-aos="fade-left" data-aos-delay="100">
              <h3>Our Office</h3>
              <div class="info-item">
                <span class="info-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>Nigam Enterprises<br>City Center, Main Street<br>Your City, State 12345</p>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="contact-info-section" data-aos="fade-left" data-aos-delay="200">
              <div class="info-item">
                <span class="info-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>
                    <a href="tel:+919876543210">+91 98765 43210</a><br>
                    <a href="tel:+919123456789">+91 91234 56789</a>
                  </p>
                </div>
              </div>
            </div>

            <!-- Email -->
            <div class="contact-info-section">
              <div class="info-item">
                <span class="info-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p><a href="mailto:info@nigam-enterprises.com">info@nigam-enterprises.com</a></p>
                </div>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="contact-info-section" data-aos="fade-left" data-aos-delay="300">
              <div class="info-item">
                <span class="info-icon">💬</span>
                <div>
                  <strong>WhatsApp</strong>
                  <p><a href="https://wa.me/919876543210" target="_blank">Message on WhatsApp</a></p>
                </div>
              </div>
            </div>

            <!-- Hours -->
            <div class="contact-info-section" data-aos="fade-left" data-aos-delay="400">
              <div class="info-item">
                <span class="info-icon">⏰</span>
                <div>
                  <strong>Business Hours</strong>
                  <p>
                    Mon - Fri: 9:00 AM - 6:00 PM<br>
                    Sat: 10:00 AM - 4:00 PM<br>
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>

            <!-- Map Placeholder -->
            <div class="map-container" data-aos="fade-left" data-aos-delay="500">
              <div class="map-placeholder">
                <span class="map-icon">📍</span>
                <p>Map will be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section section-dark" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="section-header">
          <h2 data-aos="fade-down">Frequently Asked Questions</h2>
        </div>
        <div class="faq-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="faq-item" *ngFor="let faq of faqs; let i = index" [attr.data-aos]="'fade-up'" [attr.data-aos-delay]="i * 100">
            <h4>{{ faq.question }}</h4>
            <p>{{ faq.answer }}</p>
          </div>
          <div class="faq-item">
            <h4>Do you offer emergency support?</h4>
            <p>Yes! We offer 24/7 emergency support for our clients with active service agreements.</p>
          </div>
          <div class="faq-item">
            <h4>What areas do you service?</h4>
            <p>We service the entire city and surrounding areas. Contact us to check your location.</p>
          </div>
          <div class="faq-item">
            <h4>Do you offer customized solutions?</h4>
            <p>Absolutely! We design custom solutions tailored to your specific requirements.</p>
          </div>
          <div class="faq-item">
            <h4>What warranty do you provide?</h4>
            <p>All services include warranty. Contact us for specific warranty details.</p>
          </div>
          <div class="faq-item">
            <h4>Can I get a free consultation?</h4>
            <p>Yes, we offer free initial consultations to understand your needs.</p>
          </div>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  services: Service[] = [];
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  successMessage = '';
  errorMessage = '';
  faqs = [
    {
      question: "What is your response time?",
      answer: "We respond to all inquiries within 24 hours during business days."
    },
    {
      question: "Do you offer emergency support?",
      answer: "Yes! We offer 24/7 emergency support for our clients with active service agreements."
    },
    {
      question: "What areas do you service?",
      answer: "We service the entire city and surrounding areas. Contact us to check your location."
    },
    {
      question: "Do you offer customized solutions?",
      answer: "Absolutely! We design custom solutions tailored to your specific requirements."
    },
    {
      question: "What warranty do you provide?",
      answer: "All services include warranty. Contact us for specific warranty details."
    },
    {
      question: "Can I get a free consultation?",
      answer: "Yes, we offer free initial consultations to understand your needs."
    }
  ];

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private analyticsService: AnalyticsService,
    private dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.setMetaTags();
    this.initializeForm();
    this.loadServices();
    this.analyticsService.trackPageView('Contact', 'contact-page');
    AOS.init({ duration: 800, once: true });
  }

  private initializeForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9\s+\-()]{10,}$/)]],
      serviceRequired: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  private loadServices() {
    this.dataService.getServices().subscribe(services => {
      this.services = services.slice(0, 10);
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  getEmailError(): string {
    const emailControl = this.contactForm.get('email');
    if (emailControl?.errors?.['required']) {
      return 'Email is required';
    }
    return emailControl?.errors?.['email'] ? 'Please enter a valid email' : '';
  }

  getPhoneError(): string {
    const phoneControl = this.contactForm.get('phone');
    if (phoneControl?.errors?.['required']) {
      return 'Phone number is required';
    }
    return phoneControl?.errors?.['pattern'] ? 'Please enter a valid phone number' : '';
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    const formData = this.contactForm.value;
    
    // Format phone number for WhatsApp (remove spaces, parentheses, hyphens)
    const cleanPhoneNumber = formData.phone.replace(/[\s\-\(\)]/g, '');
    
    // Generate WhatsApp message
    const whatsappMessage = `Hello, I'm ${encodeURIComponent(formData.name)}.\n\nI'm interested in: ${encodeURIComponent(formData.serviceRequired)}\n\nMy phone number: ${encodeURIComponent(formData.phone)}\n\nMessage: ${encodeURIComponent(formData.message)}`;
    
    // Construct WhatsApp API URL
    const whatsappUrl = `https://wa.me/919876543210?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Save form submission locally
    this.contactService.saveFormSubmission({
      name: formData.name,
      phone: formData.phone,
      serviceRequired: formData.serviceRequired,
      message: formData.message,
      timestamp: new Date()
    });
    
    // Track form submission
    this.analyticsService.trackFormSubmit('contact_form');
    
    // Show success message
    this.successMessage = 'Redirecting to WhatsApp...';
    this.submitSuccess = true;
    
    // Reset form
    this.contactForm.reset();
    
    // Reset submitting status after a delay
    setTimeout(() => {
      this.isSubmitting = false;
    }, 2000);
  }

  private setMetaTags() {
    this.titleService.setTitle('Contact Us | Nigam Enterprises');
    this.metaService.updateTag({
      name: 'description',
      content: 'Contact Nigam Enterprises for IT and security solutions. Call, email, or visit us today for a free consultation.'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Contact Nigam Enterprises'
    });
  }
}