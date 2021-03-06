import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
// import { Book } from './book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
    
    displayedColumns: string[] = ['title', 'author'];
    data: any[] = [];
    resp: any = {};
    isLoadingResults = true;

    constructor(private apollo: Apollo) {
    }

    ngOnInit() {
        this.apollo.query({
            query: gql` { 
                books { 
                    id, 
                    title, 
                    author 
                }
            }`
        }).subscribe(res => {
            this.resp = res;
            this.data = this.resp.data.books;
            console.log(this.data);
            this.isLoadingResults = false;
        });
      }

}
