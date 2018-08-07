import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { StrToArrayPipe } from '../shared/str-to-array.pipe';
import { SharedModule } from '../../shared/shared.module';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { RouterModule } from '@angular/router';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeUpdateComponent } from './recipe-update/recipe-update.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    RecipeListComponent,
    RecipeDetailComponent,
    StrToArrayPipe,
    RecipeOverviewComponent,
    RecipeCreateComponent,
    RecipeUpdateComponent
  ]
})
export class RecipeRoutedModule { }
