package com.gg_trivia.request;

import java.util.Map;

public class CategoryRequest {

    private Integer id;

    private String category;

    public Integer getCategoryId() {
        return id;
    }

    public void setCategoryId(Integer id) {
        this.id = id;
    }

    //TODO need to change below to match above data
    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

}

