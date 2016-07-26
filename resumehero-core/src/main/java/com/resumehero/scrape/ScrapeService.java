package com.resumehero.scrape;

import com.resumehero.submit.Submit;
import com.resumehero.submit.SubmitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScrapeService {

    @Autowired
    private SubmitRepository submitRepository;
    @Autowired
    private Scraper scraper;

    public Scrape scrape(long submitId) {
        long startTime = System.currentTimeMillis();
        Submit submit = submitRepository.findOne(submitId);
        Scrape scrape = submit.getScrape();
        scraper.scrape(submit.getJobs());
        scrape.setDuration(System.currentTimeMillis() - startTime);
        submitRepository.save(submit);
        return scrape;
    }


}
