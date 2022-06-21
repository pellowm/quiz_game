package com.gg_trivia;

import com.gg_trivia.controller.LogoutController;
import com.gg_trivia.controller.UserNameFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserNameFilter userNameFilter;

    private final LogoutController logoutController;

    public SecurityConfig(LogoutController logoutController) {
        this.logoutController = logoutController;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
		http.cors().and().authorizeRequests()
				//.antMatchers("/**").permitAll()
                //.antMatchers("/**/*").permitAll()
                .antMatchers("/welcome.html").permitAll()
                .anyRequest().authenticated()
				.and().oauth2Login() //production
                //.and().oauth2ResourceServer().jwt(); //development
                .and().logout()
                .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                .addLogoutHandler(logoutController);

        http.addFilterAfter(
                userNameFilter, BasicAuthenticationFilter.class);
    }
}


