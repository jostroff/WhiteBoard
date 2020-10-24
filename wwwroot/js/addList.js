
window.onload = function()
{
    var toAppend = document.getElementById("alreadyExist");
    var xhttp;
    var stuffToGet;
    function requestList(){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                stuffToGet = this.responseText;
            }
        };
        xhttp.open("GET", "https://localhost:5001/canvas/alltitle/", true);
        xhttp.send();
    }

    var unorderedList = document.createElement("ul");


    function addList(strList){
        var arr = strList.split("+");
        // console.log("OVER HEREEEE: " + arr);
        var i;
        for (i = 0; i < arr.length - 1; i++){
            var listElems = document.createElement("li");

            listElems.innerHTML = arr[i];
            // listElems.id = arr[i];
            // listElems.addEventListener("click",function(e) {
            //     console.log(listElems.innerHTML);
            //     submitCreate(arr[i]);
            // });
            unorderedList.appendChild(listElems);

            // var butt = document.createElement("BUTTON");
            // butt.innerHTML = arr[i];
            // // butt.onclick = function() {
            // //     submitCreate(butt.innerHTML);
            // // };
            // toAppend.appendChild(butt);
            // toAppend.appendChild(document.createElement("br"));
        }
    }
    // function addListenerToButts(){
    //     toAppend.children
    //     butt.onclick = function() {
    //             submitCreate(butt.innerHTML);
    //         };
    // }
    requestList();

    var millisecondsToWait = 400;
    setTimeout(function() {
        var theListToReturn = stuffToGet;
        addList(theListToReturn);
        toAppend.appendChild(unorderedList);
    }, millisecondsToWait);

    // function submitCreate(innerText){
    //     console.log(innerText);
    //     window.localStorage.setItem('theName', innerText);
    //     window.innerTextReceived = innerText;

    //     // createFiles(innerText);
    //     //  getCanvas(innerText);
    //     // window.location.href='/canvas.html';
    //     console.log("SubmitCreate is running.3");
    // }
}