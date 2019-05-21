import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ZipCodeService } from '../../services/zip-code-.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  adressForm: FormGroup

  showMore = false

  openForm = false
  order

  newInfo
  newZip
  userInfo: any = {
    name: 'Nicolas Mazia',
    cpf: '365.304.388-31',
    sendDress: [
      {
        street: 'Rua dos Bobos',
        number: '0',
        complement: '123',
        zipCode: '04605-003',
        comunity: 'Pinheiros',
        city: 'São Paulo',
        state: 'SP'
      }
    ],
    paymentDress: [
      {
        street: 'Rua dos Bobos',
        number: '0',
        complement: '123',
        zipCode: '04605-003',
        comunity: 'Pinheiros',
        city: 'São Paulo',
        state: 'SP'
      }
    ]
  }


  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.adressForm = this.fb.group({
      zipCode: ['', Validators.required],
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: ['', Validators.required],
      comunity: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })

    this.order = Math.floor((Math.random() * 9999999) + 1)
  }

  verifyZipCode(evt) {
    this.newZip = evt
    this.http.get('https://viacep.com.br/ws/' + evt + '/json').subscribe(
      data => { this.newInfo = data, this.showMore = true },
      error => { this.showMore = false }
    )
  }

  upDateUser(evt, number, complement) {
    this.userInfo.paymentDress[0] = {
      zipCode: this.newZip,
      street: evt.logradouro,
      number: number,
      complement: complement,
      comunity: evt.bairro,
      city: evt.localidade,
      state: evt.uf
    }
    this.openForm = false;
  }

}
