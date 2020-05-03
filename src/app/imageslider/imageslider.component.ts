import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-imageslider',
  templateUrl: './imageslider.component.html',
  styleUrls: ['./imageslider.component.css']
})
export class ImagesliderComponent implements OnInit {
  currentPage: number = 0;
  paginationSlider = []; 
  indexing: number = 1;
  diff: number = 0;
  counter: number = 0;
  images = [
    {
      page_id: 1,
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
    },
    {
      page_id: 2,
      title: 'On the mountains',
      url: 'https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      page_id: 3,
      title: 'in the city',
      url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      page_id: 4,
      title: 'house',
      url:'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
    },
    {
      page_id: 5,
      title: 'music',
      url:'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      page_id: 6,
      title: 'sports',
      url:'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      page_id: 7,
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
    },
    {
      page_id: 8,
      title: 'music',
      url:'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      page_id: 9,
      title: 'sports',
      url:'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
    },
    {
      page_id: 10,
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    for(let itm of this.images){
      if(this.paginationSlider.length < 5){
        this.paginationSlider.push(itm)
      }    
    }
  }

  getNextPage(){
    if(this.indexing <= this.images.length - 1){
      if(this.indexing > 4){
        console.log("here..")
        console.log(this.indexing)
        this.paginationSlider.shift()
        this.paginationSlider.push(this.images[this.indexing])
        console.log(this.paginationSlider)
      }else{
        this.currentPage += 1
      }
      this.indexing += 1
    }
  }

  getPreviousPage(){
    if(this.indexing > 1){
      this.diff = this.paginationSlider[4].page_id - this.paginationSlider[0].page_id + 1
      if(this.diff === 5 && this.currentPage > 0){
          console.log(this.paginationSlider[4].page_id)
          console.log(this.paginationSlider[0].page_id)
          this.currentPage -= 1
          this.indexing -= 1
          console.log(this.currentPage)
      }else{
        console.log(this.paginationSlider)
        this.counter = this.images.indexOf(this.paginationSlider[0])
        this.paginationSlider.pop()
        this.paginationSlider.unshift(this.images[this.counter - 1])
        this.indexing -= 1
      }
    }
  }


}
