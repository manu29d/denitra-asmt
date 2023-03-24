var puppeteer = require('puppeteer');

module.exports = async function(stores, keyword) {
  const results = {};

  // Launch the puppeteer browser
  const browser = await puppeteer.launch();

  for (let store in stores) {
    const config = stores[store];
    const storeName = config.globalAccessKey;

    // Init the `results` Object with the `storeName`
    results[[storeName]] = [];

    // Build `searchUrl` from `config` and `keyword`
    let searchUrl = config.baseUrl + keyword;

    // Open a new tab page
    const page = await browser.newPage();

    // Make a request to the `searchUrl`
    // Wait for the page to load and all network requests to complete
    await page.goto(searchUrl, { waitUntil: 'networkidle2' });

    // Define local variables specific to this store's config
    let { searchResults, itemName, itemPrice, itemImage } = config.domSelectors;

    // Interact with page DOM
    // Get all search Result components
    const allResults = await page.$$(searchResults);

    // Loop through each results and parse the required data
    for (let result of allResults) {
      // Get interesting elements
      // DOMSelector reference from config
      const nameEl = await result.$(itemName);
      const imageEl = await result.$(itemImage);
      const priceEl = await result.$(itemPrice);

      // Evaluate the page in the context of the interesting elements
      const item = await page.evaluate((nameEl, priceEl, imageEl) => {

        // Create the response item
        return {
          name: nameEl.innerText,
          image: imageEl.src,
          price: priceEl.innerText
        }
      }, nameEl, priceEl, imageEl)

      // Push the response item to final results
      results[[storeName]].push(item);
    }

    // Close the page once we're done
    await page.close();
  }

  // Close the browser once we're done
  await browser.close();

  // Return the resuts
  return results;
}
