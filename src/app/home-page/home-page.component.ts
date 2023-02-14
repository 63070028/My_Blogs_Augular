import { Component } from '@angular/core';
import { Blog } from '../model/blog';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  blogsList:Blog[] = [
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title1", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title2", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title3", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title4", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title5", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title6", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title7", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title8", detail:"None"},

    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title9", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title10", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title11", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title12", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title13", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title14", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title15", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title16", detail:"None"},

    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title17", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title18", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title19", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title20", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title21", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title22", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title23", detail:"None"},
    {image:"https://bulma.io/images/placeholders/1280x960.png", date:"None", title:"Title24", detail:"None"},
  ]

  test(){
    console.log(`home-page blogs ${this.blogsList.length}`)
  }

}
