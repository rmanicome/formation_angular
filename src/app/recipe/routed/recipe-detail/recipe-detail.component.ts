import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe.model';
import { RecipeService } from '../../shared/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;
  @Input() detailView = false;
  @Output() delete: EventEmitter<any> = new EventEmitter();
  expanded = false;

  constructor(
    private _recipeService: RecipeService
  ) { }

  ngOnInit() {
  }

  toggle() {
    this.expanded = !this.expanded;
  }

  doDelete() {
    this._recipeService.deleteRecipe(this.recipe).subscribe(() => this.delete.emit(this.recipe), error => console.log(error), () => {});
  }
}
