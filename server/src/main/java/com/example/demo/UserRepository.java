package com.example.demo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.demo.UserModel;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<UserModel, Integer> {

    @Query(value="SELECT * FROM user_model WHERE name = 'Bucky'", nativeQuery=true)
    UserModel findBucky();

    UserModel findByName(String name);
}