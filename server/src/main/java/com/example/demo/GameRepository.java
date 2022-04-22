package com.example.demo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface GameRepository extends CrudRepository<GameModel, Integer> {

    @Query(value="UPDATE game_model SET score = gameScore WHERE id = gameId", nativeQuery=true)
    GameModel updateScore(Integer gameId, Integer gameScore);

}
