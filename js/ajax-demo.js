
function loadDoc1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("divId").textContent =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true);
    xhttp.send();
  }


  function loadDoc2() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("divId").textContent =
        this.responseText;
      }
    };
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts/2", true);
    xhttp.send();
  }



// $(document).ready(function(){
//     $("button").click(function(){
//         $.ajax({
//             type: 'GET',
//             url: 'https://jsonplaceholder.typicode.com/posts/1',
//             // url: 'https://jsonplaceholder.typicode.com/posts',
//             success: function(response) {
//                 // if your response is in JSON format, you can access response keys 
//             // in the following format (both ways give same result) 
//             var title = response.title; // OR var title = response['userId']);
            
//             // ...and then append to the DOM (your HTML) by selecting the
//             // element you want to append to, and using the append method
//             $('div.append-to-me').append(title);
//             // $('div.append-to-me').append(response);
            
//             },
//             error: function(error) {
//                 console.log('not implemented');
//             }
//         });
//     });
// });

