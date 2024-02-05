import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent {

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
}
