import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  name=""
  phno=""
  email=""
  pass=""
  confirmPass=""

  signUp = () =>
  {
    let signUpData:any = {"name":this.name,"phno":this.phno,"email":this.email,
                          "pass":this.pass,"confirmPass":this.confirmPass}
    console.log(signUpData)
  }
}
