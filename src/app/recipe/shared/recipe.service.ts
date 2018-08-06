import { Injectable } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MOCK_RECIPES } from './recipe.mock';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipeUrl = 'http://10.0.1.229:8080/api/v1/recipes';

  constructor(
    private _httpClient: HttpClient
  ) { }

  getAllRecipes(): Observable<Recipe[]> {
    // return this._httpClient.get<Recipe[]>(this.recipeUrl);
    return of(MOCK_RECIPES);
  }

  getById(id: string): Observable<Recipe> {
    return this._httpClient.get<Recipe>(`${this.recipeUrl}/${id}`);
  }
}
