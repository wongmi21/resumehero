package com.resumehero;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.htmlunit.HtmlUnitDriver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ApplyService {

    @Autowired
    private JobApplicationRepository jobApplicationRepository;
    @Autowired
    private JobRepository jobRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PostingParser postingParser;
    @Autowired
    private IndeedDirectApplier applier;
    @Autowired
    private TempResumeCreator tempResumeCreator;

    public JobApplication apply(String key) {
        WebDriver driver = new ChromeDriver();
        JobApplication app = jobApplicationRepository.findByKey(key);
        try {
            Job job = jobRepository.findOne(app.getJobKey());
            Document doc = Jsoup.connect(job.getUrl()).get();
            String applyUrl = postingParser.parseApplyUrl(doc);
            User user = userRepository.findByUsername(app.getUsername());
            String tempResumePath = tempResumeCreator.createTempFileAndReturnFileName(user.getResume());
            applier.apply(driver, applyUrl, user, tempResumePath);
            app.setStatus("applied");
            jobApplicationRepository.save(app);
        } catch (Exception e) {
            jobApplicationRepository.delete(app);
        } finally {
            driver.close();
            driver.quit();
        }
        return app;
    }
}
