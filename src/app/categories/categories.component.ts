import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CategoriesDataSource, CategoriesItem } from './categories-datasource';
import { CategoryService } from './category.service';
import { Category } from './category.dto';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styles: [`
    .full-width-table {
      width: 100%;
    }
  `]
})

export class CategoriesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<CategoriesItem>;
  dataSource!: MatTableDataSource<Category>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'description','actions'];

  showForm : Boolean = false;
  category!:Category;

  constructor(private categoryService: CategoryService) {
    
  }

  ngOnInit(): void {
    this.refreshData();
  }

  refreshData(){

    this.categoryService.getAll().subscribe(
      categories => {
        this.dataSource = new MatTableDataSource(categories);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      }
    )
  }

  onNewCategoryClick(){

    this.category = {
      id:0,
      name:'',
      description:''
    }

    this.showForm = true;
  }

  onEditCategoryClick(category:Category)
  {
    console.log("edit on category.component.ts",category);
  }
  
  onDeleteCategoryClick(category:Category)
  {
    console.log("delete on category.component.ts",category);
    if (confirm(`Delete "${category.name}" with id ${category.id} ?`)) {
             this.categoryService.delete(category.id).subscribe(
              () => this.refreshData()
            )
     }
  }
  

  onSave(category:Category)
  {
    console.log("save on category.component.ts",category);

    this.categoryService.save(category).subscribe((categorySaved) => {
        console.log('Category Saved', categorySaved);
        this.showForm = false;
        this.refreshData();
    });
  }

  onBackForm(){

    this.showForm = false;
    this.refreshData();
  }
  
}
