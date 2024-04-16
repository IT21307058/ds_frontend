import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LeadService } from '../../service/lead.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  // Array to store tasks
  tasks: any[] = [];
  
  constructor(private leadService: LeadService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTasks();
  }

  getAllTasks(): void {
    this.tasks = [];
    this.leadService.getAllTask().subscribe(res => {
      res.forEach(element => {
        this.tasks.push(element);
      })
    })
  }

  deleteTask(taskId: number){

    this.leadService.deleteTask(taskId).subscribe(() => {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    })
  }

  redirectToUpdatePage(taskId: number) {
    this.router.navigate(['/teamlead/updateTask/' , taskId]);
  }

}
