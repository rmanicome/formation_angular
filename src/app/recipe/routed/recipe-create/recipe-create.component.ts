import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { RecipeService } from '../../shared/recipe.service';
import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {
  recipe = new Recipe();

  constructor(
    private _recipeService: RecipeService
  ) { }

  ngOnInit() {
  }

  sendForm() {
    this.recipe.ingredients = [
      {
        'ingredientId': 1,
        'name': 'Dark rum (Appleton Estate Reserve)',
        'quantity': 2,
        'unit': 'oz'
      }
    ];
    this._recipeService.addRecipe(this.recipe).subscribe(() => {}, error => console.log(error), () => {});
  }

}
