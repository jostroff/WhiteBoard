// public ActionResult<List<Canvas>> GetAllCanvas()
//         {
            
//             using (var db = new WhiteBoardContext())
//             {
//                 var canvaslist = db.CanvasList.ToList<Canvas>();
                
//                 return canvaslist;
//             }
//         }
var xhttp;
innerTextReceived = "";


function getInnerTextReceived(){
    return innerTextReceived;
}
function accessFiles(serialString){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            dataResults = JSON.parse(this.responseText);


            var clickXY = new Array(1000);

            console.log("Shuffle stuff: " + this.responseText);
            
            for (var toLoop in dataResults[serialString]["canvascontent"]){
                
                // var x = i + param * (pileX - 1);
                // pileSize++;
                // newAdds += ", " + toLoop["code"];
                
            }
        }
    };
    xhttp.open("GET", "https://localhost:5001/canvas/all", true);
    xhttp.send();
}
function submitCreate(){
    console.log("SubmitCreate is running.1");

    var textField = document.getElementById("textFieldCreate");
    var innerText = textField.value;
    window.localStorage.setItem('theName', innerText);
    window.innerTextReceived = innerText;

    // createFiles(innerText);
    console.log("SubmitCreate is running.2 BLAAAHAHAHFSHFAHFS" + window.innerTextReceived);
    //  getCanvas(innerText);
    window.location.href='/canvas.html';
    console.log("SubmitCreate is running.3");
}
function createFiles(serialString){
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // dataResults = JSON.parse(this.responseText);
            // var clickXY = new Array(1000);
            console.log("Shuffle stuff: " + serialString);
            // for (var toLoop in dataResults[serialString]["canvascontent"]){
                
                // var x = i + param * (pileX - 1);
                // pileSize++;
                // newAdds += ", " + toLoop["code"];
                
            // }
            document.getElementById("textFieldCreate").value = "";
        }
    };
    xhttp.open("GET", "https://localhost:5001/canvas/all/" + serialString, true);
    xhttp.send();
}

//View->Command Pallette -> OmniSharp: Restart OmniSharp.