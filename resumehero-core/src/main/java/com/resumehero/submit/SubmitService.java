package com.resumehero.submit;

import com.resumehero.apply.Apply;
import com.resumehero.scrape.Scrape;
import com.resumehero.search.Search;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubmitService {

    @Autowired
    private SubmitRepository submitRepository;


    public Submit submit(String query, String location, String country, String jobtype, String userip, String useragent, String name, String email, String phonenumber, String resume, String message) {
        Search search = new Search(query, location, country, jobtype, userip, useragent);
        Scrape scrape = new Scrape();
        Apply apply = new Apply(name, email, phonenumber, resume, message);
        Submit submit = new Submit();
        submit.setSearch(search);
        submit.setScrape(scrape);
        submit.setApply(apply);
        submitRepository.save(submit);
        return submit;
    }
}
