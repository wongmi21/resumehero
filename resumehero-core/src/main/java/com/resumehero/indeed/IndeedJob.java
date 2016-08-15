package com.resumehero.indeed;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class IndeedJob {

    @Id
    private String key_;
    private String title;
    private String company;
    private String location;
    private String snippet;
    private boolean indeedApply;

    private String summary;
    private String applyUrl;

    public IndeedJob() {
    }

    public IndeedJob(String key, String title, String company, String location, String snippet, boolean indeedApply, String summary, String applyUrl) {
        this.key_ = key;
        this.title = title;
        this.company = company;
        this.location = location;
        this.snippet = snippet;
        this.indeedApply = indeedApply;
        this.summary = summary;
        this.applyUrl = applyUrl;
    }

    public String getKey() {
        return key_;
    }

    public void setKey(String key) {
        this.key_ = key;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getSnippet() {
        return snippet;
    }

    public void setSnippet(String snippet) {
        this.snippet = snippet;
    }

    public boolean isIndeedApply() {
        return indeedApply;
    }

    public void setIndeedApply(boolean indeedApply) {
        this.indeedApply = indeedApply;
    }

    public String getSummary() {
        return summary;
    }

    public void setSummary(String summary) {
        this.summary = summary;
    }

    public String getApplyUrl() {
        return applyUrl;
    }

    public void setApplyUrl(String applyUrl) {
        this.applyUrl = applyUrl;
    }
}