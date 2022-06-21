package com.gg_trivia.repository;

import com.gg_trivia.model.GameModel;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface GameRepository extends CrudRepository<GameModel, Integer> {

    @Query(value="UPDATE game_model SET score = gameScore WHERE id = gameId", nativeQuery=true)
    GameModel updateScore(Integer gameId, Integer gameScore);

    public List<GameModel> findAllByOrderByScoreDesc();


}
