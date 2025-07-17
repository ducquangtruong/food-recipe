package com.dtmp.foodrecipe;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "foodrecipe")
public class Recipe {
    @Id
    private String id;

    private Object[] ingredients;
    private String publisher;
    private String source_url;
    private String image_url;
    private String title;
    private int servings;
    private int cooking_time;
}

interface RecipeView {
    String getPublisher();
    String getImage_url();
    String getTitle();
    String getId();
}