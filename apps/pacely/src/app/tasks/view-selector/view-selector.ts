import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SelectButtonModule } from 'primeng/selectbutton';

export enum TaskView {
  List,
  Kanban,
  Calendar,
}

export interface SelectedTaskView {
  icon: string;
  value: TaskView;
  label: string;
}

@Component({
  selector: 'app-tasks-view-selector',
  imports: [FormsModule, SelectButtonModule],
  templateUrl: './view-selector.html',
})
export class TasksViewSelector {
  readonly views: SelectedTaskView[] = [
    { icon: 'pi pi-list', value: TaskView.List, label: 'List' },
    { icon: 'pi pi-objects-column', value: TaskView.Kanban, label: 'Kanban' },
    { icon: 'pi pi-calendar', value: TaskView.Calendar, label: 'Calendar' },
  ];
  readonly value = signal<TaskView>(TaskView.List);
}
