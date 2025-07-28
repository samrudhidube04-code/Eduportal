import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './Components/navigation-bar/navigation-bar.component';
// import { CarouselComponent } from './Components/navigation-bar/carousel/carousel.component';
//  import { FooterComponent } from './Components/footer/footer.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ServicesComponent } from './Components/services/services.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NavigationComponent } from './Components/SharedComponent/navigation/navigation.component';
import { SidebarComponent } from './Components/SharedComponent/sidebar/sidebar.component';
import { FooterComponent } from './Components/SharedComponent/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Components/register/register.component';
import { ForgetpassComponent } from './Components/forgetpass/forgetpass.component';
// import { SharedComponentComponent } from './Components/shared-component/shared-component.component';
import { HttpClientModule } from '@angular/common/http';
import { ExploreCoursesComponent } from './Components/explore-courses/explore-courses.component';
import { MyCoursesComponent } from './Components/my-courses/my-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    // CarouselComponent,
    //  FooterComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    LoginComponent,
    ContactComponent,
    NavigationComponent,
    SidebarComponent,
    FooterComponent,
    RegisterComponent,
    ForgetpassComponent,
    ExploreCoursesComponent,
    MyCoursesComponent,

    // SharedComponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
