import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesLoadingAsyncComponent } from './categories/categories-loading-async/categories-loading-async.component';

const routes: Routes = [
    {path:'categories', component:CategoriesComponent},
    {path:'categories-async',component:CategoriesLoadingAsyncComponent},
    {path:'', component:DashboardComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
