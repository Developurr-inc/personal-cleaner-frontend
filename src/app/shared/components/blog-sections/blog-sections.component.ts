import { Component } from '@angular/core';

@Component({
  selector: 'app-blog-sections',
  standalone: true,
  imports: [],
  templateUrl: './blog-sections.component.html',
  styleUrl: './blog-sections.component.css'
})
export class BlogSectionsComponent {
  services = [
    {
      id:1,
      image:"https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      title:"Boost your consersion rate",
    },
    {
      id:2,
      image:"https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      title:"How to use search engine optimization to drive sales",
    },
    {
      id:3,
      image:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      title:"Improve your customer experience",
    },
    {
      id:4,
      image:"https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
      title:"Improve your customer experience",
    }
  ];
}
