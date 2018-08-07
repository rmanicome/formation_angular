import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListComponent } from './recipe-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../../../shared/shared.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MOCK_RECIPES } from '../../shared/recipe.mock';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule, HttpClientTestingModule, NoopAnimationsModule],
      declarations: [ RecipeListComponent ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    component.recipes = MOCK_RECIPES;
    fixture.detectChanges();
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('recipes must contain one less item', () => {
    // given
    const recipe = component.recipes[0];
    // then
    component.onDelete(recipe);
    // expected
    expect(component.recipes.indexOf(recipe)).toBe(-1);
  });
});
