import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
        MatSortModule, MatTableModule, MatIconModule,
        MatButtonModule, MatCardModule, MatFormFieldModule } from "@angular/material";

import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from "apollo-cache-inmemory";

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { DetailComponent } from './books/detail/detail.component';
import { AddComponent } from './books/add/add.component';
import { EditComponent } from './books/edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    DetailComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        apollo: Apollo,
        httpLink: HttpLink) {
            apollo.create({
            link: httpLink.create({ uri: 'https://localhost:3000/graphql'}),
            cache: new InMemoryCache()
        });
    }
}
