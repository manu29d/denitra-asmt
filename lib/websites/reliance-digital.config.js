// This is based on looking at the web inspector
// for the search results page.
// Subject to change
// date: Mar 23, 2023
module.exports = {
  // Key to be used when returning results
  // This name becomes the property of the result Object
  // So make sure this is a String in a format
  // that is acceptable as a property to JS Objects
  globalAccessKey: 'reliance_digital',

  // Base search url
  // this is the page that will be loaded and then scraped
  // Keyword will simply be attached to `baseUrl + keyword`
  baseUrl: 'https://www.reliancedigital.in/search?q=',

  // DOM references to various elements
  // `searchResults` will be taken from querySelectorAll
  // rest of the elements will be serached 1-by-1 from the children
  // of each of the search result
  domSelectors: {
    // This should return a NodeList that has elements
    // with the other 3 as children for each Node on the NodeList
    searchResults: 'div.search__results div.sp__product',

    // This should contain the name of the item
    // `result.querySelector(itemName).innerText`
    itemName: 'p.sp__name',

    // This should contain the price of the item
    // `result.querySelector(itemPrice).innerText`
    itemPrice: 'div.slider-text div[class^=Grid__StyledGrid s] > div[class^=Grid__StyledGrid s] > div[class^=TextWeb__Text s] > span:first-child > span:last-child',

    // This should contain the image of the item
    // `result.querySelector(itemImage).src`
    itemImage: 'div.sp__productbox img'
  }
}
