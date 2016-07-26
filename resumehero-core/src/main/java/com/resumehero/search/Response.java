package com.resumehero.search;

import com.resumehero.job.Job;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlElementWrapper;
import javax.xml.bind.annotation.XmlRootElement;
import java.util.List;

@XmlRootElement
public class Response {

    private String query;
    private String location;
    private Integer totalresults;
    private Integer start;
    private Integer end;
    private Integer pageNumber;
    private List<Job> jobs;

    public String getQuery() {
        return query;
    }

    public void setQuery(String query) {
        this.query = query;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getTotalresults() {
        return totalresults;
    }

    public void setTotalresults(Integer totalresults) {
        this.totalresults = totalresults;
    }

    public Integer getStart() {
        return start;
    }

    public void setStart(Integer start) {
        this.start = start;
    }

    public Integer getEnd() {
        return end;
    }

    public void setEnd(Integer end) {
        this.end = end;
    }

    public Integer getPageNumber() {
        return pageNumber;
    }

    public void setPageNumber(Integer pageNumber) {
        this.pageNumber = pageNumber;
    }

    @XmlElementWrapper
    @XmlElement(name = "result")
    public List<Job> getResults() {
        return jobs;
    }

    public void setResults(List<Job> results) {
        this.jobs = results;
    }
}
