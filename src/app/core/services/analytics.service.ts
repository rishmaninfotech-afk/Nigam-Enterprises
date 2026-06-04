import { Injectable } from '@angular/core';

export interface AnalyticsEvent {
  eventName: string;
  eventCategory: string;
  eventLabel?: string;
  eventValue?: number;
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private events: AnalyticsEvent[] = [];

  constructor() {
    this.loadEvents();
  }

  trackEvent(eventName: string, eventCategory: string, eventLabel?: string, eventValue?: number): void {
    const event: AnalyticsEvent = {
      eventName,
      eventCategory,
      eventLabel,
      eventValue,
      timestamp: new Date()
    };

    this.events.push(event);
    this.saveEvents();

    // Log to console in development
    console.log('Analytics Event:', event);

    // In production, send to analytics service (Google Analytics, etc.)
    // this.sendToAnalytics(event);
  }

  trackPageView(pageName: string, pageCategory: string): void {
    this.trackEvent('page_view', pageCategory, pageName);
  }

  trackButtonClick(buttonName: string, buttonCategory: string): void {
    this.trackEvent('button_click', buttonCategory, buttonName);
  }

  trackFormSubmit(formName: string): void {
    this.trackEvent('form_submit', 'engagement', formName);
  }

  trackServiceClick(serviceName: string): void {
    this.trackEvent('service_click', 'services', serviceName);
  }

  trackProjectView(projectName: string): void {
    this.trackEvent('project_view', 'projects', projectName);
  }

  getEvents(): AnalyticsEvent[] {
    return this.events;
  }

  private saveEvents(): void {
    localStorage.setItem('analytics_events', JSON.stringify(this.events));
  }

  private loadEvents(): void {
    const saved = localStorage.getItem('analytics_events');
    if (saved) {
      this.events = JSON.parse(saved);
    }
  }
}
