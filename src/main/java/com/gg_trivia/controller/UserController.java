package com.gg_trivia.controller;

import com.gg_trivia.model.UserModel;
import com.gg_trivia.repository.UserRepository;
import com.gg_trivia.request.UserRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.ClaimAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@Controller
@RequestMapping(path="/api/users")
public class UserController {
    @Autowired private UserRepository userRepository;

/*    @PostMapping(path="/add") // Map ONLY POST Requests
    public @ResponseBody String addNewUser (@RequestParam String name
            , @RequestParam String email) {
        // @ResponseBody means the returned String is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        User n = new User();
        n.setName(name);
        n.setEmail(email);
        userRepository.save(n);
        return "Saved";
    }*/

    @PostMapping
    public @ResponseBody
    UserModel addNewUser (@RequestBody UserRequest newUser) {
        UserModel n = new UserModel();
        n.setName(newUser.getName());
        n.setEmail(newUser.getEmail());
        UserModel retUser = userRepository.save(n);
        return retUser;
    }

    @GetMapping
    public @ResponseBody Iterable<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    @DeleteMapping(path="")
    public @ResponseBody String deleteUsers () {
        userRepository.deleteAll();
        return "all users successfully deleted";
    }

    @GetMapping(path="/history")
    public @ResponseBody UserModel getUserHistory(@AuthenticationPrincipal ClaimAccessor principal) {
        if (principal != null) {
            UserModel u = userRepository.findBySub(principal.getClaims().get("sub").toString());
            return u;
        }
        else {
            return null;
        }
    }
}
