
/*Website Crochet Client - Teresa Costa
  Created: 26, April, 2021*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  content: string = `Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake
  Equation brain is the seed of intelligence?`;

  title: string = `Billions upon billions`;
  link: string = `#`;

  constructor() { }

  ngOnInit(): void {
  }

}
