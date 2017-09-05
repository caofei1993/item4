// JavaScript Document

window.onload =function(){
    var box = document.getElementById("box");
    var oA = box.getElementsByTagName("a");
    var tab = document.getElementsByTagName("table");
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var oAl = box1.getElementsByTagName("a");
    var oLi = box2.getElementsByTagName("li");


    oA[0].className ="active";
    tab[0].style.display ="block";
    oLi[1].style.display ="block";
    oAl[1].className ="on";


    for(var i = 0;i < oA.length ;i++){
        oA[i].index = i;
        oA[i].onclick =function(){
            for(var j=0;j<oA.length;j++){
                oA[j].className ="active1";
                tab[j].style.display ="none";
            };
            this.className ="active";
            tab[this.index].style.display="block";
        };

    };




    for(var i = 0;i < oAl.length ;i++){
        oAl[i].index = i;
        oAl[i].onmouseover =function(){
            for(var j=0;j<oAl.length;j++){
                oAl[j].className ="on1";
                oLi[j].style.display ="none";
            };
             this.className ="on";
             oLi[this.index].style.display="block";
        };
        oAl[i].onmouseout =function(){
            this.className ="on";
            for(var j=0;j<oAl.length;j++){
                oLi[j].style.display ="none";
            };
            oLi[this.index].style.display="block";
        }

    }



}



