import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecipeService } from '../../shared/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-update',
  templateUrl: './recipe-update.component.html',
  styleUrls: ['./recipe-update.component.scss']
})
export class RecipeUpdateComponent implements OnInit {
  recipe: Recipe;

  updateForm = this._fb.group({
      name: [''],
      picture: [''],
      description: ['']
    }
  );

  constructor(
    private _route: ActivatedRoute,
    private _recipeService: RecipeService,
    private _fb: FormBuilder
  ) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this._recipeService.getById(id).subscribe(recipe => {
      this.recipe = recipe;
      this.updateForm.patchValue({
      name: this.recipe.name,
      picture: this.recipe.picture,
      description: this.recipe.description
    });
  });
  }

  sendForm() {
    this.recipe.name = this.updateForm.get('name').value;
    this.recipe.picture = this.updateForm.get('picture').value;
    this.recipe.description = this.updateForm.get('description').value;
    console.log(this.recipe);
    this._recipeService.updateRecipe(this.recipe).subscribe();
  }

}
