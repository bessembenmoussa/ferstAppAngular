import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/model.category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  idCategory;
  category: Category = new Category();
  constructor(private activatedRoot: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router) {
    this.idCategory = this.activatedRoot.snapshot.params['id'];
  }

  ngOnInit() {
    this.categoryService.getCategoryById(this.idCategory)
      .subscribe(
        data => {
          console.log(data);
          this.category = data;
          console.log(this.category);
        }, err => {console.log(err); }
      );
  }
  updateCategory(id) {
    this.categoryService.updateCategory(this.category)
      .subscribe(data => {
        alert( 'Mise a jour effectué.' );
        this.router.navigate(['/categories']);
      }, err => {
        console.log(err) ; });
  }

}
