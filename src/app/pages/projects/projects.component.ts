import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';
import { DataService } from '../../core/services/data.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent, HeroComponent, ProjectCardComponent],
  template: `
    <app-navbar></app-navbar>

    <app-hero
      title="Our Projects"
      subtitle="Successful implementations and satisfied clients"
      backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200"
      primaryButtonText="Get Quote"
      primaryButtonLink="/contact"
      secondaryButtonText="Our Services"
      secondaryButtonLink="/services"
    ></app-hero>

    <!-- Projects Section -->
    <section class="section section-light" data-aos="fade-up">
      <div class="container">
        <div class="projects-header">
          <h2 data-aos="fade-down">Portfolio Showcase</h2>
          <p data-aos="fade-down" data-aos-delay="100">{{ totalProjects }} successful projects completed</p>
        </div>

        <!-- Category Filter -->
        <div class="filter-section" data-aos="fade-up" data-aos-delay="200">
          <button
            *ngFor="let category of categories"
            [class.active]="selectedCategory === category"
            (click)="selectCategory(category)"
            class="filter-btn"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="projects-grid" data-aos="fade-up" data-aos-delay="300">
          <div 
            *ngFor="let project of displayedProjects; let i = index" 
            class="project-item"
            (click)="openLightbox(project, i)"
            [attr.data-aos]="'fade-up'"
            [attr.data-aos-delay]="i * 50"
          >
            <app-project-card [project]="project"></app-project-card>
          </div>
        </div>

        <!-- Load More Button -->
        <div class="load-more-section" *ngIf="hasMoreProjects" data-aos="fade-up" data-aos-delay="400">
          <button (click)="loadMoreProjects()" class="btn btn-primary">
            Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div 
      class="lightbox" 
      *ngIf="lightboxOpen"
      (click)="closeLightbox()"
    >
      <div class="lightbox-content" (click)="$event.stopPropagation()">
        <button class="lightbox-close" (click)="closeLightbox()">&times;</button>
        <button class="lightbox-nav prev" (click)="prevProject($event)" *ngIf="displayedProjects.length > 1">&#10094;</button>
        <button class="lightbox-nav next" (click)="nextProject($event)" *ngIf="displayedProjects.length > 1">&#10095;</button>
        
        <div class="lightbox-main-content">
          <img [src]="currentProject?.image" [alt]="currentProject?.title" class="lightbox-image">
          <div class="lightbox-details">
            <h3>{{ currentProject?.title }}</h3>
            <p class="project-client"><strong>Client:</strong> {{ currentProject?.client }}</p>
            <p class="project-category"><strong>Category:</strong> {{ currentProject?.category }}</p>
            <p class="project-date"><strong>Completed:</strong> {{ currentProject?.completionDate }}</p>
            <p class="project-description">{{ currentProject?.description }}</p>
            
<div class="project-tech" *ngIf="currentProject?.technologies?.length">
  <strong>Technologies:</strong>
  <span class="tech-tag" *ngFor="let tech of currentProject!.technologies">
    {{ tech }}
  </span>
</div>
            
            <div class="project-results" *ngIf="currentProject?.results">
              <strong>Results:</strong>
              <p>{{ currentProject!.results }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Statistics -->
    <section class="section section-dark stats-section" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="stats-grid" data-aos="fade-up" data-aos-delay="200">
          <div class="stat-item" data-aos="flip-left" data-aos-delay="100">
            <div class="stat-number">{{ totalProjects }}+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat-item" data-aos="flip-left" data-aos-delay="200">
            <div class="stat-number">500+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          <div class="stat-item" data-aos="flip-left" data-aos-delay="300">
            <div class="stat-number">8+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          <div class="stat-item" data-aos="flip-left" data-aos-delay="400">
            <div class="stat-number">35+</div>
            <div class="stat-label">Team Members</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-light" data-aos="fade-up" data-aos-delay="100">
      <div class="container">
        <div class="cta-box" data-aos="zoom-in">
          <h2>Interested in Working With Us?</h2>
          <p>Let's discuss your project and create something amazing together</p>
          <a href="/contact" class="btn btn-primary">Start Your Project</a>
        </div>
      </div>
    </section>

    <app-footer></app-footer>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  allProjects: Project[] = [];
  displayedProjects: Project[] = [];
  categories: string[] = ['All'];
  selectedCategory = 'All';
  totalProjects = 0;
  itemsPerPage = 6;
  currentPage = 1;
  hasMoreProjects = false;
  
  // Lightbox properties
  lightboxOpen = false;
  currentProject: Project | null = null;
  currentIndex = 0;

  constructor(
    private dataService: DataService,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    this.setMetaTags();
    this.dataService.getProjects().subscribe(projects => {
      this.allProjects = projects;
      this.totalProjects = projects.length;
      this.extractCategories();
      this.filterProjects();
    });
  }

  private extractCategories() {
    const uniqueCategories = new Set(this.allProjects.map(p => p.category));
    this.categories = ['All', ...Array.from(uniqueCategories)];
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.filterProjects();
  }

  private filterProjects() {
    let filtered = this.allProjects;
    if (this.selectedCategory !== 'All') {
      filtered = this.allProjects.filter(p => p.category === this.selectedCategory);
    }
    this.displayedProjects = filtered.slice(0, this.itemsPerPage * this.currentPage);
    this.hasMoreProjects = filtered.length > this.displayedProjects.length;
  }

  loadMoreProjects() {
    this.currentPage++;
    let filtered = this.allProjects;
    if (this.selectedCategory !== 'All') {
      filtered = this.allProjects.filter(p => p.category === this.selectedCategory);
    }
    this.displayedProjects = filtered.slice(0, this.itemsPerPage * this.currentPage);
    this.hasMoreProjects = filtered.length > this.displayedProjects.length;
  }

  openLightbox(project: Project, index: number) {
    this.currentProject = project;
    this.currentIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  }

  closeLightbox() {
    this.lightboxOpen = false;
    this.currentProject = null;
    document.body.style.overflow = ''; // Re-enable scrolling
  }

  prevProject(event: Event) {
    event.stopPropagation();
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.displayedProjects.length - 1;
    }
    this.currentProject = this.displayedProjects[this.currentIndex];
  }

  nextProject(event: Event) {
    event.stopPropagation();
    if (this.currentIndex < this.displayedProjects.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.currentProject = this.displayedProjects[this.currentIndex];
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    
    if (event.key === 'Escape') {
      this.closeLightbox();
    } else if (event.key === 'ArrowLeft') {
      this.prevProject(event);
    } else if (event.key === 'ArrowRight') {
      this.nextProject(event);
    }
  }

  private setMetaTags() {
    this.titleService.setTitle('Projects | Nigam Enterprises');
    this.metaService.updateTag({
      name: 'description',
      content: 'View our completed projects - CCTV systems, networking solutions, and IT implementations'
    });
    this.metaService.updateTag({
      property: 'og:title',
      content: 'Our Projects | Nigam Enterprises'
    });
  }
}