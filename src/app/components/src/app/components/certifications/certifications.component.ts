import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css'],
  imports: [CommonModule]  
})
export class CertificationsComponent {
  certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/794bf52349ad433295da47d8297b6339',
      issuedDate: 'March 2025'
    },
    {
      title: 'Google Analytics Certification',
      link: 'https://skillshop.credential.net/9bb15a2a-54eb-417b-91d0-aab1ea78b9eb#acc.9jLnoXM0',
      issuedDate: 'April 2025'
    }
  ];

  getCertificationLogo(title: string): string {
    if (title.includes('AWS')) {
      return 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg';
    }
    if (title.includes('Google Analytics')) {
      return 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/googlecloud/googlecloud-original.svg';
    }
    return 'assets/default-cert.svg'; // Fallback logo
  }
}
