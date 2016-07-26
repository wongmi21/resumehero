package com.resumehero.job;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Entity
public class Job implements Serializable {

    @Id
    @GeneratedValue
    private Long id;

    // Search
    private String jobkey;
    private String jobtitle;
    private String company;
    private String city;
    private String state;
    private String country;
    private String formattedLocation;
    private String source;
    private String date;
    private String snippet;
    private String url;
    private String indeedApply;
    private String formattedLocationFull;

    // Scrape
    @Lob
    private String html;
    @ElementCollection
    @CollectionTable(name = "job_jobtype")
    @Column(name = "jobtype")
    private Set<String> jobtypes;
    @ElementCollection
    @CollectionTable(name = "job_email")
    @Column(name = "email")
    private Set<String> emails;
    @Lob
    private String applyUrl;

    // Apply
    private boolean applied;
    private String applyType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobkey() {
        return jobkey;
    }

    public void setJobkey(String jobkey) {
        this.jobkey = jobkey;
    }

    public String getJobtitle() {
        return jobtitle;
    }

    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getFormattedLocation() {
        return formattedLocation;
    }

    public void setFormattedLocation(String formattedLocation) {
        this.formattedLocation = formattedLocation;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSnippet() {
        return snippet;
    }

    public void setSnippet(String snippet) {
        this.snippet = snippet;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getIndeedApply() {
        return indeedApply;
    }

    public void setIndeedApply(String indeedApply) {
        this.indeedApply = indeedApply;
    }

    public String getFormattedLocationFull() {
        return formattedLocationFull;
    }

    public void setFormattedLocationFull(String formattedLocationFull) {
        this.formattedLocationFull = formattedLocationFull;
    }

    public String getHtml() {
        return html;
    }

    public void setHtml(String html) {
        this.html = html;
    }

    public Set<String> getJobtypes() {
        return jobtypes;
    }

    public void setJobtypes(Set<String> jobtypes) {
        this.jobtypes = jobtypes;
    }

    public Set<String> getEmails() {
        return emails;
    }

    public void setEmails(Set<String> emails) {
        this.emails = emails;
    }

    public String getApplyUrl() {
        return applyUrl;
    }

    public void setApplyUrl(String applyUrl) {
        this.applyUrl = applyUrl;
    }

    public boolean isApplied() {
        return applied;
    }

    public void setApplied(boolean applied) {
        this.applied = applied;
    }

    public String getApplyType() {
        return applyType;
    }

    public void setApplyType(String applyType) {
        this.applyType = applyType;
    }
}
