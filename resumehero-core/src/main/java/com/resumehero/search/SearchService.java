package com.resumehero.search;

import com.resumehero.job.Job;
import com.resumehero.submit.Submit;
import com.resumehero.submit.SubmitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SearchService {

    @Autowired
    private SubmitRepository submitRepository;
    @Autowired
    private IndeedApi indeedApi;


    public Search search(long submitId) {
        long startTime = System.currentTimeMillis();
        Submit submit = submitRepository.findOne(submitId);
        Search search = submit.getSearch();
        List<Job> jobs = indeedApi.search(search.getQuery(), search.getLocation(), search.getCountry(), search.getJobtype(), search.getUserip(), search.getUseragent());
        submit.getJobs().addAll(jobs);
        search.setTotalResults(jobs.size());
        search.setDuration(System.currentTimeMillis() - startTime);
        submitRepository.save(submit);
        return search;
    }
}