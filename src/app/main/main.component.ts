import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return false;
  }

  Mainbtn() {
    this.router.navigate(['/home']);
  }



}
