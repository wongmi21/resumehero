package com.resumehero.indeed.listing;

import com.resumehero.indeed.IndeedJob;
import org.apache.commons.lang3.StringUtils;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class IndeedListingParser {

    public int totalResults(Document doc) {
        return Integer.parseInt(StringUtils.remove(StringUtils.substringAfter(doc.getElementById("searchCount").html(), "of "), ','));
    }

    public List<IndeedJob> listings(Document doc) {
        List<IndeedJob> listings = new ArrayList<>();

        Elements results = doc.getElementsByClass("result");
        for (Element result : results) {
            String key = result.attr("data-jk");
            String title = result.getElementsByClass("jobtitle").text();
            String company = result.getElementsByClass("company").text();
            String location = result.getElementsByClass("location").text();
            String snippet = result.getElementsByClass("summary").text();
            boolean indeedApply = StringUtils.containsIgnoreCase(result.getElementsByClass("iaLabel").text(), "apply");
            listings.add(new IndeedJob(key, title, company, location, snippet, indeedApply, null, null));
        }

        return listings;
    }
}