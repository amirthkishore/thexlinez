import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor(
    private router: Router
  ) { }

  Mainbtn() {
    this.router.navigate(['/home']);
  }

  aboutusbtn() {
    this.router.navigate(['/aboutus']);
  }

  ourservice() {
    this.router.navigate(['/service']);
  }

  contactus() {
    this.router.navigate(['/contact']);
  }
}
