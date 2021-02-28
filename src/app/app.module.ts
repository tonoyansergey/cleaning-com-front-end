import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FaqComponent } from './components/faq/faq.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { CleaningMethodsComponent } from './components/cleaning-methods/cleaning-methods.component';
import { OrderCleaningComponent } from './components/order-cleaning/order-cleaning.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { OrderDialogComponent } from './dialog/order-dialog/order-dialog.component';
import { CleaningDetailsComponent } from './components/cleaning-details/cleaning-details.component';
import { BasicCleaningComponent } from './components/basic-cleaning/basic-cleaning.component';
import { MaintainCleaningComponent } from './components/maintain-cleaning/maintain-cleaning.component';
import { GeneralCleaningComponent } from './components/general-cleaning/general-cleaning.component';
import { OfficeCleaningComponent } from './components/office-cleaning/office-cleaning.component';
import { InfoDialogComponent } from './dialog/info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    FaqComponent,
    ContactUsComponent,
    ServicesComponent,
    AboutUsComponent,
    PricingComponent,
    SocialMediaComponent,
    CleaningMethodsComponent,
    OrderCleaningComponent,
    CalculatorComponent,
    BenefitsComponent,
    OrderDialogComponent,
    CleaningDetailsComponent,
    BasicCleaningComponent,
    MaintainCleaningComponent,
    GeneralCleaningComponent,
    OfficeCleaningComponent,
    InfoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [OrderDialogComponent, InfoDialogComponent]
})
export class AppModule { }
