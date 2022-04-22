package com.example.demo;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface QuestionRepository extends CrudRepository<QuestionModel, Integer> {

    @Query(value="SELECT * FROM question_model as Q " +
                  "JOIN question_model_categories as C " +
                  "ON Q.id = C.questions_id " +
                  "WHERE C.categories_id = ?1",
                  nativeQuery=true)

    List<QuestionModel> filterQuestionsByCategory(Integer id);

    List<QuestionModel> findByCategories_Id(Integer Id);
}