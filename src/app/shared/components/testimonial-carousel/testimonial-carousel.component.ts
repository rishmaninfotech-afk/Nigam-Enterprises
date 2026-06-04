import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../../core/services/data.service';
import { Testimonial } from '../../../core/models/testimonial.model';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-testimonial-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="testimonial-carousel">
      <div class="testimonial-content">
        <div class="testimonials-wrapper">
          <div
            *ngFor="let testimonial of testimonials; let i = index"
            class="testimonial-item"
            [class.active]="i === currentIndex"
          >
            <div class="testimonial-quote">
              <p>"{{ testimonial.quote }}"</p>
            </div>
            <div class="testimonial-author">
              <img [src]="testimonial.clientImage" [alt]="testimonial.clientName" class="author-image">
              <div class="author-info">
                <h4>{{ testimonial.clientName }}</h4>
                <p>{{ testimonial.clientCompany }}</p>
                <div class="star-rating">
                  <span *ngFor="let star of [1,2,3,4,5]" [class.filled]="star <= testimonial.rating">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Controls -->
      <div class="carousel-controls">
        <button (click)="previousTestimonial()" class="control-btn prev">
          ← Previous
        </button>
        <div class="carousel-dots">
          <button
            *ngFor="let testimonial of testimonials; let i = index"
            (click)="goToTestimonial(i)"
            [class.active]="i === currentIndex"
            class="dot"
          ></button>
        </div>
        <button (click)="nextTestimonial()" class="control-btn next">
          Next →
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./testimonial-carousel.component.scss']
})
export class TestimonialCarouselComponent implements OnInit, OnDestroy {
  testimonials: Testimonial[] = [];
  currentIndex = 0;
  private destroy$ = new Subject<void>();
  private autoScrollInterval = 5000; // 5 seconds

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getTestimonials().subscribe(testimonials => {
      this.testimonials = testimonials;
    });

    // Auto-advance carousel every 5 seconds
    interval(this.autoScrollInterval)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.nextTestimonial();
      });
  }

  nextTestimonial() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  previousTestimonial() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  goToTestimonial(index: number) {
    this.currentIndex = index;
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
