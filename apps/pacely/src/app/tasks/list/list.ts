import { Component } from '@angular/core';

import { TasksCreateField } from '../create-field/create-field';
import { TasksViewSelector } from '../view-selector/view-selector';

@Component({
  selector: 'app-tasks-list',
  imports: [TasksViewSelector, TasksCreateField],
  templateUrl: './list.html',
})
export class TasksList {}
