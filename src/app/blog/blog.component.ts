import { Component, OnInit } from '@angular/core';
import * as figures from '../../assets/global/figures';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogBanner: string = figures.blogBanner;
  constructor() { }

  ngOnInit(): void {
  }

}
