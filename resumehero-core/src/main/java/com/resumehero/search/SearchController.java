package com.resumehero.search;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SearchController {

    @Autowired
    private SearchService searchService;

    @RequestMapping("/search")
    public Search search(@RequestParam(value = "submit_id") long submitId) {
        return searchService.search(submitId);
    }
}