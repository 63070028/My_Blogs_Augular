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

  presentPage:number = 1;
  pastPage:number = 1;

  blogPerEachPage:number = 8;
  countOfPages:number[] = Array.from(Array(Math.ceil(this.blogsList.length/this.blogPerEachPage)).keys());

  // Math.ceil(this.blogsList.length/this.blogPerEachPage)

  addBlogsPageList:Blog[] = [];

  nextPageClicked:boolean = false;
  previousClicked:boolean = false;

  ngOnInit() {
    this.loadMyPaginationList();
  }

  ngAfterViewInit(){
    document.getElementById('pageId'+this.presentPage)?.classList.add('is-current');
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
    let startBlog = (this.presentPage-1)*this.blogPerEachPage;
    let endBlog = startBlog+this.blogPerEachPage;
    this.addBlogsPageList = this.blogsList.slice(startBlog, endBlog);
    this.validatePageCount();
  }

  validatePageCount(){
    this.presentPage === this.countOfPages.length ? this.nextPageClicked = true : this.nextPageClicked = false;
    this.presentPage === 1 ? this.previousClicked = true : this.previousClicked = false;
  }

  appRemoveBlog(index:number){
    this.blogsList.splice(index,1);
    //เนื่องจาก this.blogsList.length เปลี่ยนต้องรีค่่า
    this.countOfPages = Array.from(Array(Math.ceil(this.blogsList.length/this.blogPerEachPage)).keys());
    this.loadMyPaginationList();
  }

}
