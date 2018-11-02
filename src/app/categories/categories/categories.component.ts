import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  pageCategories: any;
  pageContacts: any;
  motCle = '';
  size = 3;
  currentPage = 0;
  pages: any;
  mode = 1;
  nameCategory = '';
  constructor(private categoryservice: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.doSearch();
  }
  OnEditCategory(id) {
    this.router.navigate(['/edit-category', id]);
  }
  OnDeleteCategory(category) {
    const confirme = window.confirm('Est vous sure de le supprimer ?');
    if (confirme === true) {
      this.categoryservice.deleteCategory(category.id)
        .subscribe(data => {
          this.pageCategories.content.splice(this.pageCategories.content.indexOf(category), 1);
        }, err => {
          console.log(err);
        });
    }
  }
  doSearch() {
    this.categoryservice.getCategories(this.motCle, this.size, this.currentPage)
      .subscribe(
        (data: any) => {
          this.pageCategories = data;
          this.pages = new Array(data.totalPages);
          console.log(this.pageCategories);
        }, err => {
          console.log(err);
        });
  }
  goToPage(i: number) {
    this.currentPage = i;
    this.doSearch();
    this.pageContacts = null;
  }
  OnGetContacts(id) {
    this.categoryservice.getContacts(id)
      .subscribe((data: any) => {
          this.pageContacts = data;
        console.log(this.pageContacts);
        }, error => {
        console.log(error);
        });
  }

}
