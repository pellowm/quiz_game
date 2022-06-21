package com.gg_trivia;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Date;
import com.fasterxml.jackson.annotation.*;

//prevents circular references (causes infinite recursion)
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity // tells Hibernate to make a table out of this class
public class GameModel {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private Date date;

    private String guesses;

    private int score = 0;

    boolean inProgress;

    @ManyToOne
    @JoinColumn(name="userId", nullable=false)
    @JsonIdentityReference(alwaysAsId = true)
    private UserModel user; //should this be id (integer)?

    @ManyToMany
    private List<CategoryModel> categories = new ArrayList<CategoryModel>();

    @ManyToMany
    public List<QuestionModel> questions;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getDate() {
        return date;
    }

    public void setDate() {
        this.date = new Date();
    }

    public String getGuesses() {
        return guesses;
    }

    public void setGuesses(String guesses) {
        this.guesses = guesses;
    }

    public int getScore() {
        return score;
    }

    public void setScore(Integer correctCount, Integer totalQuestions) {
        this.score = 100 * correctCount / totalQuestions;
    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public List<CategoryModel> getCategories(){
        return this.categories;
    }

    public void setCategories(CategoryModel c) {
        categories.add(c);
    }

    public void addQuestion(QuestionModel q) {
        questions.add(q);
    }

    public List<QuestionModel> getQuestions(){
        return this.questions;
    }

    public void setQuestions(List<QuestionModel> questions) {
        this.questions = questions;
    }

    public boolean getInProgress() {
        return inProgress;
    }

    public void setInProgress(boolean inProgress) {
        this.inProgress = inProgress;
    }
}
