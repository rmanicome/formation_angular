import { RecipeRoutedModule } from './recipe-routed.module';

describe('RecipeRoutedModule', () => {
  let recipeRoutedModule: RecipeRoutedModule;

  beforeEach(() => {
    recipeRoutedModule = new RecipeRoutedModule();
  });

  it('should create an instance', () => {
    expect(recipeRoutedModule).toBeTruthy();
  });
});
