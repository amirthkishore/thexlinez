import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isSticky = false;
  isScrolled = false;

  constructor(
    private router: Router
  ) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= this.getOffset();
    this.isScrolled = window.pageYOffset > 15;
  }

  private getOffset() {
    const navbarElement = document.querySelector('.navbar');
    return navbarElement ? navbarElement.getBoundingClientRect().top : 0;
  }

  goToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
