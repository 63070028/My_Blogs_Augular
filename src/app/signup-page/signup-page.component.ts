import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent {

  // firstName:string = "chanapon";
  // lastName:string = "None";
  // email:string = "";
  // password:string = "";
  // confirmPassword:string = "";

  firstName = new FormControl(null, [Validators.required, Validators.pattern("[a-zA-Z ]*")]);

}
