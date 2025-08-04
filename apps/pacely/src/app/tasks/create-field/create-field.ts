import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';

@Component({
  selector: 'app-tasks-create-field',
  imports: [IconFieldModule, ButtonModule],
  templateUrl: './create-field.html',
})
export class TasksCreateField {}
