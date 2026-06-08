import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="footer">
      <div class="footer-container">
        <!-- Company Info -->
        <div class="footer-section">
          <h3>Nigam Enterprises</h3>
          <p>Your trusted technology partner for IT and security solutions.</p>
          <div class="social-links">
            <a href="#" class="social-icon">f</a>
            <a href="#" class="social-icon">in</a>
            <a href="#" class="social-icon">tw</a>
            <a href="#" class="social-icon">yt</a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a routerLink="/">Home</a></li>
            <li><a routerLink="/about">About</a></li>
            <li><a routerLink="/services">Services</a></li>
            <li><a routerLink="/projects">Projects</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">CCTV Solutions</a></li>
            <li><a href="#">Refurbished Laptops</a></li>
            <li><a href="#">Computer Repair</a></li>
            <li><a href="#">Hardware Sales</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4>Contact Us</h4>
          <p>
            <strong>Email:</strong><br>
            <a href="mailto:n.sushmit71@gmail.com">n.sushmit71@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong><br>
            <a href="tel:+916391647935">+91 63916 47935</a>
          </p>
          <p>
            <strong>WhatsApp:</strong><br>
            <a href="https://wa.me/916391647935" target="_blank">Message us</a>
          </p>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; 2024 Nigam Enterprises. All rights reserved.</p>
        <div class="footer-links">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
          <span>•</span>
          <a href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
