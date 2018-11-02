import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Router} from '@angular/router';

interface Alert {
  type: string;
  message: string;
}
const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}];
@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})

export class NewCategoryComponent implements OnInit {
  category;
  nameCategory;
  alerts: Alert[];
  constructor(private categoryService: CategoryService, public router: Router) { }

  ngOnInit() {
  }
  onSaveCategory(dataForm) {
    this.categoryService.saveCategory(dataForm)
      .subscribe(data => {
        this.category = data;
        this.nameCategory = '';
        this.router.navigate(['/categories']);
      }, err => {
        console.log(err);
      });
  }
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }
}
