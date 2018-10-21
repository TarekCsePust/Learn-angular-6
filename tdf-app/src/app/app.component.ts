import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ["angular","react","vue"]
  topicHaserror = true
  userModel = new User("Tarek","tarek@gmail.com",4586586,"default","morning",true)
  title = 'my-app';
  submitted = false
  errorMsg = ""

  constructor(private enrollmentservice:EnrollmentService){

  }

  validateTopic(value){
    if (value=="default")
    {
      this.topicHaserror = true
    }
    else{
      this.topicHaserror = false
    }
  }

  onSubmit(userForm){
    console.log(userForm)
    this.submitted = true
    this.enrollmentservice.enroll(this.userModel).subscribe(
      data => console.log("Sucess!",data),
      error=> this.errorMsg=error.statusText
      
    )
    console.log(this.userModel)
  }
}
