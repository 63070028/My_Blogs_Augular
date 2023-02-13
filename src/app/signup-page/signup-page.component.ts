import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  signUpForm:FormGroup;

  constructor(private fb: FormBuilder, private http:HttpClient){
    this.signUpForm = fb.group({
      firstName: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]*")]),
      lastName: new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]*")]),
      email: new FormControl(null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password : new FormControl(null, [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(8),
      ]),
      confirmPassword: new FormControl(null, [Validators.required,])
    }, {
      validators: this.ConfirmedValidator('password', 'confirmPassword'),
    });  
  }


  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.get('confirmPassword')?.errors?.['confirmedValidator']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
    

  }

  onSubmit(){
    const data:{firstName:string,lastName:string, email:string, password:string} = {
      firstName:this.signUpForm.value.firstName,
      lastName:this.signUpForm.value.lastName,
      email:this.signUpForm.value.email,
      password:this.signUpForm.value.password
    }

    console.log(data)

    this.http.post('http://localhost:3000/signup', data, {
      headers: { "Access-Control-Allow-Origin": "*" }
  }).subscribe(
      (res) => {
        console.log(res); 
      }
    );
  }



}
