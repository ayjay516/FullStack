function validateLunch(){
    var food = document.getElementById("lunchWeAte").value;
    console.log(food);

if (food === 'gyro') {
    alert("My stomach is full.");

} else {
    alert("Im still hungry!");
}

}