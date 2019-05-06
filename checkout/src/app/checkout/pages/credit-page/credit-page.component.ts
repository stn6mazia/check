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

  cancel() {
    this.router.navigateByUrl('/')
  }

  finish(evt: Checkout) {
    console.log(evt)
    this.router.navigateByUrl(`/checkout/${sessionStorage.getItem('userUrl')}/credit/success`)
    this.hasFinish = 1
    sessionStorage.setItem('userName', this.checkout.userName)
    sessionStorage.setItem('method', this.checkout.paymentMethod)
    sessionStorage.setItem('price', this.checkout.totalPrice)
    this.checkService.insert(evt)
  }
}
