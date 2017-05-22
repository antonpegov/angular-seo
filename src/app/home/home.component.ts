import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 
    title.setTitle('My Cool Home Page');
    meta.addTags([
      {
        name:'author', content: 'Anton Pegov'
      },
      {
        name:'keywords', content: 'angular tutorial, angular seo'
      },
      {
        name:'discription', content: 'This is my discription.'
      }
    ]);
  }

  ngOnInit() {
  }

}
