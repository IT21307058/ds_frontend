import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LeadService } from '../../service/lead.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Array to store tasks
  tasks: any[] = [];

  constructor(private leadService: LeadService){}

  ngOnInit(): void{
    this.getAllTasks();
  }

  getAllTasks(): void{
    this.tasks = [];
    this.leadService.getAllTask().subscribe(res => {
      res.forEach(element => {
        this.tasks.push(element);
      })
    })
  }

}
