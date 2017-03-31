$(document).ready(function() {
  var ftSearch = new FT_search();
  $('#search_item').text(ftSearch.value());

    $('#search_form').submit(function(event) {
    event.preventDefault();
    var topic = $('#search_item').val();   
    var curations_val = $('#curations').val();
    if (curations_val == ""){
      var search = {queryString: topic,
        "resultContext": {"aspects" :[  "title","lifecycle","location","summary","editorial" ]}};
    } else if (curations_val != ""){
      var search = {queryString: topic,
        "queryContext": {"curations": [curations_val]},
        "resultContext": {"aspects" :[  "title","lifecycle","location","summary","editorial" ]}};
    }

    var promise = ftSearch.do_search(search);
    ftSearch.error_check(promise);
    var err = ftSearch.read_error_value();
    if (err !== ftSearch.DEFAULT_ERROR_VALUE){
      alert(err);
      display_error(err);
    }

    promise.success(function (data) {
      var list =  data.results[0].results;
      document.getElementById('news-items').innerHTML = "";
        list.forEach(x=>{
          var asp_set = x.aspectSet.charAt(0).toUpperCase() + x.aspectSet.slice(1);
          document.getElementById('news-items').innerHTML +=
          "<dt class ='visible'>" +
            "<span class='link' title = 'Click the link to view the full article' ><a target='_blank' href=" + x.location.uri + ">" + x.title.title +
            "</a></span>" +
          "</dt>" +
          "<dd class ='hidden1'>" +
            "<span><strong>" + asp_set + " Editorial: </strong>" + x.editorial.byline + "</span><br>" +
            "<span><strong>Published: </strong>" + x.lifecycle.initialPublishDateTime + "</span>" +
            "<p>" + x.summary.excerpt + "<strong>...</strong></p>" +
          "</dd>"
        })
    });
  })

  $('#reset').click(function() {
    ftSearch.reset();
    $('#search_item').val(ftSearch.value());
  });

  function display_error(error){
    $("#errorText").text(error);
  }


});
