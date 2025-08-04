import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TasksSidebar } from './sidebar/sidebar';

@Component({
  selector: 'app-tasks',
  imports: [TasksSidebar, RouterOutlet],
  templateUrl: './tasks.html',
})
export class Tasks {}
