package com.resumehero;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "scraper")
public class Processes {

    @Autowired
    private ListingScraper listingScraper;

    @Scheduled(cron = "0 0 * * * *")
//    @Scheduled(fixedRate = 3600000)
    public void indeed() throws Exception {
        listingScraper.invoke();
    }
}
