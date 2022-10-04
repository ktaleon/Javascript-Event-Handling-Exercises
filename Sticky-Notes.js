var submitButton = document.getElementById("submitButton");
var notes = document.getElementsByClassName("notes")[0];
var random_colors = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04e022",
    "#bc83e6",
    "#ebb328",
  ];

index=0;

submitButton.addEventListener("click", function(){
    createNote();
})

function createNote(){
    var noteText = document.getElementById("textArea").value;

    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML = noteText;
    if (index > random_colors.length - 1) index = 0;
    node1.setAttribute("style", `width:250px; height:125px; font-size:26px; padding-top: 50px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0 px rgba(0,0,0,0.75); background-color:${random_colors[index++]}; text-align: center;`);
    node0.appendChild(node1);

    notes.insertAdjacentElement("beforeend",node0);
}