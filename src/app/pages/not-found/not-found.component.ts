import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="not-found-container min-h-screen flex items-center justify-center bg-gray-50">
      <div class="text-center">
        <h1 class="text-9xl font-bold text-gray-800">404</h1>
        <h2 class="text-4xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p class="text-xl text-gray-600 mb-8">Sorry, the page you're looking for doesn't exist.</p>
        <a 
          routerLink="/" 
          class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
        >
          Go Back Home
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class NotFoundComponent {}