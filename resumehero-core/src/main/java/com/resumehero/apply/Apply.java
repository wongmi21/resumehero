package com.resumehero.apply;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Apply {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private String email;
    private String phonenumber;
    private String resume;
    private String message;

    // Stats
    private Long duration;

    public Apply() {
    }

    public Apply(String name, String email, String phonenumber, String resume, String message) {
        this.name = name;
        this.email = email;
        this.phonenumber = phonenumber;
        this.resume = resume;
        this.message = message;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Long getDuration() {
        return duration;
    }

    public void setDuration(Long duration) {
        this.duration = duration;
    }
}
