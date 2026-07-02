import { chromium, firefox, test } from "@playwright/test";

test("Launch Edge and Firefox browsers", async () => {
    // --- Red Bus in Edge ---
    // Launch Edge browser instance (Chromium with Edge channel)
    const edgeBrowser = await chromium.launch({ headless: false, channel: "msedge" });

    // Create a new incognito browser context
    const edgeContext = await edgeBrowser.newContext();

    // Create a new page inside the context
    const edgePage = await edgeContext.newPage();

    // Navigate to Red Bus homepage
    await edgePage.goto("https://www.redbus.in");

    // Retrieve and print page URL and title
    const redbusURL = edgePage.url();
    const redbusTitle = await edgePage.title();

    console.log(`Red Bus (Edge) URL: ${redbusURL}`);
    console.log(`Red Bus (Edge) Title: ${redbusTitle}`);

    // Wait for 2 seconds before closing
    await edgePage.waitForTimeout(2000);

    // Close Edge browser
    await edgeBrowser.close();

    // --- Flipkart in Firefox ---
    // Launch Firefox browser instance
    const firefoxBrowser = await firefox.launch({ headless: false });

    // Create a new incognito browser context
    const firefoxContext = await firefoxBrowser.newContext();

    // Create a new page inside the context
    const firefoxPage = await firefoxContext.newPage();

    // Navigate to Flipkart homepage
    await firefoxPage.goto("https://www.flipkart.com");

    // Retrieve and print page URL and title
    const flipkartURL = firefoxPage.url();
    const flipkartTitle = await firefoxPage.title();

    console.log(`Flipkart (Firefox) URL: ${flipkartURL}`);
    console.log(`Flipkart (Firefox) Title: ${flipkartTitle}`);

    // Wait for 2 seconds before closing
    await firefoxPage.waitForTimeout(2000);

    // Close Firefox browser
    await firefoxBrowser.close();
});
