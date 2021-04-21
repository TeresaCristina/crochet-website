/*Website Crochet Client - Teresa Costa
  Created: 20, April, 2021*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public toggleFlag: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public showDropdown() { this.toggleFlag = !this.toggleFlag; }
}
