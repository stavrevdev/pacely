import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navigation } from './layout/navigation/navigation';

@Component({
  imports: [RouterOutlet, Navigation],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {}
