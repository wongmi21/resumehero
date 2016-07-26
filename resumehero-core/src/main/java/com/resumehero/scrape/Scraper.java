package com.resumehero.scrape;

import com.resumehero.job.Job;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;

@Component
public class Scraper {

    @Autowired
    private Parser parser;

    public void scrape(Collection<Job> jobs) {
        int i = 0;
        for (Job job : jobs) {
            try {
                Document doc = Jsoup.connect(job.getUrl()).get();
                job.setHtml(doc.outerHtml());
                job.setEmails(parser.parseEmails(doc));
                job.setJobtypes(parser.parseJobtypes(doc));
                job.setApplyUrl(parser.parseApplyUrl(doc));
            } catch (Exception e) {
                e.printStackTrace();
            }
            System.out.println(++i + ". " + job.getJobtitle() + " - " + job.getEmails());
        }
    }
}