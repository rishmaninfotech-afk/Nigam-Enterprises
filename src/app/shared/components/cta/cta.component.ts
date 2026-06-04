import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="cta-section">
      <div class="cta-container">
        <div class="cta-content">
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
          <div class="cta-buttons">
            <a [routerLink]="primaryButtonLink" class="btn btn-primary">
              {{ primaryButtonText }}
            </a>
            <a [routerLink]="secondaryButtonLink" class="btn btn-secondary">
              {{ secondaryButtonText }}
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./cta.component.scss']
})
export class CTAComponent {
  @Input() title = 'Ready to Get Started?';
  @Input() description = 'Contact us today and let us help you with your IT and security needs.';
  @Input() primaryButtonText = 'Get Quote Now';
  @Input() primaryButtonLink = '/contact';
  @Input() secondaryButtonText = 'Learn More';
  @Input() secondaryButtonLink = '/services';
}
