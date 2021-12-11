import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm:FormGroup
  constructor(private fb:FormBuilder,private toastr: ToastrService) { 
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

  save() {
  let data=this.myForm.value;
  let user=new User(data.firstname,data.lastname,data.phone,data.email);
  console.log(user)
    this.toastr.success('WELCOME!');
  }

}
