import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { CheckoutPageComponent, CreditPageComponent, CreditSuccessPageComponent, TicketPageComponent, TicketSuccessPageComponent } from './pages';
import { CheckoutComponent } from './checkout.component';
import { CheckoutInfoComponent } from './components';

@NgModule({
  declarations: [
    /* main */
    CheckoutComponent,

    /* pages */
    CheckoutPageComponent,
    CreditPageComponent,
    CreditSuccessPageComponent,
    TicketPageComponent,
    TicketSuccessPageComponent,
    /* components */
    CheckoutInfoComponent,

    /* shared */
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  exports: [
    CheckoutComponent
  ]
})
export class CheckoutModule { }
