package com.resumehero.indeed.listing;

import com.resumehero.Search;
import com.resumehero.indeed.IndeedJob;
import com.resumehero.indeed.IndeedJobRepository;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@ConfigurationProperties(prefix = "indeed-listing-scraper")
public class IndeedListingScraper {

    private static final String INDEED_URL = "http://www.indeed.com.sg/jobs?q=%s&l=%s&start=%d&limit=100&sort=date";

    private List<Search> searches = new ArrayList<>();

    @Autowired
    private IndeedListingParser parser;
    @Autowired
    private IndeedJobRepository jobRepo;

    public void invoke() throws Exception {
        for (Search search : getSearches()) {
            String initialUrl = String.format(INDEED_URL, search.getQuery(), search.getLocation(), 0);
            Document firstPage = Jsoup.connect(initialUrl).get();
            int totalResults = parser.totalResults(firstPage);
            // Indeed only returns max 1100 results per search

            jobRepo.save(parser.listings(firstPage));
        }
    }

    public List<Search> getSearches() {
        return searches;
    }
}