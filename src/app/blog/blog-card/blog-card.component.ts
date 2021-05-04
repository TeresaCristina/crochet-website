import { Component, OnInit } from '@angular/core';
import * as figures from '../../../assets/global/figures';

class Figures {
  link: string = "";
  alt: string = "";
  cat: string = "";
}

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  figLinks: Array<Figures> = figures.figLinks;
  title: string = "Circular Crochet Rug"
  description : string = "An easy guide to make your own"
  constructor() { }

  ngOnInit(): void {
  }

}
