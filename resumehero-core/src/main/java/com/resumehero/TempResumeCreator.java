package com.resumehero;

import org.apache.commons.io.FileUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import java.io.File;
import java.io.IOException;

@Component
public class TempResumeCreator {

    public String createTempFileAndReturnFileName(Resume resume) throws IOException {
        File resumeFile = new File(resume.getPath());
        String fileName = StringUtils.substringBeforeLast(resume.getOriginalname(), ".");
        String fileExtension = "." + StringUtils.substringAfterLast(resume.getOriginalname(), ".");
        File temp = File.createTempFile(fileName, fileExtension);
        FileUtils.copyFile(resumeFile, temp);
        return temp.getAbsolutePath();
    }
}
