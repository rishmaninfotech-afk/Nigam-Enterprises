import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ContactFormData } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private submittedFormsSubject = new BehaviorSubject<ContactFormData[]>([]);

  constructor() {}

  submitContactForm(formData: ContactFormData): Observable<{ success: boolean; message: string }> {
    // Simulate API call with delay
    return of({
      success: true,
      message: 'Thank you! Your message has been received. We will contact you within 24 hours.'
    }).pipe(delay(1000));
  }

  // Optional: Store form submission locally
  saveFormSubmission(formData: ContactFormData): void {
    const currentForms = this.submittedFormsSubject.value;
    this.submittedFormsSubject.next([...currentForms, formData]);
    // Store in localStorage for persistence
    localStorage.setItem('contact_submissions', JSON.stringify([...currentForms, formData]));
  }

  getSubmittedForms(): Observable<ContactFormData[]> {
    return this.submittedFormsSubject.asObservable();
  }
}