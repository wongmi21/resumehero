package com.resumehero.submit;

import com.resumehero.apply.Apply;
import com.resumehero.job.Job;
import com.resumehero.scrape.Scrape;
import com.resumehero.search.Search;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Submit {

    @Id
    @GeneratedValue
    private Long id;

    @OneToOne(cascade = CascadeType.ALL)
    private Search search;
    @OneToOne(cascade = CascadeType.ALL)
    private Scrape scrape;
    @OneToOne(cascade = CascadeType.ALL)
    private Apply apply;

    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "submit_job", inverseJoinColumns = {@JoinColumn(table = "job", name = "job_jobkey", referencedColumnName = "jobkey")})
    private List<Job> jobs = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Search getSearch() {
        return search;
    }

    public void setSearch(Search search) {
        this.search = search;
    }

    public Scrape getScrape() {
        return scrape;
    }

    public void setScrape(Scrape scrape) {
        this.scrape = scrape;
    }

    public Apply getApply() {
        return apply;
    }

    public void setApply(Apply apply) {
        this.apply = apply;
    }

    public List<Job> getJobs() {
        return jobs;
    }

    public void setJobs(List<Job> jobs) {
        this.jobs = jobs;
    }
}
