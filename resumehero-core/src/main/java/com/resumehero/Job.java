package com.resumehero;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "jobs")
public class Job {

    @Id
    private String key;
    private String title;
    private String url;
    private String company;
    private String location;
    private String snippet;
    private boolean indeedApply;

    private String summary;
    private String applyUrl;

    public Job() {
    }

    public Job(String key, String title, String url, String company, String location, String snippet, boolean indeedApply, String summary, String applyUrl) {
        this.key = key;
        this.title = title;
        this.url = url;
        this.company = company;
        this.location = location;
        this.snippet = snippet;
        this.indeedApply = indeedApply;
        this.summary = summary;
        this.applyUrl = applyUrl;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
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