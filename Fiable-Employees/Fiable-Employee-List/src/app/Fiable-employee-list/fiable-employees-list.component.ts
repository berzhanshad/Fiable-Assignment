import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee-list/employee';

@Component({
  selector: 'app-fiable-employees-list',
  templateUrl: './fiable-employees-list.component.html',
  styleUrls: ['./fiable-employees-list.component.css']
})
export class FiableEmployeesListComponent implements OnInit {

  employeeList: Employee[] = [
    new Employee("F1234", "David",10000,"Developer",6,""),
    new Employee("F1235", "Berzhan",150000,"Developer",10,""),
    new Employee("F1236", "Mike",9000,"Developer",4,""),
    new Employee("F1237", "Susan",18000,"Developer",6,""),
    new Employee("F1238", "Dan",11000,"Developer",8,""),
    new Employee("F1239", "Maria",15000,"Developer",9,""),


  ]
  constructor() { }

  ngOnInit(): void {
  }

}
