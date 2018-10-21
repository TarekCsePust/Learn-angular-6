import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, FormBuilder, Validators } from '../../node_modules/@angular/forms';
import { forbiddenNameValidators } from './username.validator';
import { passwordValidator } from './password.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app'; 
  registrationForm:FormGroup
  ngOnInit(){

    this.registrationForm = this.fb.group({
      username: ['Tarek',[Validators.required,Validators.minLength(5),forbiddenNameValidators(/admin/)]],
      email: [''],
      subscribe:[false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        state:['Bangladesh'],
        city: ['Dhaka']
      })
  
    },{validator:passwordValidator})

    this.registrationForm.get("subscribe").valueChanges
    .subscribe(checkedValue=>{
      const email = this.registrationForm.get("email")
      if(checkedValue){
        email.setValidators(Validators.required);
      }else{
        email.clearValidators();
      }
      email.updateValueAndValidity();
    })

  }

  constructor(private fb:FormBuilder){}


  get Username(){
    return this.registrationForm.get("username");
  }

  get email(){
    return this.registrationForm.get("email");
  }




  /*registrationForm = new FormGroup({
    username: new FormControl('Tarek'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      state:new FormControl(""),
      city: new FormControl("")
    })
  })*/


  loadApiData(){
    this.registrationForm.setValue({
      username:"Hasan",
      password:"test",
      confirmPassword:"test",
      address:{
        state:"BD",
        city:"Dhaka"
      }
    })
  }

 /* loadApiData(){
    this.registrationForm.patchValue({
      username:"Hasan",
      password:"test",
      confirmPassword:"test"
     
    })
  }*/


}
