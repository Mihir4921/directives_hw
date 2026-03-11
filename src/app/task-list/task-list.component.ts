import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  todayDate = new Date();

  taskForm = new FormGroup({
    title: new FormControl(),
    description: new FormControl(),
    date: new FormControl(),
  });

  TASKS = [
    {
      id: 1,
      title: 'Design Homepage Layout',
      description:
        'Create wireframes and a mockup for the new homepage layout.',
      dueDate: new Date('2026-02-20'),
      status: 'Incomplete',
      priority: 'High',
    },
    {
      id: 2,
      title: 'Update User Profile Feature',
      description:
        'Enhance the user profile page with new fields and validation.',
      dueDate: new Date('2026-02-15'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      id: 3,
      title: 'Fix Bugs in Task Management Module',
      description: 'Resolve the bugs reported in the task management module.',
      dueDate: new Date('2026-03-10'),
      status: 'Completed',
      priority: 'High',
    },
    {
      id: 4,
      title: 'Develop Notification System',
      description: 'Implement a notification system for task updates.',
      dueDate: new Date('2026-03-18'),
      status: 'Incomplete',
      priority: 'Low',
    },
    {
      id: 5,
      title: 'Code Review for Authentication Module',
      description:
        'Conduct a code review for the recently developed authentication module.',
      dueDate: new Date('2026-03-02'),
      status: 'In Progress',
      priority: 'Medium',
    },
    {
      id: 6,
      title: 'Prepare Sprint Review Presentation',
      description:
        'Compile a presentation for the upcoming sprint review meeting.',
      dueDate: new Date('2026-02-17'),
      status: 'Incomplete',
      priority: 'High',
    },
    {
      id: 7,
      title: 'Write Unit Tests for API Endpoints',
      description:
        'Write and run unit tests for the newly created API endpoints.',
      dueDate: new Date('2026-02-13'),
      status: 'Completed',
      priority: 'Medium',
    },
    {
      id: 8,
      title: 'Optimize Database Queries',
      description:
        'Improve the performance of the database queries used in the reporting module.',
      dueDate: new Date('2026-02-25'),
      status: 'Incomplete',
      priority: 'High',
    },
    {
      id: 9,
      title: 'Document API Specifications',
      description: 'Create detailed documentation for all API endpoints.',
      dueDate: new Date('2026-03-22'),
      status: 'Incomplete',
      priority: 'Low',
    },
    {
      id: 10,
      title: 'Conduct User Testing',
      description:
        'Arrange and oversee user testing sessions for the new features.',
      dueDate: new Date('2026-03-19'),
      status: 'In Progress',
      priority: 'High',
    },
  ];

  addNewTask() {
    const newTask = {
      id: this.TASKS.length + 1,
      title: this.taskForm.controls.title.value,
      description: this.taskForm.controls.description.value,
      dueDate: this.taskForm.controls.date.value,
      status: 'Incomplete',
      priority: 'Low',
    };
    this.TASKS.push(newTask);
  }
}
