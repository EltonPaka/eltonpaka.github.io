var url = 'https://app.auth.eu-west-1.amazoncognito.com/login'; 
var params = "redirect_uri=https://www.google.com&response_type=token&client_id=6a5t8g79dfo5tffpjcjmsuvj1k"

function load(url, callback) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      callback(xhr.response);
    }
  }

  xhr.open('GET', url+'?'+params);
  xhr.send('');
}