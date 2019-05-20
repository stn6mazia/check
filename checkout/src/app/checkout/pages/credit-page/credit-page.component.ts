import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Checkout } from '../../shared/entities/checkout';
import { CheckoutService } from '../../services/checkout.service';
import { masterCard, visaCard } from '../../shared/utils/utils-consts';

@Component({
  selector: 'app-credit-page',
  templateUrl: './credit-page.component.html',
  styleUrls: ['./credit-page.component.scss']
})
export class CreditPageComponent implements OnInit {
  totalPrice
  one = 1
  two = 2
  three = 3
  four = 4
  five = 5
  six = 6
  seven = 7
  eight = 8
  nine = 9
  ten = 10
  eleve = 11
  tweven = 12

  showCostumerInfo = true;
  cardBrand = ''

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
    this.totalPrice = parseInt(localStorage.getItem('totalPrice'))

    this.checkout = new Checkout()

    this.creditForm = this.fb.group({
      carNumber: ['', [Validators.required]],
      cardName: ['', [Validators.required]],
      cardDate: ['', [Validators.required]],
      cardCvv: ['', [Validators.required]],
      formPlotsInput: ['1', [Validators.required]]
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
  
  get formPlotsInput() {
    return this.creditForm.get('formPlotsInput').value
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

  toUpperCase(evt) {
    this.checkout.cardName = evt.toUpperCase()
  }

  checkBrand(evt) {
    if(evt.includes(masterCard.initCardNumber)) {
      this.cardBrand = 'master'
    } else if(evt.includes(visaCard.initCardNumber)) {
      this.cardBrand = 'visa'
    } else {
      this.cardBrand = ''
    }
  }

  getPlots(evt) {
    localStorage.setItem('plots', evt)
  }

  setNextFocus(evt) {
    console.log(evt)
  }

  goToFinish() {
    this.cardStep = 4
  }
}
