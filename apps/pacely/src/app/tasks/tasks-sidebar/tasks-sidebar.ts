import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-sidebar',
  imports: [],
  templateUrl: './tasks-sidebar.html',
})
export class TasksSidebar {
  readonly itemClasses =
    'p-2 flex gap-2 items-center rounded-lg cursor-pointer text-slate-600 hover:bg-slate-200 hover:text-slate-800 transition-colors';
  readonly titleClasses = 'text-xs uppercase text-slate-400 font-medium p-2';
}
