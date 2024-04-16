import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LeadService } from '../../service/lead.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetask',
  templateUrl: './updatetask.component.html',
  styleUrls: ['./updatetask.component.css']
})
export class UpdatetaskComponent {

  taskId: number;
  taskForm: FormGroup;

  constructor(private leadService: LeadService, private route: ActivatedRoute, private router:Router, private formBuilder:FormBuilder){
    
  }

  ngOnInit(): void{
    this.taskForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['', Validators.required],
      userId: ['', Validators.required]
    })

    this.route.params.subscribe(params => {
      this.taskId = +params['id'];
      this.loadTaskDetails(this.taskId);
    })
  }


  loadTaskDetails(taskId: number){
    this.leadService.getOneTask(taskId).subscribe((task: any) => {
      this.taskForm.patchValue({
        title: task.title,
        description: task.description,
        dueDate: task.dueDate,
        status: task.status,
        userId: task.assignedTo.id
      });
    });
  }

  updateTask() {
    if (this.taskForm.valid) {
      const taskDto = {
        title: this.taskForm.get('title').value,
        description: this.taskForm.get('description').value,
        dueDate: this.taskForm.get('dueDate').value,
        status: this.taskForm.get('status').value,
        userId: this.taskForm.get('userId').value
      };
      this.leadService.updateTask(this.taskId, taskDto).subscribe(() => {
        // Redirect to task list or any other page after successful update
        this.router.navigateByUrl('/teamlead/dashboard');
      });
    }
  }

}
