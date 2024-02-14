import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  @Output() sentMessage = new EventEmitter<string>();

  isSticky = false;
  isScrolled = false;

  l_Name :string = "";
  l_Email :string = "";
  l_Message :string = "";

  constructor(
   
  ) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  submitForm(): void {
    console.log(this.l_Message);

    // Emit the message
    this.sentMessage.emit(this.l_Message);

    // Reset the form fields if needed
    this.resetFormFields();

    // Optionally show an alert
    alert("Message sent successfully");
  }

  resetFormFields(): void {
    this.l_Name = "";
    this.l_Email = "";
    this.l_Message = "";
  }
}
