package com.dtmp.foodrecipe;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> allRecipes() {
        return recipeRepository.findAll();
    }

    public List<RecipeView> allRecipeViews(String searchParam) {
        return recipeRepository.findByTitleContaining(searchParam);
    }

    public Optional<Recipe> singleRecipe(ObjectId id) {
        return recipeRepository.findById(id);
    }
}
