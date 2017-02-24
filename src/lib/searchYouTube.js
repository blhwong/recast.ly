var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      key: options.key,
      maxResults: options.max || 5,
      part: 'snippet',    
      type: 'video',
      videoEmbeddable: true
    },
    contentType: 'application/json',
    success: function (data) {
      console.log('success!');
      callback(data.items);
    },
    error: function () {
      console.log('faileddddd');
    }
  });
  
};

window.searchYouTube = searchYouTube;
