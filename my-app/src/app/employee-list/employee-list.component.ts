import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `<div>
  <div *ngFor="let emp of employee">

<h3>{{emp.id}} {{emp.name}}</h3><br>

</div>

<h1> {{errormsg}}</h1>

  </div>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employee = [];
  public errormsg;

  constructor(private _employeeservice:EmployeeService) { }

  ngOnInit() {
    this._employeeservice.getEmployees()
    .subscribe(data=> this.employee = data,
        error=> this.errormsg = error
        );
  }

}
