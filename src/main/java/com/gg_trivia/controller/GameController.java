package com.gg_trivia.controller;

import com.gg_trivia.model.CategoryModel;
import com.gg_trivia.model.GameModel;
import com.gg_trivia.model.QuestionModel;
import com.gg_trivia.model.UserModel;
import com.gg_trivia.repository.CategoryRepository;
import com.gg_trivia.repository.GameRepository;
import com.gg_trivia.repository.QuestionRepository;
import com.gg_trivia.repository.UserRepository;
import com.gg_trivia.request.GameRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.ClaimAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.json.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping(path="/api/games")
public class GameController {
    @Autowired
    private GameRepository gameRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public @ResponseBody
    GameModel addNewGame (@AuthenticationPrincipal ClaimAccessor principal, @RequestBody GameRequest gameRequest) {

        GameModel n = new GameModel();
        n.setDate();
        n.setInProgress(true);

        UserModel u = userRepository.findBySub(principal.getClaims().get("sub").toString());
        n.setUser(u);

        // get questions for the selected category
        for (Integer id : gameRequest.getCategories()) {
            CategoryModel c = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Can't find category"));;
            n.setCategories(c);

            //TODO randomize questions and limit to 10
            //TODO support multiple categories
            List<QuestionModel> questionList = questionRepository.filterQuestionsByCategory(id);

            final int QUESTION_LIMIT = 5;

            Random rand = new Random();
            while(questionList.size() > QUESTION_LIMIT) {
                int index = rand.nextInt(questionList.size());
                questionList.remove(index);
            }

            n.setQuestions(questionList);
        }

        GameModel retG = gameRepository.save(n);
        return retG;
    }

    @GetMapping
    public @ResponseBody Iterable<GameModel> getAllGames() {
        return gameRepository.findAllByOrderByScoreDesc();
    }

    @GetMapping(path="/history")
    public @ResponseBody Iterable<GameModel> getLeaderboard() {
        return gameRepository.findAllByOrderByScoreDesc();
    }

    @PatchMapping(path="/{id}")
    public @ResponseBody GameModel saveGame (@RequestBody GameRequest gameRequest, @PathVariable("id") Integer id) {

        GameModel n = gameRepository.findById(id).orElseThrow(() -> new RuntimeException("Can't find game"));
        List<QuestionModel> questions = n.getQuestions();

        // Calculate the game score by comparing guesses to database
        Integer score = 0;
        List<String> guesses = gameRequest.getGuesses();
        Integer totalQuestions = guesses.size();
        for (Integer i = 0; i < totalQuestions; i++)
        {
            if (guesses.get(i).equals(questions.get(i).getAnswer()))
            {
                score++;
            }
        }

        // save a record of guesses to the database
        JSONArray jsArray = new JSONArray(guesses);
        n.setGuesses(jsArray.toString());
        n.setScore(score, totalQuestions);
        n.setInProgress(false);
        GameModel retG = gameRepository.save(n);

        return retG;
    }

    @DeleteMapping(path="")
    public @ResponseBody String deleteGames () {
        gameRepository.deleteAll();
        return "all games successfully deleted";
    }

}
