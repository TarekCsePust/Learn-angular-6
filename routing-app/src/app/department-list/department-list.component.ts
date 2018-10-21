import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '../../../node_modules/@angular/router';
import { relative } from 'path';

@Component({
  selector: 'app-department-list',
  template: `
    <div>
     <h2> Department list</h2>
      <ul class="items">
        <li (click)="onSelect(dept)" [class.selected]="isSelected(dept)" *ngFor="let dept of departments">
            <span class="badge">{{dept.id}} </span>{{dept.name}}
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  public departments = [
    {"id":1,"name":"CSE"},
    {"id":2,"name":"EEE"},
    {"id":3,"name":"CIVIL"},
    {"id":4,"name":"ICE"},
    {"id":5,"name":"ETE"}
  ]

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get("id"))
      this.selectedId = id})
  }

  onSelect(dept){

    //this.router.navigate(["/departments",dept.id])
    this.router.navigate([dept.id],{relativeTo:this.route})

  }

  isSelected(dept){
    return dept.id === this.selectedId
  }

}
