import { Component } from '@angular/core';
import { Blog } from './model/blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyBlog_Angular_Project';
  blogsList:Blog[] = [
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title1", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title2", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title3", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title4", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title5", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title6", detail:"None"},
  ]
}

