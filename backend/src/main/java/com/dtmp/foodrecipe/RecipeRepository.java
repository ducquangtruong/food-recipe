package com.dtmp.foodrecipe;

import org.springframework.stereotype.Repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, ObjectId> {
    List<RecipeView> findByTitleContaining(String title);
}
