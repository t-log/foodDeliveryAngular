import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  emailId=""
  pwd=""
  
  signIn = () =>
  {
    let signInData = {"email":this.emailId,"pwd":this.pwd}
    console.log(signInData)
  }
}
