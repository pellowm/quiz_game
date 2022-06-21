package com.gg_trivia;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserFilter userFilter;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
		http.cors().and().authorizeRequests()
				//.antMatchers("/**").permitAll()
                //.antMatchers("/**/*").permitAll()
                .antMatchers("/welcome.html").permitAll()

                .anyRequest().authenticated()
				.and().oauth2Login(); //production
                //.and().oauth2ResourceServer().jwt(); //development

        http.addFilterAfter(
                userFilter, BasicAuthenticationFilter.class);
    }
}


