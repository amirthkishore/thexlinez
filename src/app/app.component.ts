import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thexlinez';
  spinneractivityflag: number = 0;
  isLoaded: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoaded == true;
      this.spinneractivityflag = 1;
      console.log("1")
    }, 4600);
    this.openOtherRootAppFile();
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  openOtherRootAppFile() {
    // Set a timer for 1000 milliseconds (1 second)
    setTimeout(() => {
      this.isLoaded = true;
      this.spinneractivityflag == 0;
      console.log("2")
    }, 100);
  }
}
