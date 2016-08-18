package com.resumehero;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@ConfigurationProperties(prefix = "indeed-listing-scraper")
public class ListingScraper {

    private static final String INDEED_URL = "http://www.indeed.com.sg/jobs?q=%s&l=%s&jt=%s&start=%d&limit=%d&sort=date";
    private static final int LIMIT = 100;

    private List<Search> searches = new ArrayList<>();

    @Autowired
    private ListingParser parser;
    @Autowired
    private JobRepository jobRepo;

    public void invoke() throws Exception {
        for (Search search : getSearches()) {
            String initialUrl = String.format(INDEED_URL, search.getQuery(), search.getLocation(), search.getJobtype(), 0, LIMIT);
            Document firstPage = Jsoup.connect(initialUrl).get();
            int totalResults = parser.totalResults(firstPage);
            int pages = Math.min(totalResults / LIMIT, (1000 + LIMIT) / LIMIT);
            for (int i = 0; i < pages; i++) {
                Document doc;
                if (i == 0) {
                    doc = firstPage;
                } else {
                    String url = String.format(INDEED_URL, search.getQuery(), search.getLocation(), search.getJobtype(), i * LIMIT, LIMIT);
                    doc = Jsoup.connect(url).get();
                }
                List<Job> listings = parser.listings(doc);
                jobRepo.save(listings);
                System.out.println("query: " + search.getQuery() + ", location: " + search.getLocation() + ", jobtype: " + search.getJobtype() + ", page: " + i + ", results:  " + listings.size());
            }
        }
    }

    public List<Search> getSearches() {
        return searches;
    }
}