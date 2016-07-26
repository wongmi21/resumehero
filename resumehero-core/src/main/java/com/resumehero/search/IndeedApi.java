package com.resumehero.search;

import com.resumehero.job.Job;
import org.springframework.http.converter.xml.Jaxb2RootElementHttpMessageConverter;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Component
public class IndeedApi {

    private static final String PUBLISHER_ID = "6839350670943140";

    private static final String apiUrl = "http://api.indeed.com/ads/apisearch?publisher={publisher}&v=2&q={q}&l={l}&co={co}&jt={jt}&userip={userip}&useragent={useragent}&start={start}&limit=25";

    public List<Job> search(String q, String l, String co, String jt, String userip, String useragent) {
        List<Job> searchResults = new ArrayList<>();
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getMessageConverters().add(new Jaxb2RootElementHttpMessageConverter());
        int totalResults = restTemplate.getForObject(apiUrl, Response.class, PUBLISHER_ID, q, l, co, jt, userip, useragent, 0).getTotalresults();
        // Indeed only allows search up to 1000 results, regardless of total results available
        for (int i = 0; i < Math.min(1000, totalResults); i += 25) {
            Response response = restTemplate.getForObject(apiUrl, Response.class, PUBLISHER_ID, q, l, co, jt, userip, useragent, i);
            searchResults.addAll(response.getResults());
        }
        return searchResults;
    }
}