import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-navigation-item',
  imports: [RouterLink, RouterLinkActive, ButtonModule, TooltipModule],
  templateUrl: './navigation-item.html',
})
export class NavigationItem {
  readonly link = input.required<string[]>();
  readonly icon = input.required<string>();
  readonly page = input.required<string>();
  readonly exactActive = input(false);
}
