
//https://docs.microsoft.com/en-us/aspnet/core/tutorials/signalr?view=aspnetcore-2.2&tabs=visual-studio-code




//dotnet run -p WebApp1.csproj


window.onload = function()
{
  function toRun() {
    console.log("TO RUN");
    getInnerTextReceived();
  }
    // submitCreate();
    var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
    // console.log("RIGHT OVER HEREEEE");
    console.log("INNER TEXT RECEIVED: " + window.localStorage.getItem("theName"));
    //HERE WE GOOOOO.

    // parseCanvasContent()
    getCanvas(window.localStorage.getItem("theName"));


    //Disable send button until a connection is established. #TODO
    // document.getElementById("sendButton").disabled = true;

// console.log("Hello. We are here."); //Start of Matt's script, post SignalR.


    //BEGINNING OF MATT'S CLIENT SIDE CODE.
    //COLORS.
    var canvasDiv = document.getElementById('canvasDiv');
    var colorArray = [
    "#ff0000",
    "#158b00",
    "#ffff00",
    "#0000ff"
    ];

    //BUTTONS.
    var curColor = colorArray[0];
    var clickColor = new Array();
    var clear = document.getElementById("clear");
    var save = document.getElementById("save");
    var color = document.getElementById("color");
    canvas = document.createElement('canvas');
    context = canvas.getContext("2d");

    //HEIGHT AND WIDTH.
    canvas.setAttribute('width', canvas.width = 1000); //WIDTH.
    canvas.setAttribute('height', canvas.height = 1000); //HEIGHT.
    canvas.setAttribute('id', 'canvas');



    canvasDiv.appendChild(canvas); //ADDING THE CANVAS ON.
    if(typeof G_vmlCanvasManager != 'undefined') {
      canvas = G_vmlCanvasManager.initElement(canvas);
    }
    //END OF THIS SECTION OF MATT'S CLIENT SIDE CODE.


    //SOMETHING THAT MAYYY BE NEEDED IN FUTURE, I DON'T KNOW, I'M NOT SURE.
    connection.start().then(function(){
      // document.getElementById("sendButton").disabled = false;
      //Connection established.

    }).catch(function (err) {
      return console.error(err.toString());
    });


    connection.on("ReceiveMouseDown", function (xPressed, yPressed, newColor) {
      //Getting the inputted stuff and sending it to the server.
      //BIG DEAL.
      paintVal = true;
      
      addClick(xPressed, yPressed, newColor); //e.pageX - this.offsetLeft, e.pageY - this.offsetTop

      redraw(); //ONCE TOUCHED, IT REPAINTS THE PANEL.
    });
    connection.on("ReceiveMouseMove", function (xPressed, yPressed, newColor) {
      //Getting the inputted stuff and sending it to the server.
      //BIG DEAL.
      addClick(xPressed, yPressed, newColor, true); //e.pageX - this.offsetLeft, e.pageY - this.offsetTop
      redraw(); //ONCE TOUCHED, IT REPAINTS THE PANEL.
    });


    //X, Y COORDINATE OF RECEIVED.
    $('#canvas').mousedown(function(e){
        var mouseX = e.pageX - this.offsetLeft; //X COORD.
        var mouseY = e.pageY - this.offsetTop; //Y COORD.
        paint = true;
        // addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
        connection.invoke("SendMessage", mouseX, mouseY, curColor)
        .catch(function(err)
        {
            return console.error(err.toString());
        });
        //Taken, put into the "Receive Messages" <?function?> above.
      });
      $('#canvas').mousemove(function(e){
        if(paint){
          // addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, curColor, true);
          // redraw();
          connection.invoke("SendMessage", e.pageX - this.offsetLeft, e.pageY - this.offsetTop, curColor)
          .catch(function(err)
          {
              return console.error(err.toString());
          });
        }
      });



      $('#canvas').mouseup(function(e){
        paint = false;
      });

      $('#canvas').mouseleave(function(e){
        paint = false;
      });




    var i = 0;
    var clickX = new Array(); //STORED X VALUES OF WHAT'S BEEN CLICKED.
    var clickY = new Array(); //STORED Y VALUES OF WHAT'S BEEN CLICKED.
    var clickXY = new Array(1000); //Stores X and Y values 

    //draw a red point at (x,y)


    var dataxycolor = new Array(1000);
    for(var j = 0;j<1000;j++){
        dataxycolor[j] = new Array(1000);
    }
    clickXY = [ // creates array of arrays (2d array) to store x and y
      [], []  
  ];

//CODE here, assign the response from requesting the database with corresponding canvas;    

  var content = "202,198,R+202,200,R+202,201,R+203,201,R+203,202,R+204,194,R+204,196,R+204,197,R+204,203,R+205,204,R+205,205,R+206,193,R+206,205,R+206,206,R+207,206,R+209,190,R+209,191,R+209,192,R+209,207,R+210,189,R+210,190,R+210,208,R+211,185,R+211,186,R+211,208,R+212,184,R+212,185,R+212,209,R+213,183,R+214,181,R+214,183,R+214,210,R+215,181,R+215,211,R+216,179,R+217,178,R+217,211,R+218,175,R+218,177,R+218,211,R+219,174,R+220,173,R+220,212,R+222,169,R+222,170,R+222,172,R+222,213,R+223,169,R+224,169,R+225,167,R+225,168,R+225,213,R+226,165,R+226,166,R+226,167,R+226,213,R+227,165,R+228,165,R+229,163,R+229,164,R+229,214,R+230,155,R+230,161,R+230,162,R+230,163,R+230,214,R+231,153,R+231,154,R+231,161,R+232,153,R+232,160,R+232,214,R+233,153,R+233,159,R+233,160,R+233,214,R+234,153,R+234,159,R+234,214,R+235,152,R+235,214,R+236,151,R+237,150,R+237,216,R+238,217,R+239,149,R+239,217,R+240,149,R+241,217,R+242,217,R+245,146,R+245,217,R+246,146,R+246,217,R+247,145,R+247,217,R+249,217,R+250,217,R+251,217,R+252,145,R+252,217,R+253,145,R+254,145,R+256,217,R+258,145,R+258,218,R+259,145,R+260,145,R+260,218,R+262,145,R+262,218,R+263,145,R+264,146,R+264,218,R+265,146,R+265,219,R+266,148,R+266,219,R+267,148,R+268,220,R+269,149,R+269,220,R+270,150,R+270,151,R+270,153,R+270,220,R+271,153,R+271,220,R+272,155,R+272,220,R+273,157,R+273,220,R+274,161,R+274,219,R+274,220,R+275,163,R+276,165,R+276,219,R+277,167,R+277,217,R+278,168,R+278,173,R+278,210,R+278,213,R+278,215,R+279,176,R+279,198,R+279,199,R+279,201,R+279,203,R+279,205,R+279,207,R+279,209,R+280,181,R+280,182,R+280,184,R+280,185,R+280,187,R+280,189,R+280,190,R+280,193,R+280,195,R+";

//here the function will parse the string and pre-draw on the canvas, to persist the old version of canvas in the database.
  // parseCanvasContent(content);






    var clickDrag = new Array();
    var paint; //WHEN THE PAINTING IS ON.

    //THE FUNCTION THAT WOULD RUN FOR CLICK EVENTS, BUT DOESN'T RUN BY ITSELF.
    function addClick(x, y, color, dragging)
    {
       

     clickXY[0][i] = x;
      console.log(clickXY[0][i] + "added")
     clickXY[1][i] = y;
      console.log(clickXY[1][i] + "added")

     // clickX.push(x);
     // clickY.push(y);
      clickDrag.push(dragging);
      clickColor.push(color);
      i++;
      console.log(i);
      console.log(x+"   "+y+"       "+color);
      dataxycolor[x][y] = color;
      
    }

    //CLEAR CANVAS.
    function clearCanvas() {
      clickXY = [ [], [] ];
      clickDrag = [];
      context.clearRect(0,0, canvas.width, canvas.height);
      dataxycolor = new Array(1000);
      for(var i = 0;i<1000;i++){
        dataxycolor[i] = new Array(1000);
      }
    }


    //CHANGES THE COLOR THAT THE USER CAN PAINT.
    function changeColor() {
      console.log("Hello, there. This is changeColor.");
      if(color.value == "colorRed") {
        curColor = colorArray[0];
      }
      else if(color.value == "colorGreen") {
        curColor = colorArray[1];
      }
      else if(color.value == "colorYellow") {
        curColor = colorArray[2];
      }
      else if(color.value == "colorBlue") {
        curColor = colorArray[3];
      }
      else {
        curColor = colorArray[0];
      }

    }


    color.onchange = function() {
      changeColor();
    };
    clear.onclick = function() {
      clearCanvas();
    };

    save.onclick = function() {
        var canvascontent = "";
        for(var i = 0;i<1000;i++){
          for(var j = 0; j < 1000; j++){
            if(dataxycolor[i][j]!=undefined){
            console.log("("+i+","+j+")   "+dataxycolor[i][j]);
            var col = "";
              switch(dataxycolor[i][j]){
                case colorArray[0]:
                  col = "R"; break;
                case colorArray[1]:
                  col = "G"; break;
                case colorArray[2]:
                  col = "Y"; break;
                case colorArray[3]:
                  col = "B"; break;
                default: col = "";
              }
            canvascontent += i+","+j+","+col+"+";
            }
          }
        }
        console.log(canvascontent);
        pushUpdate(window.localStorage.getItem("theName"), canvascontent);

    }

/*

      str

      


*/
    //THIS REDRAWS THE PAINT PANEL. DONE AFTER EVERY MOUSE CLICK EVENT.
    //SIMPLY DONE FOR THE CLIENT SIDE CANVAS, i.e. WHAT THE USER SEES.
    function redraw(){
//        context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
        
        
        context.lineJoin = "round";
        context.lineWidth = 5;
                  
        for(var i=0; i < clickXY[0].length; i++) {		
          context.beginPath();
          if(clickDrag[i] && i){
            context.moveTo(clickXY[0][i-1], clickXY[1][i-1]);
          }else{
            context.moveTo(clickXY[0][i]-1, clickXY[1][i]);
          }
          context.lineTo(clickXY[0][i], clickXY[1][i]);
          context.closePath();
          context.strokeStyle = clickColor[i];
          context.stroke();
        }
      }


      function drawEllipse(centerX, centerY, width, height, color) {
	
        context.beginPath();
        
        context.moveTo(centerX, centerY - height/2); // A1
        
        context.bezierCurveTo(
          centerX + width/2, centerY - height/2, // C1
          centerX + width/2, centerY + height/2, // C2
          centerX, centerY + height/2); // A2
      
        context.bezierCurveTo(
          centerX - width/2, centerY + height/2, // C3
          centerX - width/2, centerY - height/2, // C4
          centerX, centerY - height/2); // A1
       
        context.fillStyle = color;
        context.fill();
        context.closePath();	
      }


      function parseCanvasContent(contentstr){
        var start = 0;
        var end = 0;

        while(end < contentstr.length){
          if(contentstr.charAt(end) != '+'){
            end++;
          }else{
              var pixel = contentstr.substring(start,end);

              var i = 0;
              var s = -1;
              var e = -1;
              while(i<pixel.length){
                  if(pixel.charAt(i)==',' && s < 0){
                      s = i;
                  }else if(pixel.charAt(i)==',' && s >= 0){
                      e = i;
                  }
                  i++;
 
              }
              
              var x = parseInt(pixel.substring(0,s));
              var y = parseInt(pixel.substring(s+1,e));
              var colorchar = pixel.charAt(pixel.length-1);
//              print(x+"  "+y+"   "+colorchar);

              var col = "";

              switch(colorchar){
                case 'R': 
                  col = colorArray[0]; break;
                case 'G':
                  col = colorArray[1]; break;
                case 'Y':
                  col = colorArray[2]; break;
                case 'B':
                  col = colorArray[3]; break;
                default:
                  col = "";
              }
              dataxycolor[x][y] = col;
              drawEllipse(x,y,8,6,col);
              start = end + 1;
              end ++;
          }
              
      }
    }
      function getCanvas(serialString){
        console.log("GET CANVAS is running.");
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                // var dataResults = JSON.parse(this.responseText);
                parseCanvasContent(this.responseText);
                console.log("THE GOALS OF THE REQUEST: " + this.responseText);
    
    
            }
        };
        xhttp.open("GET", "https://localhost:5001/canvas/get/" + serialString, true);
        xhttp.send();
    }
    function pushUpdate(name, newCanvasContent){
      xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {

            }
        };
        xhttp.open("GET", "https://localhost:5001/canvas/update/" + name + "/" + newCanvasContent, true);
        xhttp.send();
    }
}