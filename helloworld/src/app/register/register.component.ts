import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm:FormGroup
  constructor(private fb:FormBuilder) { 
    let formControls={
      firstname:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      
      ]),
      lastname:new FormControl('',[
        Validators.required,
        Validators.pattern("[a-zA-Z]+")
      ]),
      phone:new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8)
      ]),
      email:new FormControl('',[
        Validators.required,
        Validators.email
      ])
    }
    this.myForm=this.fb.group(formControls)
  }
  get firstname() {
    return this.myForm.get('firstname')
  }
  get lastname() {
    return this.myForm.get('lastname')
  }
  get phone() {
    return this.myForm.get('phone')
  }
  get email() {
    return this.myForm.get('email')
  }
  
  ngOnInit(): void {
  }

}
