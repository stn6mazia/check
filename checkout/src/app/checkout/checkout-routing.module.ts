import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
import { CheckoutPageComponent, CreditPageComponent, CreditSuccessPageComponent, TicketPageComponent, TicketSuccessPageComponent } from './pages';

const routes: Routes = [
  {
    path: 'checkout/:id',
    component: CheckoutPageComponent,
    children: [
      {
        path: 'credit',
        component: CreditPageComponent,
        children: [
          {
            path: 'success',
            component: CreditSuccessPageComponent
          }
        ]
      },
      {
        path: 'ticket',
        component: TicketSuccessPageComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'checkout/:id',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CheckoutRoutingModule { }
