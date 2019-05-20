import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { CheckoutPageComponent, CreditPageComponent, CreditSuccessPageComponent, TicketPageComponent, TicketSuccessPageComponent } from './pages';
import { CheckoutComponent } from './checkout.component';
import {NgxMaskModule} from 'ngx-mask'
import { CheckoutInfoComponent, UserCardComponent, StoreCardComponent, CardComponent } from './components';
import { ReactiveFormsModule } from '@angular/forms';

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
    UserCardComponent,
    StoreCardComponent,
    CardComponent,
    /* shared */
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  exports: [
    CheckoutComponent
  ]
})
export class CheckoutModule { }
