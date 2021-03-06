package com.gg_trivia.model;
import java.util.Set;

import javax.persistence.*;

@Entity
public class CategoryModel {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String category;

    @ManyToMany(mappedBy="categories")
    Set<QuestionModel> questions;

    @ManyToMany(mappedBy="categories")
    Set<GameModel> games;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

}
