import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './category.dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {

  constructor(private http:HttpClient) { }

  public getAll() : Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories')
  }

  public save(category:Category):Observable<Category> {
    if (category.id) return this.http.put<Category>('http://localhost:3000/categories/'+ category.id,category);

    return this.http.post<Category>('http://localhost:3000/categories',category);
  }

  public delete(id: number) {
    return this.http.delete('http://localhost:3000/categories/' + id);
  }
}
