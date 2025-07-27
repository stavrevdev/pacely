import { Component } from '@angular/core';

import { Logo } from '../logo/logo';
import { NavigationItem } from './navigation-item/navigation-item';

@Component({
  selector: 'app-navigation',
  imports: [Logo, NavigationItem],
  templateUrl: './navigation.html',
})
export class Navigation {}
