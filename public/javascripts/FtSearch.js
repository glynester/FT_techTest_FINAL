"use strict";

  function FT_search(){
    this.DEFAULT_SEARCH_VALUE = "";
    this.DEFAULT_ERROR_VALUE = "";
    this.searchValue = this.DEFAULT_SEARCH_VALUE;
    this.errorValue = this.DEFAULT_ERROR_VALUE;
  }

  FT_search.prototype.reset = function() {
    this.searchValue = this.DEFAULT_SEARCH_VALUE;
  };

  FT_search.prototype.value = function(){
    return this.searchValue;
  }

  FT_search.prototype.do_search = function(val){
    return $.ajax({
        type: "POST",
        data :JSON.stringify(val),
        url: "http://api.ft.com/content/search/v1?apiKey=kytagpt7m7c7n85jq7stp7rk",
        contentType: "application/json"
    })
}

FT_search.prototype.error_check = function(p){
  p.then(function(value) {
  }, function(reason) {
    this.errorValue = "The download failed: " + reason.statusText;
    alert(this.errorValue);           // Will remove when the display field is working!
  });
}

FT_search.prototype.read_error_value = function(){
  return this.errorValue;             // Not reporting the error. Overwritten by default value???
}


// module.exports = FT_search;
