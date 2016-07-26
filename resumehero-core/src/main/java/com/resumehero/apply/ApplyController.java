package com.resumehero.apply;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplyController {

    @Autowired
    private ApplyService applyService;

    @RequestMapping("/apply")
    public Apply apply(@RequestParam(value = "submit_id") long submitId) {
        return applyService.apply(submitId);
    }
}
