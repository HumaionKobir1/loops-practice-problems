var myMarks = 85;
var tomMarks = 66;
var janeMarks = 95;
var peteMarks = 56;
var johnMarks = 40;



if (myMarks > 80){
    console.log('A grade');
}
else if(myMarks > 60){
    console.log('B grade');
}
else if(myMarks > 50){
    console.log('C grade');
}
else if(myMarks > 40){
    console.log('D grade');
}
else if(myMarks < 39){
    console.log('F grade');
}
// same of above



                       /************* Avarage mark ************/

var students = [['Me', 85], ["Tom's", 66], ["Jane's", 95], ["Peter's", 56], ["John's", 40]];
var avgMarks = 0;

for (let i = 0; i < students.length; i++) {
    avgMarks += students[i][1];
    var avg = (avgMarks / students.length);
    
}
if (avg > 80){
    console.log('A grade');
}
else if(avg > 60){
    console.log('B grade');
}
else if(avg > 50){
    console.log('C grade');
}
else if(avg > 40){
    console.log('D grade');
}
else if(avg < 39){
    console.log('F grade');
}



