import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-home',
  templateUrl: './list-home.component.html',
  styleUrls: ['./list-home.component.scss']
})
export class ListHomeComponent implements OnInit {

  numbers = [
    {value:50,label:'Müşteri'},
    {value:100,label:'Ciro'},
    {value:150,label:'Yorumlar'},
  ]
  images=[
    {
      image: '/assets/images/dresser.jpeg',
      title:'Şifonyer',
      description:'Şifonyer her türlü ihtiyaç'
    },
    {
      image: '/assets/images/couch.jpeg',
      title:'Koltuk',
      description:'Oturması rahat koltuk'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
