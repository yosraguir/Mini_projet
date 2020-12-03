import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
 public RegisterForm: FormGroup;

  constructor(public FormBuilder: FormBuilder) { //formbuiller intermédaire entre le formgroup et le forme control name
    this.RegisterForm = FormBuilder.group({
      fullname : [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
         
          
        ])
      ],

      email : [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9]+.[a-zA-z0-z0-9]+$")
          
        ])
      ],


      age : [
        "",
        Validators.compose([
          Validators.required,
          Validators.maxLength(2)
        ])
      ],

      password: [
        "",
        Validators.compose([
          Validators.required, 
          Validators.minLength(8)
        ])
      ]


    });
  }

  ngOnInit() {
  }

}
