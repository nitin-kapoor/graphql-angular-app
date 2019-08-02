import { Route } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { DetailComponent } from './books/detail/detail.component';
import { AddComponent } from './books/add/add.component';
import { EditComponent } from './books/edit/edit.component';

export const routes: Route[] = [
    { path: 'books', component: BooksComponent, data: { title: 'List of Books' } },
    { path: 'books/detail/:id', component: DetailComponent, data: { title: 'Book Details' } },
    { path: 'books/add', component: AddComponent, data: { title: 'Add Book' } },
    { path: 'books/edit/:id', component: EditComponent, data: { title: 'Edit Book' } },
    { path: '', redirectTo: '/books', pathMatch: 'full' }
  ];


