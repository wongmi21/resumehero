package com.resumehero.apply;

import com.resumehero.job.Job;
import com.resumehero.submit.Submit;
import com.resumehero.submit.SubmitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ApplyService {

    @Autowired
    private SubmitRepository submitRepository;
    @Autowired
    private IndeedDirectApplier indeedDirectApplier;
    @Autowired
    private IndeedEmailApplier indeedEmailApplier;

    public Apply apply(long submitId) {
        long startTime = System.currentTimeMillis();
        Submit submit = submitRepository.findOne(submitId);
        Apply apply = submit.getApply();
        List<Job> jobs = submit.getJobs();
        for (Job job : jobs) {
            if ("true".equals(job.getIndeedApply())) {
                indeedDirectApplier.apply(job.getApplyUrl(), apply);
            } else {
                indeedEmailApplier.apply(job.getEmails(), apply);
            }
        }
        apply.setDuration(System.currentTimeMillis() - startTime);
        submitRepository.save(submit);
        return apply;
    }
}
