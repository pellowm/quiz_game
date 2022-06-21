package com.gg_trivia.request;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class QuestionRequest {

    private Integer id;

    private String question;

    private String answer;

    private Map<String, String> mult;

    private List<Integer> categories;

    public Integer getQuestionId() {
        return id;
    }

    public void setQuestionId(Integer id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Map<String, String> getMult() {
        return mult;
    }

    public List<Integer> getCategories() {
        return categories;
    }

    public void setCategories(List<Integer> categories) {
        this.categories = categories;
    }

}

