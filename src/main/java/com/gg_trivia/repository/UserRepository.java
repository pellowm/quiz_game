package com.gg_trivia.repository;

import com.gg_trivia.model.UserModel;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<UserModel, Integer> {

    UserModel findByName(String name);

    UserModel findBySub(String sub);

}