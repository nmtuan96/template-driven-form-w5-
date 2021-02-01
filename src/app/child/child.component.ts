import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Customer } from '../Customer'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childData
  @Output() changeEvent = new EventEmitter();
  setCus: any;
  list: any =[];
  customers: any= {
    id: '',
    name: '',
    age: '',
    address: '',
    email: '',
    career: '',
    hobby: ''
  }
  constructor() { }

  ngOnInit(): void {
  }
  
  addCustomer(){
    debugger
    if(!this.customers.id){
      this.customers.id = this.list.length+1;
      const newCus: any ={
        id:this.customers.id,
        name: this.customers.name,
        age: this.customers.age,
        address: this.customers.address,
        email: this.customers.email,
        career: this.customers.career,
        hobby: this.customers.hobby
      }
      this.list.push(newCus);
      this.customers.id = "";
      this.changeEvent.emit(this.list);
    }else{
      debugger
      for (var i in this.list) {
        if(this.list[i] == this.setCus){
          this.list[i] = this.customers;
          this.list[i].id = this.setCus.id;
          this.changeEvent.emit(this.list);
        }
      }
     
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.childData){
      this.customers.id= changes.childData.currentValue.id;
      this.customers.name = changes.childData.currentValue.name;
      this.customers.age = changes.childData.currentValue.age;
      this.customers.email = changes.childData.currentValue.email;
      this.customers.address = changes.childData.currentValue.address;
      this.customers.career = changes.childData.currentValue.career;
      this.customers.hobby = changes.childData.currentValue.hobby;
      this.setCus = this.childData;
    };
  }
}
