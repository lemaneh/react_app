var textType = /text.*/;
var placeOutput = document.getElementById('placeOutput');
var placeFile = document.getElementById('placeFile');
var stringArray = [];
var tempLineArray = [];
var tempArray = [];
var read = new FileReader();
var tempLine;
			
var openFile = function (event) {
	clearPlaceOutput();
	var input = event.target;
	var file = input.files[0];
                
	if (file.type.match(textType)) {	
		read.readAsText(file);					
		read.onload = function (e) { 
		onLoadDocument(); 
		}
	}
	else 
		placeOutput.innerText = "Only Text Files for this version";
};
			
function onLoadDocument(){
// By lines
    placeFile.innerHTML = read.result;
    console.log(read.result);
    var lines = read.result.split('\n');
	startRotationProcess(lines);
}
function startRotationProcess(lines){
	for (var line = 0; line < lines.length; line++) {
		tempLine = lines[line].trim().split(" ");
	for (var index = 0; index < tempLine.length; index++) {
		if (index == 0)
			tempArray = tempLine;
		else
			tempArray = tempLineArray;
							
	tempLineArray = [];
	stringArray.push(tempArray.join(' '));
						
	for (var i = 1; i < tempArray.length; i++)
		tempLineArray.push(tempArray[i]);
					
		tempLineArray.push(tempArray[0]);
		tempArray = [];
		}
	}
    setOutputResponse();
}
function setOutputResponse(){
	var tempSortedArray = stringArray.sort((a, b) => a.localeCompare(b));;
    var outputString = tempSortedArray.join(',@@&&^^++==,');
    outputString = outputString.split(',@@&&^^++==,');
    outputResponse(outputString);
	
}
function clearPlaceOutput(){
	document.getElementById("placeOutput").innerHTML = "";;
	stringArray = [];
}
function outputResponse(outputString){
	var element;
    var textnode;
		
	for (var i = 0; i < outputString.length; i++) {
        console.log(outputString[i]);
        element = document.createElement("LI");
        textnode = document.createTextNode(outputString[i]);
        element.appendChild(textnode);
        document.getElementById("placeOutput").appendChild(element);
    }
}	