/*
  Grocery list module, wrapped in an IIFE passing in jquery in case $ is for some reason overwritten in a larger application, the $ is redefined as jquery for this module.
  This module uses the revealing modular pattern, creating a variable that is a function that contains variables and functions that
  make an ajax request to our api/groceries endpoint to retrieve the data needed.
  Then we use template strings to create a jquery template and loop over the data retrieved by our ajax call and
  create a variable that holds the html, then append it to the proper section of the page.
 */
(function($) {
  var Groceries = function() {

    /**
     * [getGroceries ajax call to get grocery data and pass data to appendHTML function]
     */
    function getGroceries() {
      $.ajax( {
        type: 'GET',
        url: '/api/groceries'
      }).then(function(resp) {
        appendHTML(resp);
      });
    }

    /**
     * [appendHTML creates an html block using template strings by looping
     * over the data retrieved by our ajax call, then appends that html to the page.]
     */
    function appendHTML(data) {
      console.log(data);
      var html = ``;
      html += `
          <div class="container">
            <h1 aria-label="Grocery List">Grocery List</h1>
            <ul class="row">
      `;

      for(var i = 0; i < data.length; i++) {
        html += `
          <li class="grid-25">
           <div class="product-wrapper grid-100 hover-shadow">
            <p class="product-qty" title="${data[i].qty}" data-quantity="${data[i].qty}">
            qty: ${data[i].qty}
            </p>
            <p class="product-item" data-item="${data[i].item}" title="${data[i].item}">
            ${data[i].item}
            </p>
            <hr>
            <p class="product-brand" title="${data[i].brand} ${data[i].type}" data-brand="${data[i].brand}" data-type="${data[i].type}">
              ${data[i].brand} ${data[i].type}
            </p>
            <p class="product-category" title="${data[i].category}" aria-label="${data[i].category}">
              ${data[i].category}
            </p>
           </div>
          </li>
        `;
      }
      html += `
            </ul>
          </div>
      `;
      $('#grocery-list-section').append(html);
    }

    /**
     * [init holds any and all functions that need to be called when this module is initialized]
     */
    function init() {
      getGroceries();
    }

    /**
     * assign init to init, so that it can be called outside of this module as Groceries.init();
     */
    return {
      init: init
    }

  }();
  Groceries.init(); // call the initalize function the Groceries module.
})(jQuery); // read in jQuery in case $ is redefined to something else in another scrip within our site.
