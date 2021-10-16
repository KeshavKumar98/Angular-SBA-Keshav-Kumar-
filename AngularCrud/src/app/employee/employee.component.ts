import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees:Employee[]=[];
  constructor(public employeeService:EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.getAllEmployee().subscribe((data:Employee[])=>
     {
      this.employees=data;
      console.log(this.employees);
     });
  
  }
}
