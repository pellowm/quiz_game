package com.gg_trivia;
import java.util.Set;

import javax.persistence.*;

@Entity // This tells Hibernate to make a table out of this class
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
