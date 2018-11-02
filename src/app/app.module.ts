import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

import {FormsModule} from "@angular/forms";
import { ContactsComponent } from './contacts/contacts.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ContactsService} from './service/contacts.service';
import { NewContactComponent } from './new-contact/new-contact.component';
import { NouveauContactComponent } from './nouveau-contact/nouveau-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import {AboutServices} from './service/about.service';
import { GalleryComponent } from './gallery/gallery.component';
import {GalleryService} from './service/gallery.service';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { CategoriesComponent } from './categories/categories/categories.component';
import { NewCategoryComponent } from './categories/new-category/new-category.component';
import { EditCategoryComponent } from './categories/edit-category/edit-category.component';
import {AlertModule, BsDatepickerModule} from 'ngx-bootstrap';


const appRoutes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactsComponent},
  {path: 'new-contact', component: NewContactComponent},
  {path: 'nouveau-contact', component: NouveauContactComponent},
  {path: 'editContact/:id', component: EditContactComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'new-category', component: NewCategoryComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactsComponent,
    NewContactComponent,
    NouveauContactComponent,
    EditContactComponent,
    GalleryComponent,
    FormUploadComponent,
    ListUploadComponent,
    DetailsUploadComponent,
    CategoriesComponent,
    NewCategoryComponent,
    EditCategoryComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), HttpClientModule, BsDatepickerModule.forRoot(), AlertModule.forRoot()
  ],
  providers: [ContactsService, AboutServices, GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
