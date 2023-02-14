import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Blog } from '../model/blog';
@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.css']
})
export class BlogsListComponent {
   @Input() itemsList:Blog[] = [];
   @Input() itemPerEachPage:number = 0;
   @Input() gapItem:number = 12;
   @Output() itemRemove = new EventEmitter();

   columnClass:string = "column is-12";
   
   presentPage:number = 1;
   pastPage:number = 1;
 
   
   countOfPages:number[] = [];
 
   // Math.ceil(this.itemsList.length/this.itemPerEachPage)
 
   addBlogsPageList:Blog[] = [];
 
   nextPageClicked:boolean = false;
   previousClicked:boolean = false;
 
   ngOnInit() {
     this.loadMyPaginationList();
     this.countOfPages = Array.from(Array(Math.ceil(this.itemsList.length/this.itemPerEachPage)).keys());
     document.getElementById('pageId'+this.presentPage)?.classList.add('is-current');
   }
 
   ngAfterViewInit(){
     document.getElementById('pageId'+this.presentPage)?.classList.add('is-current');
     this.columnClass = "column is-"+this.gapItem;
   }
 
   getNextPage(){
     this.pastPage = this.presentPage;
     this.presentPage += 1;
     this.loadMyPaginationList();
     document.getElementById('pageId'+this.presentPage)?.classList.add('is-current');
     document.getElementById('pageId'+this.pastPage)?.classList.remove('is-current');
   }
 
   getPreviousPage(){
     this.pastPage = this.presentPage;
     this.presentPage -= 1;
     this.loadMyPaginationList();
     document.getElementById('pageId'+this.presentPage)?.classList.add('is-current');
     document.getElementById('pageId'+this.pastPage)?.classList.remove('is-current');
   }
 
   changePage(page:number){
     this.pastPage = this.presentPage;
     this.presentPage = page;
     document.getElementById('pageId'+page)?.classList.add('is-current');
     document.getElementById('pageId'+this.pastPage)?.classList.remove('is-current');
     this.loadMyPaginationList();
   }
 
   loadMyPaginationList(){
     let startBlog = (this.presentPage-1)*this.itemPerEachPage;
     let endBlog = startBlog+this.itemPerEachPage;
     this.addBlogsPageList = this.itemsList.slice(startBlog, endBlog);
     this.validatePageCount();
   }
 
   validatePageCount(){
     this.presentPage === this.countOfPages.length ? this.nextPageClicked = true : this.nextPageClicked = false;
     this.presentPage === 1 ? this.previousClicked = true : this.previousClicked = false;
   }

   blogRemove(index:number){
    this.itemsList.splice(index,1);
    console.log(`blogs-list blogs ${this.itemsList.length}`)
    this.countOfPages = Array.from(Array(Math.ceil(this.itemsList.length/this.itemPerEachPage)).keys());
    this.loadMyPaginationList();
    this.itemRemove.emit(index);
   }
}
