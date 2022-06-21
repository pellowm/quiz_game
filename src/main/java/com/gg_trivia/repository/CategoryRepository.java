package com.gg_trivia.repository;

import com.gg_trivia.model.CategoryModel;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface CategoryRepository extends CrudRepository<CategoryModel, Integer> {

}