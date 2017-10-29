package com.epitech.AREA.social;

import com.epitech.AREA.Security.AuthUtil;
import com.epitech.AREA.social.DatabaseSocialConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.social.config.annotation.SocialConfigurer;
import org.springframework.social.connect.web.SignInAdapter;

import javax.sql.DataSource;

@Configuration
public class SocialConfiguration {
    @Bean
    public SocialConfigurer socialConfigurerAdapter(DataSource dataSource) {
        return new DatabaseSocialConfigurer(dataSource);
    }
    @Bean
    public SignInAdapter authSignInAdapter() {
        return (userId, connection, request) -> {
            AuthUtil.authenticate(connection);
            return null;
        };
    }
}