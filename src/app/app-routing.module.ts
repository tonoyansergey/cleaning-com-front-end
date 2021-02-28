import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {FeaturesComponent} from './components/features/features.component';
import {FaqComponent} from './components/faq/faq.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import {AboutUsComponent} from './components/about-us/about-us.component';
import {ServicesComponent} from './components/services/services.component';
import {PricingComponent} from './components/pricing/pricing.component';
import {BenefitsComponent} from './components/benefits/benefits.component';
import {CleaningDetailsComponent} from './components/cleaning-details/cleaning-details.component';
import {BasicCleaningComponent} from './components/basic-cleaning/basic-cleaning.component';
import {MaintainCleaningComponent} from './components/maintain-cleaning/maintain-cleaning.component';
import {GeneralCleaningComponent} from './components/general-cleaning/general-cleaning.component';
import {OfficeCleaningComponent} from './components/office-cleaning/office-cleaning.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'benefits', component: BenefitsComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'pricing', component: PricingComponent},
  { path: 'cleaning-details', component: CleaningDetailsComponent},
  { path: 'basic-cleaning', component: BasicCleaningComponent},
  { path: 'maintain-cleaning', component: MaintainCleaningComponent},
  { path: 'general-cleaning', component: GeneralCleaningComponent},
  { path: 'office-cleaning', component: OfficeCleaningComponent},
  { path: '**', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
