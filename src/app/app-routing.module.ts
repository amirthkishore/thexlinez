import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FooterComponent } from './footer/footer.component';
import { OurserviceComponent } from './ourservice/ourservice.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'service',
    component: OurserviceComponent
  },
  {
    path: 'contact',
    component: ContactusComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: '',
    redirectTo : 'home',
    pathMatch : 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
