import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  isSticky = false;
  isScrolled = false;

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    //console.log('Contact Information:', this.contactForm.value);
    if (this.contactForm.valid) {
      // Access form values using this.contactForm.value
      console.log('Contact Information:', this.contactForm.value);

      this.makeApiCall();

      //alert("Message Sent successful")
    } else {
      alert("Enter a valid input")
    }
  }

  makeApiCall() {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbx1KrSEuRAVNL0jheR3Q0qR2LdvOQPUz0T79CFyPimJwRq5_9KEi6WsXWXjiet6Ei8n/exec';

    this.http.get(apiUrl).subscribe(
      (response) => {
        console.log('API Response:', response);
        alert('Message Sent successfully');
      },
      (error) => {
        console.error('API Error:', error);
        alert('Failed to send message. Please try again later.');
      }
    );
  }

}
