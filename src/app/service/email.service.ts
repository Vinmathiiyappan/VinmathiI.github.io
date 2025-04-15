import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = 'service_u0tqv0o'; // Your EmailJS Service ID
  private templateId = 'template_tkp6o8k'; // Your EmailJS Template ID
  private userId = 'aRiDGLxihHk_D8KZP'; // Your EmailJS Public Key

  constructor() { }

  sendEmail(formData: any): Observable<any> {
    return from(
      emailjs.send(this.serviceId, this.templateId, formData, this.userId)
    );
  }
}