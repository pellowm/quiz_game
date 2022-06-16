package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@CrossOrigin
@Controller // This means that this class is a Controller
@RequestMapping(path="/api/questions") // This means URL's start with /demo (after Application path)
public class QuestionController {
    @Autowired // This means to get the bean called userRepository
    // Which is auto-generated by Spring, we will use it to handle the data
    private QuestionRepository questionRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping // Map ONLY POST Requests
    public @ResponseBody QuestionModel addNewQuestion (@RequestBody QuestionRequest newQuestion) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

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
        // This returns a JSON or XML with the users
        return questionRepository.findAll();
    }

    @DeleteMapping(path="/{id}")
    //can do multiples here...just separate with comma (i.e. @PathVariable("id"), @RequestParam()) etc
    public @ResponseBody String deleteQuestion (@PathVariable("id") Integer id) {

        // This returns a JSON or XML with the users
        questionRepository.deleteById(id);
        return "question successfully deleted";
    }

    @DeleteMapping(path="")
    //can do multiples here...just separate with comma (i.e. @PathVariable("id"), @RequestParam()) etc
    public @ResponseBody String deleteQuestions () {

        // This returns a JSON or XML with the users
        questionRepository.deleteAll();
        return "all questions successfully deleted";
    }

}
