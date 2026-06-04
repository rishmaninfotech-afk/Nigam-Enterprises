import { Component, OnInit, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare var AOS: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'nigam-enterprises';

  ngOnInit() {
    // Initialize AOS animations
    if (typeof window !== 'undefined') {
      // AOS is initialized in index.html script tag
    }
  }

  ngAfterViewInit() {
    // Additional initialization if needed
  }
}