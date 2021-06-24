
<a href="https://github.com/sd8917/Mames-picker/stargazers"><img src="https://img.shields.io/github/stars/sd8917/Mames-picker" alt="Stars Badge"/></a>
<a href="https://github.com/sd8917/Mames-picker/network/members"><img src="https://img.shields.io/github/forks/sd8917/Mames-picker" alt="Forks Badge"/></a>
<a href="https://github.com/sd8917/Mames-picker/pulls"><img src="https://img.shields.io/github/issues-pr/sd8917/Mames-picker" alt="Pull Requests Badge"/></a>
<a href="https://github.com/sd8917/Mames-picker/issues"><img src="https://img.shields.io/github/issues/sd8917/Mames-picker" alt="Issues Badge"/></a>
<a href="https://github.com/sd8917/Mames-picker/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/sd8917/Mames-picker?color=2b9348"></a>
<a href="https://github.com/sd8917/Mames-picker/master/LICENSE"><img src="https://img.shields.io/github/license/sd8917/Mames-picker?color=2b9348" alt="License Badge"/></a>



# Mames-picker [🚀](#game-mode-)
> It's a simple mames website which has a lot Of mames you can pick it for your Use.It open for open source lover You can create issue and add feature into the project
> and start your contribution in the project 🖋.

### 👨🏽‍💻 Tools used & Programming :
  - [API](#categories)
      - [https://api.imgflip.com/get_memes](#github-actions-)
  - [JavaScript](#tools)
  - [Html](#articles)
  - [CSS](#tutorials)
  - [AJAX](#contribute)
  - [License](#license)

### 🗒 Some Important Code :
> Basic AJAX request to the API 
```
var main_tag = document.getElementById("main");
var http = new XMLHttpRequest();
http.open("GET", "https://api.imgflip.com/get_memes", true);
http.send();
```

> Creation of DOM 

```
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
```


# 🎯 Some ScreenShort Of Website

![Image1](https://user-images.githubusercontent.com/34008023/123204919-daa98a80-d46d-11eb-9328-0e3cdd454c69.png)

![Image2](https://user-images.githubusercontent.com/34008023/123204934-e006d500-d46d-11eb-8a12-b279540d2757.png)

### 👨🏽‍📜💻 Contribution Guide Line :
  - [Fork](#categories)
  - [Set up Local system](#tools)
  - [Make change,Add Feature, issue Etc. ](#articles)
  - [Create issue](#tutorials)
  - [Push change into new branch](#contribute)
 - [Help To start in contribution](#categories)
      - [https://www.dataschool.io/how-to-contribute-on-github/](#github-actions-)



# 🙇 Social Profile Link:

<a href="https://www.linkedin.com/in/sudhanshu-kumar-736553166/"> ![alt text](https://img.shields.io/badge/-LinkedIn-0e76a8?style=plastic&logo=linkedIn)</a>
<a href="https://www.instagram.com/sudhanshuraj89/">![alt text](https://img.shields.io/badge/-Twitter-1DA1F2?style=plastic&logo=Twitter) </a>
<a href="https://twitter.com/sudhans98221386">![alt text](https://img.shields.io/badge/-Instagram-833AB4?style=plastic&logo=Instagram)</a>
                                                               


<i>Loved the project? Please consider (Start it) to help it improve!</i>
