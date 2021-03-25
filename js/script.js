

// function msgMe() {
//     var a = document.myForm.name.value;
//     if (a.length <= 2) {
//         document.getElementById("noticeName").innerHTML = "*Name invalid";
//         return false;
//     }else{
//         document.getElementById("noticeName").innerHTML = " ";
//         // return false;
//     }

//     var b = document.myForm.email.value;
//     if ((b.charAt(b.length - 4) != ".") && (b.charAt(b.length - 3) != ".")) {
//         document.getElementById("noticeEmail").innerHTML = "*Email invalid";
//         return false;
//     }else{
//         document.getElementById("noticeEmail").innerHTML = " ";
//         // return false;
//     }


// }


function funcSearchOn() {
    var searchbtnOn = document.getElementById("SearchOn");
    searchbtnOn.style.display = "none";

    var searchbtnOff = document.getElementById("SearchOff");
    searchbtnOff.style.display = "inline-block";
    var searchBox = document.getElementById("search");
    searchBox.style.display = "block";
    var li1 = document.getElementsByTagName("li")[0];
    li1.style.display = "none";
    var li2 = document.getElementsByTagName("li")[1];
    li2.style.display = "none";
    var li3 = document.getElementsByTagName("li")[2];
    li3.style.display = "none";
    var li4 = document.getElementsByTagName("li")[3];
    li4.style.display = "none";
    var li5 = document.getElementsByTagName("li")[4];
    li5.style.display = "none";
    var li6 = document.getElementsByTagName("li")[5];
    li6.style.display = "none";
    var searchbtn = document.getElementById("Searchbtn");
    searchbtn.style.display = "inline-block";

}


function funcSearchOff() {
    var searchbtnOff = document.getElementById("SearchOff");
    searchbtnOff.style.display = "none";

    var searchbtnOn = document.getElementById("SearchOn");
    searchbtnOn.style.display = "inline-block";
    var searchBox = document.getElementById("search");
    searchBox.style.display = "none";
    var li1 = document.getElementsByTagName("li")[0];
    li1.style.display = "inline-block";
    var li2 = document.getElementsByTagName("li")[1];
    li2.style.display = "inline-block";
    var li3 = document.getElementsByTagName("li")[2];
    li3.style.display = "inline-block";
    var li4 = document.getElementsByTagName("li")[3];
    li4.style.display = "inline-block";
    var li5 = document.getElementsByTagName("li")[4];
    li5.style.display = "inline-block";
    var li6 = document.getElementsByTagName("li")[5];
    li6.style.display = "inline-block";
    var searchbtn = document.getElementById("Searchbtn");
    searchbtn.style.display = "none";
}



function funcMenuOn() {
    var onMenuBar = document.getElementsByClassName("Onmenu")[0];
    var offMenuBar = document.getElementsByClassName("Offmenu")[0];
    onMenuBar.style.display = "none";
    offMenuBar.style.display = "block";
    var menuShow = document.getElementsByClassName("barMenu")[0];
    menuShow.style.display = "block"
    var topMenuWrapper = document.getElementsByClassName("topMenuWrapper")[0];
    topMenuWrapper.style.backgroundColor = "#828282f7"
}
function funcMenuOff() {
    var onMenuBar = document.getElementsByClassName("Onmenu")[0];
    var offMenuBar = document.getElementsByClassName("Offmenu")[0];
    onMenuBar.style.display = "block";
    offMenuBar.style.display = "none";
    var menuHide = document.getElementsByClassName("barMenu")[0];
    menuHide.style.display = "none"
    var topMenuWrapper = document.getElementsByClassName("topMenuWrapper")[0];
    topMenuWrapper.style.backgroundColor = "transparent"
}



window.addEventListener("scroll", function () {
    let topMenuWrapper = document.getElementsByClassName('topMenuWrapper')[0];


    if (window.pageYOffset > 0) {
        topMenuWrapper.classList.add("change_topMenuWrapper");

    } else {
        topMenuWrapper.classList.remove("change_topMenuWrapper");
    }
});
