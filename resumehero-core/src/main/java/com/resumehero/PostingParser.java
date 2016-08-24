package com.resumehero;

import com.google.common.collect.ImmutableMap;
import com.google.common.collect.Lists;
import org.apache.http.client.utils.URIBuilder;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Component;

import javax.xml.xpath.XPathExpressionException;
import java.net.URISyntaxException;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Component
public class PostingParser {

    private Pattern emailPattern = Pattern.compile("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)\\])");
    private List<String> allJobtypes = Lists.newArrayList("Full-time", "Permanent", "Contract", "Internship", "Part-time", "Temporary");
    private Map<String, String> applyParams = ImmutableMap.<String, String>builder()
            .put("jobUrl", "data-indeed-apply-joburl")
            .put("postUrl", "data-indeed-apply-posturl")
            .put("questions", "data-indeed-apply-questions")
            .put("phone", "data-indeed-apply-phone")
            .put("coverletter", "data-indeed-apply-coverletter")
            .put("jobId", "data-indeed-apply-jobid")
            .put("jk", "data-indeed-apply-jk")
            .put("jobTitle", "data-indeed-apply-jobtitle")
            .put("jobCompany", "data-indeed-apply-jobcompanyname")
            .put("jobLocation", "data-indeed-apply-joblocation")
            .put("jobMeta", "data-indeed-apply-jobmeta")
            .put("apiToken", "data-indeed-apply-apitoken")
            .put("advNum", "data-indeed-apply-advnum")
            .put("pingbackUrl", "data-indeed-apply-pingbackurl")
            .put("applyEmail", "data-indeed-apply-email")
            .put("onapplied", "data-indeed-apply-onapplied")
            .put("onclick", "data-indeed-apply-onclick")
            .put("resume", "data-indeed-apply-resume")
//            .put("postFormat", "")
//            .put("aid", "")
//            .put("hl", "")
//            .put("co", "")
//            .put("mob", "")
//            .put("preload", "")
//            .put("spn", "")
//            .put("ms", "")
//            .put("referer", "")
//            .put("href", "")
            .build();
    private Map<String, String> missingApplyParamValues = ImmutableMap.<String, String>builder()
            .put("phone", "optional")
            .build();

    public Set<String> parseEmails(Document doc) throws XPathExpressionException {
        Set<String> emails = new LinkedHashSet<>();
        String bodyHtml = doc.getElementById("job_summary").html();
        Matcher matcher = emailPattern.matcher(bodyHtml);
        while (matcher.find()) {
            emails.add(matcher.group());
        }
        return emails;
    }

    // todo: more robust checking of job type using XPath
    public Set<String> parseJobtypes(Document doc) {
        Set<String> jobtypes = new LinkedHashSet<>();
        String headerHtml = doc.getElementById("job_header").html();
        for (String jobtype : allJobtypes) {
            if (headerHtml.contains(jobtype)) {
                jobtypes.add(jobtype);
            }
        }
        if (jobtypes.isEmpty()) {
            jobtypes.add("Full-time");
        }
        return jobtypes;
    }

    public String parseApplyUrl(Document doc) throws URISyntaxException {
        Elements element = doc.getElementsByClass("indeed-apply-widget");
        URIBuilder uriBuilder = new URIBuilder("https://apply.indeed.com/indeedapply/resumeapply");
        for (String param : applyParams.keySet()) {
            if (missingApplyParamValues.get(param) == null) {
                uriBuilder.addParameter(param, element.attr(applyParams.get(param)));
            } else {
                uriBuilder.addParameter(param, missingApplyParamValues.get(param));
            }
        }
        return uriBuilder.build().toASCIIString();
    }
}
