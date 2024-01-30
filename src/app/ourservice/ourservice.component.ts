import { Component } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-ourservice',
  templateUrl: './ourservice.component.html',
  styleUrls: ['./ourservice.component.css']
})
export class OurserviceComponent {

  ngOnInit(): void {
    this.initializeOwlCarousel();
  }

  private initializeOwlCarousel(): void {
    const testimonialSlider = $('#testimonial-slider');

    testimonialSlider.owlCarousel({
      items: 3,
      responsive: {
        1000: { items: 3 },
        980: { items: 2 },
        768: { items: 2 },
        650: { items: 1 },
        0: { items: 1 }, // Added for mobile devices
      },
      dots: true,
      pagination: true,
      navigation: false,
      slideSpeed: 100,
      autoPlay: true,
    });
    
  }

}
