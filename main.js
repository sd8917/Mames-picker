console.log("script loaded");

var main_tag = document.getElementById("main");
var http = new XMLHttpRequest();
http.open("GET", "https://api.imgflip.com/get_memes", true);

http.onreadystatechange = function () {

  if (this.readyState === 4) {
    var response = JSON.parse(this.responseText)
    console.log(response);

    if (response["data"]["memes"].length > 0) {

      for (var i = 0; i < response["data"]["memes"].length; i++) {
        console.log(i);
        var title_mem = document.createElement("h3");
        title_mem.innerText = response["data"]["memes"][i].name;

        var image_tag_mem = document.createElement("img");
        image_tag_mem.src = response["data"]["memes"][i].url;
        main_tag.appendChild(title_mem);
        main_tag.appendChild(image_tag_mem);

      }


    }


  }

}


http.send();
