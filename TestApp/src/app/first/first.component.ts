import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { reduce } from 'rxjs';
import { StudentListService } from '../student-list.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  public name = "Chaitanya";
  public isDisabled = false; 
  public myId = "textb";
  public successClass = "text-success";
  public colors=["red","green","blue","yellow"];
  public displayname=false;
  public color="orange";
  public student_list=[] as any;
  public errormsg="";



  public employeeList = [] as any;

  @Input('parentData') public myName="";
  @Output() public childEvent = new EventEmitter();



  greetUser(){
    return "Hello How are you!" + this.name;
  }

  handlegreet(event: any){
    console.log(event);
    console.log(event.type);
  }
  
  printMessage(msg: any){
    console.log(msg);
  }

  fireEvent(){
    this.childEvent.emit("App-component-Angular");
  }

  constructor(private _studentsService: StudentListService){}
  ngOnInit(){
    this.student_list = this._studentsService.getStudents().subscribe(data => this.employeeList = data,
      error => this.errormsg = error);
  }
}