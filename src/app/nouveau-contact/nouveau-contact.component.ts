import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../service/contacts.service';
import {Contact} from '../model/model.contact';
import {CategoryService} from '../service/category.service';
import {Category} from '../model/model.category';

@Component({
  selector: 'app-nouveau-contact',
  templateUrl: './nouveau-contact.component.html',
  styleUrls: ['./nouveau-contact.component.css']
})
export class NouveauContactComponent implements OnInit {
  categories: any;
  categories2;
  mode = 1;
  contact: Contact = new Contact();
  constructor(public contactsService: ContactsService, public categoryService: CategoryService) { }

  ngOnInit() {
    this.doSearch() ;
  }
  doSearch() {
    this.categoryService.getAllCategories()
      .subscribe(
        (data: any) => {
          this.categories = data;
          this.categories2 = this.categories[0];
          console.log(this.categories);
        }, err => {
          console.log(err);
        });
  }
  OnSaveContact(dataForm) {
    console.log(dataForm );
    this.contactsService.saveContact(dataForm)
      .subscribe((data: any) => {
        console.log(data);
        this.contact = data;
        this.mode = 2;
      }, err => {
        console.log(JSON.parse(err.body).message); // pour afficher le message de l exeption
      });
  }

}
