var img = new Array ("https://github.com/ACCSoftwareBootcamp/Students2018/blob/master/04-JavaScript/Projects/Project5/img/2.jpg?raw=true", "https://github.com/ACCSoftwareBootcamp/Students2018/blob/master/04-JavaScript/Projects/Project5/img/3.jpg?raw=true", "https://github.com/ACCSoftwareBootcamp/Students2018/blob/master/04-JavaScript/Projects/Project5/img/4.jpg?raw=true", "https://github.com/ACCSoftwareBootcamp/Students2018/blob/master/04-JavaScript/Projects/Project5/img/5.jpg?raw=true", "https://github.com/ACCSoftwareBootcamp/Students2018/blob/master/04-JavaScript/Projects/Project5/img/6.jpg?raw=true");

  var imgElement = document.getElementById("imgDemo");
  var i = 0;
  var imgLen = img.length;

          function onclick.nxt(){
              for(i = 0; i < imgLen-1; i++) {
                  imgElement.src = img[i];
          }
        }
          function prvs(){
              for(i > 0; i = imgLen-1;i--){
                  imgElement.src = img[i];
          }
        }
