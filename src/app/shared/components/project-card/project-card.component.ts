import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="project-card">
      <div class="project-image">
        <img [src]="project.image" [alt]="project.title" loading="lazy">
        <div class="project-badge">{{ project.category }}</div>
      </div>
      <div class="project-content">
        <h3>{{ project.title }}</h3>
        <p class="project-client">by {{ project.client }}</p>
        <p class="project-description">{{ project.description }}</p>
        <div class="project-tech">
          <span *ngFor="let tech of project.technologies" class="tech-tag">{{ tech }}</span>
        </div>
        <div class="project-footer">
          <span class="project-date">{{ project.completionDate | date: 'MMM yyyy' }}</span>
          <a href="#" class="view-project">View →</a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
