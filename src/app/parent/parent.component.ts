import { Component, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  list: any =[];
  dataSource = new MatTableDataSource<any[]>();
  receiveData($event){
    this.list = $event
    this.dataSource.data = this.list;
  }
  
  displayedColumns: string[] = ['id', 'name', 'age', 'address', 'email', 'career', 'hobby', 'action'];

  constructor() { }

  ngOnInit(): void {
  }

  deleteCustomer(i){
    debugger
    this.list.splice(i,1);
    this.dataSource.data = this.list;
  }

  parentData:any;
  editCustomer(i){
    var data = this.list.find(e => e.id == i);
    this.parentData = data
  }
}
