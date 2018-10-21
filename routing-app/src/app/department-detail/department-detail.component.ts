import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, ParamMap } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      department id is {{deptId}}!
    </p>
    <br>
    <button (click)="showOverview()">Overview </button>
    <button (click)="showContact()">Contact </button>
    <router-outlet> </router-outlet>
    <br>
    <br>
    <a (click)="goPrev()">Previous </a><br>
    <a (click)="goNext()"> Next</a>
    <br>
    <button (click)="gotoDept()"> Back</button>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public deptId;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //let id = parseInt(this.route.snapshot.paramMap.get("id"))
    //this.deptId = id
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get("id"))
      this.deptId = id
    })
  }

  goPrev()
  {
    let prevId = this.deptId-1;
    this.router.navigate(["/departments",prevId])
    //this.router.navigate(['../',prevId])
  }
  goNext()
  {
    let nextId = this.deptId+1;
    this.router.navigate(["/departments",nextId])
    //this.router.navigate(['../',nextId])
  }

  gotoDept(){
    let selectId = this.deptId ? this.deptId : null;
    //this.router.navigate(['/departments',{id:selectId}])
    this.router.navigate(['../',{id:selectId}],{relativeTo:this.route})
  }

  showOverview()
  {
    this.router.navigate(['overview'],{relativeTo:this.route})
  }

  showContact()
  {
    this.router.navigate(['contact'],{relativeTo:this.route})
  }
}
