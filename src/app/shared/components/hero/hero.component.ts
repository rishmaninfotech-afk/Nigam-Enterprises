import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero" [style.backgroundImage]="'url(' + backgroundImage + ')'">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">{{ title }}</h1>
          <p class="hero-subtitle">{{ subtitle }}</p>
          <div class="hero-buttons">
            <a [routerLink]="primaryButtonLink" class="btn btn-primary">
              {{ primaryButtonText }}
            </a>
            <a [routerLink]="secondaryButtonLink" class="btn btn-secondary">
              {{ secondaryButtonText }}
            </a>
          </div>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        <span></span>
      </div>
    </section>
  `,
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  @Input() title = 'Welcome to Nigam Enterprises';
  @Input() subtitle = 'Professional IT and Security Solutions';
  @Input() backgroundImage = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200';
  @Input() primaryButtonText = 'Get Quote';
  @Input() primaryButtonLink = '/contact';
  @Input() secondaryButtonText = 'Learn More';
  @Input() secondaryButtonLink = '/services';
}
