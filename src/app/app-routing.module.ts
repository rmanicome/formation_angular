import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RecipeListComponent } from './recipe/routed/recipe-list/recipe-list.component';
import { RecipeOverviewComponent } from './recipe/routed/recipe-overview/recipe-overview.component';
import { RecipeCreateComponent } from './recipe/routed/recipe-create/recipe-create.component';
import { RecipeUpdateComponent } from './recipe/routed/recipe-update/recipe-update.component';

const routes: Routes = [
  {
    path: 'recipe',
    component: RecipeListComponent
  },
  {
    path: 'recipe/create',
    component: RecipeCreateComponent
  },
  {
    path: 'recipe/update/:id',
    component: RecipeUpdateComponent
  },
  {
    path: 'recipe/:id',
    component: RecipeOverviewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
