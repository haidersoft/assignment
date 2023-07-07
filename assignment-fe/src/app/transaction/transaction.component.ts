

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator} from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { TransactionReq } from './transaction.req'
import { TransactionRes } from './transaction.res'


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
    
  myForm: FormGroup;
  data:TransactionRes;
  constructor(private formbuilder: FormBuilder,private http: HttpClient,
   private router: Router){
  }


  onSubmit(){
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };

   const apiUrl = `${environment.apiUrl}/Transaction/Create`;
   const body: TransactionReq = this.myForm.value;
   this.http.post<TransactionRes>(apiUrl,body,httpOptions).subscribe(
     (response) => {
        this.data = response;
        console.log(this.data);
     },
     (error) => {
       // Handle the error
       alert("Invalid Username or Password");
     }
   );
 }

 ngOnInit(): void {
   this.myForm = this.formbuilder.group({
    ProcessingCode:"",
    SystemTraceNr:"",
    FunctionCode:"",
    CardNo:"",
    CardHolder: "",
    AmountTrxn:"",
    CurrencyCode:""
   });
 }
}
