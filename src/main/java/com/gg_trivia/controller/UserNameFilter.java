package com.gg_trivia.controller;

import com.gg_trivia.model.UserModel;
import com.gg_trivia.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.core.ClaimAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.io.IOException;
import java.util.Map;

@Component
public class UserNameFilter extends GenericFilterBean {

    @Autowired
    private UserRepository userRepository;

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain) throws IOException, ServletException {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication != null && ! (authentication instanceof AnonymousAuthenticationToken)) {
            Map<String, Object> claims;
//            if (authentication instanceof OAuth2AuthenticationToken) {
//                OidcUser principal = (OidcUser) authentication.getPrincipal();
//                claims  = principal.getClaims();
//            }
//            else if (authentication instanceof JwtAuthenticationToken) {
//                Jwt principal = (Jwt) authentication.getPrincipal();
//                claims  = principal.getClaims();
//            }
//            else {
//                claims = new HashMap<String, Object>();
//            }

            ClaimAccessor principal = (ClaimAccessor)authentication.getPrincipal();
            claims = principal.getClaims();

            System.out.println("Hello " + claims.get("name"));
            System.out.println("You are a snowflake " + claims.get("sub"));

            // try to find the user in the database by sub
            UserModel u = userRepository.findBySub(claims.get("sub").toString());

            // if user doesn't exist, insert a new row in the database
            if (u == null)
            {
                u = new UserModel();
                u.setSub(claims.get("sub").toString());
                u.setEmail(claims.get("email").toString());
                u.setName(claims.get("nickname").toString());
                userRepository.save(u);
            }

        }
        else {
            System.out.println("Authentication is null");
        }
        chain.doFilter(request, response);
    }
}
