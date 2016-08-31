package com.resumehero;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApplyController {

    @Autowired
    private ApplyService applyService;

    @CrossOrigin(origins = "http://192.168.1.4:3000")
    @RequestMapping("/apply")
    public JobApplication apply(@RequestParam(value = "key") String key) {
         return applyService.apply(key);
    }
}
