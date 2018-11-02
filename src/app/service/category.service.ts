import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Contact} from '../model/model.contact';
import {Category} from '../model/model.category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  getCategories(mc: string, size: number, page: number) {
    return this.http.get<any[]>('http://localhost:8080/chercherCategories?mc=' + mc + '&size=' + size + '&page=' + page);
  }
  getAllCategories() {
    return this.http.get<any[]>('http://localhost:8080/categories');
  }
  getContacts(id) {
    return this.http.get<any>('http://localhost:8080/getContactsOfCategory?id=' + id);
  }

  saveCategory(category: Category) {
    return this.http.post('http://localhost:8080/addCategory', category);
  }

  updateCategory(category: Category) {
    return this.http.put('http://localhost:8080/updateCategory/' + category.id, category);
  }
  deleteCategory(id: number) {
    return this.http.delete('http://localhost:8080/deleteCategory/' + id);
  }
  getCategoryById(id: number) {
    return this.http.get<any>('http://localhost:8080/getCategoryById/' + id);
  }
}
