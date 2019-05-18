import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Checkout } from '../../shared/entities/checkout';
import { CheckoutService } from '../../services/checkout.service';

@Component({
  selector: 'app-credit-page',
  templateUrl: './credit-page.component.html',
  styleUrls: ['./credit-page.component.scss']
})
export class CreditPageComponent implements OnInit {

  cardStep = 0

  hasFinish = 0

  checkout: Checkout

  creditForm: FormGroup

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private checkService: CheckoutService
  ) { }

  ngOnInit() {
    this.checkout = new Checkout()

    this.creditForm = this.fb.group({
      carNumber: ['', [Validators.required]],
      cardName: ['', [Validators.required]],
      cardDate: ['', [Validators.required]],
      cardCvv: ['', [Validators.required]]
    })

    this.creditForm.valueChanges.subscribe();
  }

  get cardNumber() {
    return this.creditForm.get('carNumber').value
  }
  get cardName() {
    return this.creditForm.get('cardName').value
  }
  get cardDate() {
    return this.creditForm.get('cardDate').value
  }
  get cardCvv() {
    return this.creditForm.get('cardCvv').value
  }

  cancel() {
    this.router.navigateByUrl(`/`)
  }

  finish(evt: Checkout) {
    console.log(evt)
    this.router.navigateByUrl(`/checkout/${localStorage.getItem('userUrl')}/credit/success`)
    this.hasFinish = 1
    localStorage.setItem('userName', this.checkout.userName)
    localStorage.setItem('method', this.checkout.paymentMethod)
    localStorage.setItem('price', this.checkout.totalPrice)
    this.checkService.insert(evt)
  }

  cardNumberNextStep(evt) {
    if(evt.length == 16) {
      this.cardStep = 1
    }
  }
  
  dateNextPage(evt) {
    if(evt.length == 4) {
      this.cardStep = 3
    }
  }
}
