import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CompanyValue, CompanyStat, AboutSection } from '../../../core/models/company.model';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <div class="navbar-container">
        <!-- Logo -->
        <div class="navbar-brand">
          <a routerLink="/" class="logo">
            <span class="logo-icon">⚙️</span>
            <span class="logo-text">Nigam Enterprises</span>
          </a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="mobile-toggle" (click)="toggleMobileMenu()">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Navigation Menu -->
        <ul class="navbar-menu" [class.active]="mobileMenuOpen">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
          <li><a routerLink="/about" routerLinkActive="active">About</a></li>
          <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
          <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
          <li><a routerLink="/testimonials" routerLinkActive="active">Testimonials</a></li>
          <li><a routerLink="/refurbished-laptops" routerLinkActive="active">Laptops</a></li>
          <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
        </ul>

        <!-- CTA Button -->
        <a routerLink="/contact" class="navbar-cta">Get Quote</a>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobileMenuOpen = false;

  ngOnInit() {
    // Close mobile menu on route change
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