for (var i = 1; i <= 20; i++){
    console.log(i)
    if (i > 10){
        break;
    }
}

var roastGiven = 0;
while (roastGiven < 10){
    console.log('Roast Den, gitst item ansi');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}

var friends = ['Humaion Kobir', 'Tanvir rahman', 'Prince Mahmud', 'Limon Hosen', 'Tahran Taj', 'Ekramul Ishlam'];


for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    
    if(friend == 'Tahran Taj'){
        break;
    }
    console.log(friend);
}

var numbers = [45, 87, 89,  56, 32, 51, 25, 188, 41, 25, 98];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if(number > 100){
        break;
    }
    console.log(number);
}