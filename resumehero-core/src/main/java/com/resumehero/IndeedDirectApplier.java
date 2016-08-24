package com.resumehero;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class IndeedDirectApplier {

    public void apply(WebDriver driver, String applyUrl, User user, String tempResumePath) {
        driver.get(applyUrl);
        fillDetails(driver, user, tempResumePath);
        fillQuestions(driver);
        List<WebElement> continueButtons = driver.findElements(By.xpath("//a[@class='button_content form-page-next']"));
        for (WebElement continueButton : continueButtons) {
            continueButton.click();
        }
        driver.findElement(By.id("apply")).click();
    }

    private void fillDetails(WebDriver driver, User user, String tempResumePath) {
        driver.findElement(By.id("applicant.name")).sendKeys(user.getName());
        driver.findElement(By.id("applicant.email")).sendKeys(user.getEmail());
        driver.findElement(By.id("applicant.phoneNumber")).sendKeys(user.getPhonenumber());
        driver.findElement(By.id("resume")).sendKeys(tempResumePath);
        driver.findElement(By.id("applicant.applicationMessage")).sendKeys(user.getCoverletter());
    }

    private void fillQuestions(WebDriver driver) {
        List<WebElement> yesButtons = driver.findElements(By.xpath("//input[2][@type='radio']"));
        for (WebElement yesButton : yesButtons) {
            clickHiddenElement(driver, yesButton);
        }
    }

    private void clickHiddenElement(WebDriver driver, WebElement element) {
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
    }
}
