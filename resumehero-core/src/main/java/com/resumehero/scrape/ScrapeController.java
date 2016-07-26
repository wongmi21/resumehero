package com.resumehero.scrape;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScrapeController {

    @Autowired
    private ScrapeService scrapeService;

    @RequestMapping("/scrape")
    public Scrape scrape(@RequestParam(value = "submit_id") long submitId) {
        return scrapeService.scrape(submitId);
    }
}
