import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `<div>
  <div *ngFor="let emp of employee">

<h3>{{emp.id}} {{emp.name}} age {{emp.age}}</h3><br>

</div>

<h1> {{errormsg}}</h1>

  </div>`,
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employee = [];
  public errormsg;

  constructor(private _employeeservice:EmployeeService) { }

  ngOnInit() {
    this._employeeservice.getEmployees()
    .subscribe(data=> this.employee = data,
        error=> this.errormsg = error
        );

        console.log(this.employee)
  }

}
