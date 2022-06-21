package com.gg_trivia.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@CrossOrigin(origins = "*")
public class HomeController {

    // all react router pages need to be forwarded to index
    @RequestMapping(value={"/history", "leaderboard"})
    public String HomePage() {
        return "forward:/index.html";
    }
}

