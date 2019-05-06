import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Checkout } from '../shared/entities/checkout';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  insert(check: Checkout) {
    this.db.list('checkouts').push(check)
      .then((result: any) => {
        console.log(result.key);
        localStorage.setItem('orderNumber', result.key)
      });
  }
}
