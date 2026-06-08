import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Service } from '../../../core/models/service.model';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="service-card">
      <div class="card-image">
        <img [src]="service.image" [alt]="service.title" loading="lazy">
        <div class="card-overlay">
          <a routerLink="/contact" class="btn-overlay">Get Quote</a>
        </div>
      </div>
      <div class="card-content">
        <div class="card-icon">{{ getIconEmoji(service.icon) }}</div>
        <h3>{{ service.title }}</h3>
        <p>{{ service.description }}</p>
        
        <div class="card-buttons">
          <a 
            href="tel:+916391647935" 
            class="btn btn-call"
            (click)="trackButtonClick('call')"
          >
            Call Now
          </a>
          <a 
            href="https://wa.me/916391647935?text=Hi,%20I%27m%20interested%20in%20{{service.title}}.%20Please%20contact%20me."
            target="_blank" 
            class="btn btn-whatsapp"
            (click)="trackButtonClick('whatsapp')"
          >
            WhatsApp
          </a>
        </div>
        
        <div class="card-features">
          <span *ngFor="let feature of service.features.slice(0, 2)" class="feature-tag">
            {{ feature }}
          </span>
        </div>
        <a routerLink="/services" class="learn-more">Learn More →</a>
      </div>
    </div>
  `,
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent {
  @Input() service!: Service;

  getIconEmoji(icon: string): string {
    const iconMap: { [key: string]: string } = {
      'videocam': '📹',
      'settings': '⚙️',
      'verified': '✓',
      'computer': '💻',
      'laptop': '💻',
      'extension': '🔧',
      'security': '🛡️',
      'memory': '🖥️',
      'phoneAndroid': '📱',
      'print': '🖨️',
      'wifi': '📶',
      'router': '🌐',
      'settings_remote': '⚙️'
    };
    return iconMap[icon] || '✓';
  }
  
  trackButtonClick(buttonType: string): void {
    // Track button clicks if needed
    console.log(`Service card ${buttonType} button clicked for ${this.service.title}`);
  }
}