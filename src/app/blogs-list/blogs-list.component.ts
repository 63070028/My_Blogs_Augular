import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../model/blog';
@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent {
   @Input() blogsList:Blog[] = [];
   @Output() eventBlogRemove = new EventEmitter();


   blogRemove(index:number){
    console.log(index);
    this.blogsList.splice(index,1);
    this.eventBlogRemove.emit(index);
   }
}
