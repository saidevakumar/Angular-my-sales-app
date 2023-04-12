import { Component, OnInit } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Category } from '../category.dto';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-categories-loading-async',
  templateUrl: './categories-loading-async.component.html',
  styleUrls: ['./categories-loading-async.component.css']
})

export class CategoriesLoadingAsyncComponent implements OnInit {
  
  categoriesObservable!: Observable<Category[]>;
  categories: Category[] = [];

  constructor(private categoriesService:CategoryService){

  }

  async ngOnInit() {
    this.categoriesObservable = this.categoriesService.getAll();
    this.categories = await lastValueFrom(this.categoriesObservable)
  }

}