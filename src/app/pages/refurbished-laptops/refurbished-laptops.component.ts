import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { DataService } from '../../core/services/data.service';
import { Laptop } from '../../core/models/laptop.model';

@Component({
  selector: 'app-refurbished-laptops',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent, HeroComponent],
  template: `
    <app-navbar></app-navbar>

    <app-hero
      title="Refurbished Laptops"
      subtitle="Quality laptops at affordable prices"
      backgroundImage="https://images.unsplash.com/photo-1588872657840-18fc6f6f4ee0?w=1200"
      primaryButtonText="View Products"
      primaryButtonLink="#products"
      secondaryButtonText="Contact for Bulk"
      secondaryButtonLink="/contact"
    ></app-hero>

    <!-- Products Section -->
    <section class="section section-light" id="products">
      <div class="container">
        <div class="products-header">
          <h2>Our Inventory</h2>
          <p>Certified refurbished laptops with warranty</p>
        </div>

        <!-- Filter Options -->
        <div class="filter-section">
          <div class="filter-group">
            <label>Condition:</label>
            <select [(ngModel)]="selectedCondition" (change)="filterProducts()" class="filter-select">
              <option value="">All Conditions</option>
              <option value="good">Good</option>
              <option value="excellent">Excellent</option>
            </select>
          </div>
          <div class="filter-group">
            <label>Price Range:</label>
            <select [(ngModel)]="selectedPriceRange" (change)="filterProducts()" class="filter-select">
              <option value="">All Prices</option>
              <option value="below20">Below ₹20,000</option>
              <option value="20to30">₹20,000 - ₹30,000</option>
              <option value="above30">Above ₹30,000</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        <div class="products-grid">
          <div class="product-card" *ngFor="let laptop of displayedLaptops">
            <div class="product-image">
              <img [src]="laptop.image" [alt]="laptop.model" loading="lazy">
              <div class="product-badge" [class]="laptop.condition">
                {{ laptop.condition | uppercase }}
              </div>
              <div class="product-stock" [class.out-of-stock]="!laptop.inStock">
                {{ laptop.inStock ? 'In Stock' : 'Out of Stock' }}
              </div>
            </div>
            <div class="product-content">
              <h3>{{ laptop.brand }} {{ laptop.model }}</h3>
              <div class="product-specs">
                <span class="spec">
                  <strong>Processor:</strong> {{ laptop.processor }}
                </span>
                <span class="spec">
                  <strong>RAM:</strong> {{ laptop.ram }}
                </span>
                <span class="spec">
                  <strong>Storage:</strong> {{ laptop.storage }}
                </span>
              </div>
              <div class="product-price">
                ₹{{ laptop.price | number: '1.0-0' }}
              </div>
              <div class="product-warranty">
                <span class="warranty-icon">🛡️</span>
                {{ laptop.warranty }} Warranty
              </div>
              <div class="product-actions">
                <button class="btn btn-secondary" (click)="viewDetails(laptop)">
                  View Details
                </button>
                <a href="/contact" class="btn btn-primary">Contact for Purchase</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Load More -->
        <div class="load-more-section" *ngIf="hasMoreProducts">
          <button (click)="loadMoreProducts()" class="btn btn-primary">
            Load More Products
          </button>
        </div>

        <!-- No Results -->
        <div class="no-results" *ngIf="displayedLaptops.length === 0">
          <p>No laptops found matching your criteria. Please try different filters.</p>
        </div>
      </div>
    </section>

    <!-- Why Buy From Us -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <h2>Why Buy Refurbished From Us?</h2>
        </div>
        <div class="benefits-grid">
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <h4>Certified Quality</h4>
            <p>Every laptop is thoroughly tested and certified</p>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <h4>Warranty Coverage</h4>
            <p>6 months to 1 year warranty on all products</p>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <h4>Affordable Prices</h4>
            <p>Save up to 40% compared to new laptops</p>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">✓</span>
            <h4>Expert Support</h4>
            <p>Dedicated after-sales support and assistance</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-light">
      <div class="container">
        <div class="cta-box">
          <h2>Looking for Something Specific?</h2>
          <p>Contact us for bulk orders or custom requirements</p>
          <a href="/contact" class="btn btn-primary">Contact Our Sales Team</a>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
  styleUrls: ['./refurbished-laptops.component.scss']
})
export class RefurbishedLaptopsComponent implements OnInit {
  allLaptops: Laptop[] = [];
  displayedLaptops: Laptop[] = [];
  selectedCondition = '';
  selectedPriceRange = '';
  itemsPerPage = 9;
  currentPage = 1;
  hasMoreProducts = false;

  constructor(
    private dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.setMetaTags();
    this.dataService.getLaptops().subscribe(laptops => {
      this.allLaptops = laptops;
      this.filterProducts();
    });
  }

  filterProducts() {
    this.currentPage = 1;
    let filtered = this.allLaptops;

    if (this.selectedCondition) {
      filtered = filtered.filter(l => l.condition === this.selectedCondition);
    }

    if (this.selectedPriceRange) {
      if (this.selectedPriceRange === 'below20') {
        filtered = filtered.filter(l => l.price < 20000);
      } else if (this.selectedPriceRange === '20to30') {
        filtered = filtered.filter(l => l.price >= 20000 && l.price <= 30000);
      } else if (this.selectedPriceRange === 'above30') {
        filtered = filtered.filter(l => l.price > 30000);
      }
    }

    this.displayedLaptops = filtered.slice(0, this.itemsPerPage * this.currentPage);
    this.hasMoreProducts = filtered.length > this.displayedLaptops.length;
  }

  loadMoreProducts() {
    this.currentPage++;
    let filtered = this.allLaptops;

    if (this.selectedCondition) {
      filtered = filtered.filter(l => l.condition === this.selectedCondition);
    }

    if (this.selectedPriceRange) {
      if (this.selectedPriceRange === 'below20') {
        filtered = filtered.filter(l => l.price < 20000);
      } else if (this.selectedPriceRange === '20to30') {
        filtered = filtered.filter(l => l.price >= 20000 && l.price <= 30000);
      } else if (this.selectedPriceRange === 'above30') {
        filtered = filtered.filter(l => l.price > 30000);
      }
    }

    this.displayedLaptops = filtered.slice(0, this.itemsPerPage * this.currentPage);
    this.hasMoreProducts = filtered.length > this.displayedLaptops.length;
  }

  viewDetails(laptop: Laptop) {
    console.log('Viewing details for:', laptop);
  }

  private setMetaTags() {
    this.titleService.setTitle('Refurbished Laptops | Nigam Enterprises');
    this.metaService.updateTag({
      name: 'description',
      content: 'Buy certified refurbished laptops at affordable prices. Quality assured with warranty. Dell, HP, Lenovo, ASUS and more.'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Refurbished Laptops | Nigam Enterprises'
    });
  }
}
