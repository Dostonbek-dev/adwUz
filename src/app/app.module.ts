import {NgModule, SecurityContext} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from "@angular/router";
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { BannerComponent } from './banner/banner.component';
import { AdwapComponent } from './adwap/adwap.component';


import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { PaymentComponent } from './payment/payment.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FodalanishShartlariComponent } from './fodalanish-shartlari/fodalanish-shartlari.component';
import { FizyurComponent } from './model/fizyur/fizyur.component';
import { YurComponent } from './yur/yur.component';
import { JisComponent } from './jis/jis.component';
import {HttpClientModule} from "@angular/common/http";
import { AdminpageComponent } from './info-section/adminpage/adminpage.component';
import { AdminAdwComponent } from './admin-adw/admin-adw.component';
import { RegisterUserComponent } from './register-user/register-user.component';
const routes: Routes = [
  {
    path: '',
    component: AdwapComponent
  },
  {
    path: 'adwap',
    component: AdwapComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  },
  {
    path: 'conditions',
    component: FodalanishShartlariComponent
  },
  {
    path: 'sent-data',
    component: FormInputComponent
  },
  {
    path: 'yur',
    component: YurComponent
  },
  {
    path: 'jis',
    component: JisComponent
  },
  {
    path: 'fizyur',
    component: FizyurComponent
  },
  {
    path: 'admin-adw',
    component: AdminAdwComponent
  },
  {
    path: 'admin',
    component: AdminpageComponent
  },
  {
    path: 'register-user',
    component: RegisterUserComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },


];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    FooterComponent,
    LandingPageComponent,
    AboutPageComponent,
    InfoSectionComponent,
    BannerComponent,
    AdwapComponent,
    FormInputComponent,
    PaymentComponent,
    FodalanishShartlariComponent,
    FizyurComponent,
    YurComponent,
    JisComponent,
    AdminpageComponent,
    AdminAdwComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
