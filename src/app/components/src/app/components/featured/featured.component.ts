import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-featured',
  standalone: true,
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  imports: [CommonModule]
})
export class FeaturedComponent {
  features = [
    {
      title: 'Trailblazer in Analytics',
      description: 'Recognized in the CSUEB MSBA Student Portal for contributions in Data Analytics and Business Intelligence, bridging academic knowledge with real-world applications.',
      link: 'https://www.csueastbay.edu/msba/testimonials/vinmathi-iyappan.html',
      image: 'assets/Trailblazer.png',
      cta: 'Read More'
    },
    {
      title: 'Women in Leadership',
      description: 'Selected as a distinguished associate from a pool of 100+ applicants, with the privilege of acquiring leadership skills, benefiting from dedicated mentorship, and actively engaging in diverse networking events.',
      link: 'https://www.csueastbay.edu/women-in-leadership/programs/index.html',
      image: 'assets/Wil.png',
      cta: 'Read more'
    },
    {
      title: 'Conference Speaker',
      description: 'Presented my research works at CSUPOM industry-leading conference, sharing insights with data professionals and researchers.',
      link: '#',
      image: 'assets/conference.jpg',
      
    }
  ];
}
