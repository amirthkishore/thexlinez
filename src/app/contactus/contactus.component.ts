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
    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Contact Information:', this.contactForm.value);
      this.sentMailEvent();
      alert('Message Sent successfully');
    } else {
      alert('Enter valid input');
    }
  }

  sentMailEvent() {
    const mailtoLink = `mailto:support@thexlinez.com?subject=New Message from ${this.contactForm.value.name}&body=${(
      this.contactForm.value.message + '\n\nFrom: ' + this.contactForm.value.email
    )}`;

    console.log(mailtoLink);

    const emailWindow = window.open(mailtoLink, '_blank');

    if (!emailWindow || emailWindow.closed || typeof emailWindow.closed === 'undefined') {
      alert('Please make sure your browser allows pop-ups for sending emails.');
    }
  }
}


/* emailjs.send("service_8b4t8g5","template_tp2zkko",{
  from_name: "adfhdsh",
  from_email: "dfhdhfdh",
  message: "dghghgfh",
  }); */
