/*Website Crochet Client - Teresa Costa
  Created: 20, April, 2021*/

import { Component, OnInit } from '@angular/core';
import * as links from '../../assets/global/links';
import * as categories from '../../assets/global/classifications';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  storeLink: string = links.storeLink;

  figCategory: Array<string> = categories.crochetCategories;

  constructor() { }

  ngOnInit(): void {
  }
}
