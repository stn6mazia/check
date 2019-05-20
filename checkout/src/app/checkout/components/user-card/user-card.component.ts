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

  userInfo = {
    name: 'Nicolas Mazia',
    cpf: '365.304.388-31',
    street: 'Rua dos Bobos',
    number: '0',
    zipCode: '04605-003',
    comunity: 'Pinheiros',
    city: 'São Paulo',
    state: 'SP',
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
      comunity: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    })

    this.order = Math.floor((Math.random() * 9999999) + 1)
  }

  verifyZipCode(evt) {
    this.http.get('https://viacep.com.br/ws/' + evt + '/json').subscribe(
      data => {console.log('success'), this.newInfo = data, this.showMore = true},
      error => {console.log('oops', error ), this.showMore = false}
      
    )
  }

}
