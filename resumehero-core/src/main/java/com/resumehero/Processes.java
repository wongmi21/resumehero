package com.resumehero;

import com.resumehero.indeed.listing.IndeedListingScraper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "scraper")
public class Processes {

    @Autowired
    private IndeedListingScraper indeedListingScraper;

    @Scheduled(fixedRate = 3600000)
    public void indeed() throws Exception {
        indeedListingScraper.invoke();
    }
}
