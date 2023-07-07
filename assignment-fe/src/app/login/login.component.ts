
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator} from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from './user.interface';
import { environment } from '../../environments/environment';
import { LoginRes } from './Login.res.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  myForm: FormGroup;
   constructor(private formbuilder: FormBuilder,private http: HttpClient,
    private router: Router){
   }


   onSubmit(){

    const apiUrl = `${environment.apiUrl}/auth/login`;
    const body: User = this.myForm.value;
    this.http.post<LoginRes>(apiUrl,body).subscribe(
      (response) => {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/transaction']);
        
      },
      (error) => {
        // Handle the error
        alert("Invalid Username or Password");
      }
    );
  }

  ngOnInit(): void {
    this.myForm = this.formbuilder.group({
      Username:"",
      Password:""
    });
  }

}
