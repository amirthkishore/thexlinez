import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  isSticky = false;
  isScrolled = false;
  
  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
