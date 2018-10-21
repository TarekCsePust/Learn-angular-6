import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>Individual 
  templates {{name}}
  <h2 class="text-success">{{"welcome" + name}}</h2>
  <h3 [id] = "textstyle">{{ name.length}}</h3>
  <h1 [class.text-danger]="haserror">{{ getUser()}}</h1>
  <h4 [ngClass] = "message">{{ siteUrl}}</h4>
  <h4 [style.color] = "'orange'">{{ siteUrl}}</h4>
  <h4 [style.color] = "haserror ? 'red':'green'">{{ siteUrl}}</h4>
  <h2 [ngStyle] = "msgstyle">Hello cse</h2>
  <input  [id]="myid" type="text" value="Hasan">
  <input disabled   [id]="myid" type="text" value="Hasan">
  <input bind-disabled="isDisable" type="text" [id]="myid" value="Hasan">
  <button (click)="onClick($event)">Greet</button>
  {{username}}<br>
  <button (click)="developer='This django developper'">developper</button>
  {{developer}}


  <input #myinput type="text">
  <button (click)="logmessage(myinput)">Greet</button>

  <br>
  <input [(ngModel)]="country" type="text">
  {{country}}

  <br>
  <br>

  <h2 *ngIf="displayemail; else elseBlock">hasantarek@gmail.com</h2>

  <ng-template #elseBlock>
    <h2>email id hidden</h2>
  </ng-template>


  <div *ngIf="displayemail; then thenBlock; else elseBlck"></div>


  <ng-template #thenBlock>
    <h2>tarek@gmail.com</h2>
  </ng-template>


  <ng-template #elseBlck>
  <h2>email id hidden........</h2>
</ng-template>



<div [ngSwitch]="color">
    <div *ngSwitchCase="'red'"><h4> picked the red color</h4></div>
    <div *ngSwitchCase="'blue'"><h4> picked the blue color</h4></div>
    <div *ngSwitchCase="'green'"><h4> picked the green color</h4></div>
    <div *ngSwitchDefault><h4> picked the  color again</h4></div>

</div>




<br>
<br>
<div *ngFor="let dept of depts; index as i">

<h3>{{i}} {{dept}}</h3><br>

</div>


<br>
<br>
<div *ngFor="let dept of depts; first as i">

<h3>{{i}} {{dept}}</h3><br>

</div>


<br>
<br>
<div *ngFor="let dept of depts; last as i">

<h3>{{i}} {{dept}}</h3><br>

</div>



<br>
<br>
<div *ngFor="let dept of depts; odd as i">

<h3>{{i}} {{dept}}</h3><br>

</div>

<br>
<br>
<br>

<h2> {{ fullname}}</h2>
<button (click)="fireEvent()">Send Event</button>


<br>
<br>

<h2> {{ fullname | lowercase}}</h2>
<h2> {{ fullname | uppercase}}</h2>
<h2> {{ fullname | titlecase}}</h2>
<h2> {{ fullname | slice:3:6}}</h2>
<h2> {{ person | json}}</h2>

<br>
<br>
 <h2> {{3.235 | number:'1.2-3'}} </h2>
 <h2> {{3.235 | number:'2.4-5'}} </h2>
 <h2> {{3.235 | number:'3.1-2'}} </h2>
 <br>
 <br>

 <h2> {{0.25 | percent}} </h2>
 <h2> {{0.25 | currency}} </h2>
 <h2> {{0.25 | currency:'BDT'}} </h2>
 <br>

 <h3> {{date}}</h3>
 <h3> {{date | date:'short' }}</h3>
 <h3> {{date | date:'shortDate' }}</h3>
 <h3> {{date | date:'shortTime' }}</h3>
  </div>`,
  styles: [`
   

    .text-danger{
      color:red;
    }
    .text-success{
      color:green;
    }

  `]
})
export class TestComponent implements OnInit {

  public name= "CSE DEPT."
  public siteUrl = window.location.href
  public myid = "testid"
  public isDisable = true
  public textstyle = "text-success"
  public haserror = true
  public isSpecial = true
  public username = ""
  public developer=""
  public country=""
  public displayemail = true
  public color = "red"
  public depts = ["cse","eee","ice","cevil","ete","arch","urp"]
  public date = new Date()
  public person ={
    "firstname":"Hasan",
    "lastname": "Tarek"
  }

  @Output() public childEvent = new EventEmitter()

  @Input('parenData') public fullname;

  public message = {
    "text-success":!this.haserror,
    "text-danger":this.haserror
  }

  public msgstyle = {
    color:"red",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit() {
  }

  getUser()
  {
    return "Hello " + this.name
  }

  onClick(event)
  {
    this.username="tarek12"
    console.log(event.type)
  }

  logmessage(val)
  {
      console.log(val.value)
  }

  fireEvent(){
    this.childEvent.emit("Hey Tareki how are u ??")

  }

}
