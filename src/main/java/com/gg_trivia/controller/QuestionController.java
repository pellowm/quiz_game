package com.gg_trivia.controller;

import com.gg_trivia.model.CategoryModel;
import com.gg_trivia.model.QuestionModel;
import com.gg_trivia.repository.CategoryRepository;
import com.gg_trivia.repository.QuestionRepository;
import com.gg_trivia.request.QuestionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
@RequestMapping(path="/api/questions")
public class QuestionController {
    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping
    public @ResponseBody
    QuestionModel addNewQuestion (@RequestBody QuestionRequest newQuestion) {

        QuestionModel n = new QuestionModel();
        n.setQuestion(newQuestion.getQuestion());
        n.setMult(newQuestion.getMult());
        n.setAnswer(newQuestion.getAnswer());

        for (Integer id : newQuestion.getCategories()) {
            CategoryModel c = categoryRepository.findById(id).orElseThrow(() -> new RuntimeException("Can't find category"));
            n.addCategory(c);
        }

        QuestionModel retQ = questionRepository.save(n);
        return retQ;
    }

    @GetMapping
    public @ResponseBody Iterable<QuestionModel> getAllQuestions() {
        return questionRepository.findAll();
    }

    @DeleteMapping(path="/{id}")
    public @ResponseBody String deleteQuestion (@PathVariable("id") Integer id) {
        questionRepository.deleteById(id);
        return "question successfully deleted";
    }

    @DeleteMapping(path="")
    public @ResponseBody String deleteQuestions () {
        questionRepository.deleteAll();
        return "all questions successfully deleted";
    }

}
