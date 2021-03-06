package com.gg_trivia.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import com.fasterxml.jackson.annotation.*;

// prevents circular references in JSON
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class,
        property = "id")
@Entity
public class UserModel {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Integer id;

    private String sub;

    private String name;

    private String email;

    @OneToMany(mappedBy="user")
    private List<GameModel> games = new ArrayList<GameModel>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSub() {
        return sub;
    }

    public void setSub(String sub) {
        this.sub = sub;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<GameModel> getGames(){
        return this.games;
    }

    public void setGames(List<GameModel> games) {
        this.games = games;
    }
}
