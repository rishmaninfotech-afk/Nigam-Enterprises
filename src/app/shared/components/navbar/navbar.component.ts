import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CompanyValue, CompanyStat, AboutSection } from '../../../core/models/company.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="navbar-container">
        <!-- Logo -->
        <div class="navbar-brand">
          <a routerLink="/" class="logo" aria-label="Nigam Enterprises Home">
            <span class="logo-icon">⚙️</span>
            <span class="logo-text">Nigam Enterprises</span>
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="mobile-toggle" 
          (click)="toggleMobileMenu()"
          [attr.aria-expanded]="mobileMenuOpen"
          aria-controls="navbar-menu"
          aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Navigation Menu -->
        <ul 
          class="navbar-menu" 
          [class.active]="mobileMenuOpen"
          id="navbar-menu"
          role="menubar">
          <li role="none"><a routerLink="/" (click)="closeMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }" role="menuitem">Home</a></li>
          <li role="none"><a routerLink="/about" (click)="closeMenu()" routerLinkActive="active" role="menuitem">About</a></li>
          <li role="none"><a routerLink="/services" (click)="closeMenu()" routerLinkActive="active" role="menuitem">Services</a></li>
          <li role="none"><a routerLink="/projects" (click)="closeMenu()" routerLinkActive="active" role="menuitem">Projects</a></li>
          <li role="none"><a routerLink="/testimonials" (click)="closeMenu()" routerLinkActive="active" role="menuitem">Testimonials</a></li>
          <li role="none"><a routerLink="/refurbished-laptops" (click)="closeMenu()" routerLinkActive="active" role="menuitem">Laptops</a></li>
          <li role="none"><a routerLink="/contact" (click)="closeMenu()" routerLinkActive="active" role="menuitem">Contact</a></li>
        </ul>

        <!-- CTA Button -->
        <a routerLink="/contact" class="navbar-cta" role="button" aria-label="Get a quote">Get Quote</a>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen = false;

  constructor(private router: Router) {
    // Close mobile menu when route changes
    this.router.events.subscribe(() => {
      this.closeMenu();
    });
  }

  ngOnInit() {
    // Additional initialization if needed
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }
}

export interface Company {
  name: string;
  tagline: string;
  logo: string;
  mission: string;
  vision: string;
  values: CompanyValue[];
  stats: CompanyStat[];
  aboutSections: AboutSection[];
}