// This is based on looking at the web inspector
// for the search results page.
// Subject to change
// date: Mar 23, 2023
module.exports = {
  // Key to be used when returning results
  // This name becomes the property of the result Object
  // So make sure this is a String in a format
  // that is acceptable as a property to JS Objects
  globalAccessKey: 'amazon',

  // Base search url
  // this is the page that will be loaded and then scraped
  // Keyword will simply be attached to `baseUrl + keyword`
  baseUrl: 'https://www.amazon.in/s?k=',

  // DOM references to various elements
  // `searchResults` will be taken from querySelectorAll
  // rest of the elements will be serached 1-by-1 from the children
  // of each of the search result
  domSelectors: {
    // This should return a NodeList that has elements
    // with the other 3 as children for each Node on the NodeList
    searchResults: '[data-component-type=s-search-result]',

    // This should contain the name of the item
    // `result.querySelector(itemName).innerText`
    itemName: '.s-title-instructions-style h2 a span',

    // This should contain the price of the item
    // `result.querySelector(itemPrice).innerText`
    itemPrice: 'span.a-price-whole',

    // This should contain the image of the item
    // `result.querySelector(itemImage).src`
    itemImage: '[data-component-type=s-product-image] img'
  }
}
