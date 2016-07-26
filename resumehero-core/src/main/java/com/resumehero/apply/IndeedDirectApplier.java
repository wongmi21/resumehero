package com.resumehero.apply;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class IndeedDirectApplier {

    @Autowired
    private WebDriver webDriver;

    public void apply(String applyUrl, Apply apply) {
        webDriver.get(applyUrl);
        fillDetails(apply);
        fillQuestions();
        List<WebElement> continueButtons = webDriver.findElements(By.xpath("//a[@class='button_content form-page-next']"));
        for (WebElement continueButton : continueButtons) {
            continueButton.click();
        }
        webDriver.findElement(By.id("apply")).click();
    }

    private void fillDetails(Apply apply) {
        webDriver.findElement(By.id("applicant.name")).sendKeys(apply.getName());
        webDriver.findElement(By.id("applicant.email")).sendKeys(apply.getEmail());
        webDriver.findElement(By.id("applicant.phoneNumber")).sendKeys(apply.getPhonenumber());
        webDriver.findElement(By.id("resume")).sendKeys(apply.getResume());
        webDriver.findElement(By.id("applicant.applicationMessage")).sendKeys(apply.getMessage());
    }

    private void fillQuestions() {
        List<WebElement> yesButtons = webDriver.findElements(By.xpath("//input[2][@type='radio']"));
        for (WebElement yesButton : yesButtons) {
            clickHiddenElement(yesButton);
        }
    }

    private void clickHiddenElement(WebElement element) {
        ((JavascriptExecutor) webDriver).executeScript("arguments[0].click();", element);
    }
}
