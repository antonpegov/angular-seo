import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(meta: Meta, title: Title) { 
    title.setTitle('My About Page');
    meta.addTags([
      {
        name:'author', content: 'Maksim Pegov'
      },
      {
        name:'keywords', content: 'angular2 tutorial, angular2 seo'
      },
      {
        name:'discription', content: 'I love web development.'
      }
    ]);
  }

  ngOnInit() {
  }

}
