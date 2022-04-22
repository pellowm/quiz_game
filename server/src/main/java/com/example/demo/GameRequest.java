package com.example.demo;

import java.util.List;
import java.util.Map;
import java.util.Date;

public class GameRequest {

    private Integer id;

    private Date date;

    private Integer score;

    private Integer userId;

    private List<Integer> categories;

    private List<QuestionModel> questions;

    private List<String> guesses;

    public Integer getGameId() {
        return id;
    }

    public void setGameId(Integer id) {
        this.id = id;
    }

    public Integer getGameScore() {
        return score;
    }

    public void setGameScore(Integer score) {
        this.score = score;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public List<Integer> getCategories() {
        return categories;
    }

    public void setCategories(List<Integer> categories) {
        this.categories = categories;
    }

    public List<String> getGuesses() {
        return guesses;
    }

    public List<QuestionModel> getQuestions() {
        return questions;
    }

    public void setQuestions(List<QuestionModel> questions) {
        this.questions = questions;
    }

}