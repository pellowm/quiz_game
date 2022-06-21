package com.gg_trivia.model;

import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Entity
public class QuestionModel {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String question;

    @ElementCollection
    @CollectionTable(name = "question_answer_mapping",
            joinColumns = {@JoinColumn(name = "question_id", referencedColumnName = "id")})
    @MapKeyColumn(name = "letter")
    @Column(name = "text")
    private Map<String, String> mult;  // this will create a join table

    @ManyToMany
    List<CategoryModel> categories = new ArrayList<CategoryModel>();

    @ManyToMany(mappedBy="questions")
    Set<GameModel> games;

    public void addCategory(CategoryModel c) {
        categories.add(c);
    }

    // holds letter of correct choice in the array
    private String answer;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Map<String, String> getmult() {
        return mult;
    }

    public void setMult(Map<String, String> mult) {

        //set one question at a time for now. may change to multiple/loop later
        this.mult = mult;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public List<CategoryModel> getCategories() {
        return categories;
    }

    public void setCategories(List<CategoryModel> qc) {
        this.categories = categories;

    }
}
