package com.resumehero.submit;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SubmitController {

    @Autowired
    private SubmitService submitService;

    @RequestMapping("/submit")
    public Submit submit(@RequestParam(value = "q") String query,
                         @RequestParam(value = "l", defaultValue = "") String location,
                         @RequestParam(value = "co", defaultValue = "sg") String country,
                         @RequestParam(value = "jt", defaultValue = "") String jobtype,
                         @RequestParam(value = "userip", defaultValue = "1.2.3.4") String userip,
                         @RequestParam(value = "useragent", defaultValue = "Mozilla/%2F4.0%28Firefox%29") String useragent,
                         @RequestParam(value = "name", defaultValue = "John Doe") String name,
                         @RequestParam(value = "email", defaultValue = "john.doe@gmail.com") String email,
                         @RequestParam(value = "phonenumber", defaultValue = "+1 2345678901") String phonenumber,
                         @RequestParam(value = "resume", defaultValue = "/Users/michael/Downloads/SampleResume.pdf") String resume,
                         @RequestParam(value = "message", defaultValue = "Please hire me") String message) {
        return submitService.submit(query, location, country, jobtype, userip, useragent, name, email, phonenumber, resume, message);
    }
}
