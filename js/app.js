class Tomagotchi{
    constructor(name){
        this.hunger = 0;
        this.sleepiness = 0;
        this.bordom = 0;
        this.age = 1;
        this.name = name;
    }
}

var existential = new Tomagotchi('Alex')

$('.baby').hide()
$('.child').hide()
$('.tween').hide()
$('.teen').hide()
$('.adult').hide()
$('.death').hide()

$("#hunger p").text(existential.hunger)
$("#bordom p").text(existential.bordom)
$("#sleepiness p").text(existential.sleepiness)
$("#age p").text(existential.age)

$(".feed").on('click',()=>{
    existential.hunger -= 3
    $("#hunger p").text(existential.hunger)
});

$(".play").on('click',()=>{
    existential.bordom -= 3
    $("#bordom p").text(existential.bordom)
});

$(".light").on('click',()=>{
    existential.sleepiness -= 3
    $("#sleepiness p").text(existential.sleepiness)
});
function transForm(){
    switch(true){
        case (existential.age <= 3):
        $('.born').replaceWith($('.baby').show())
        // $('.born').hide()
        // $('.baby').show()
        break;
        case (existential.age <= 5):
        $('.baby').replaceWith($('.child').show())
        // $('.baby').hide()
        // $('.child').show()
        break;
        case (existential.age <= 7):
        $('.child').replaceWith($('.tween').show())
        // $('.child').hide()
        // $('.tween').show()
        break;
        case (existential.age <= 10):
        $('.tween').replaceWith($('.teen').show())
        // $('.tween').hide()
        // $('.teen').show()
        break;
        case (existential.age <= 14):
        $('.teen').replaceWith($('.adult').show())
        // $('.teen').hide()
        // $('.adult').show()
        break;
        case (existential.age <= 15):
        $('.adult').replaceWith($('.death').show())
        // $('.adult').hide()
        // $('.death').show()
        break;
    }
}
setInterval(function(){
    existential.age += 1
    $("#age p").text(existential.age)
    transForm()},3000);

setInterval(update,4000);

function update(){
    existential.hunger += 2
    $("#hunger p").text(existential.hunger)
    existential.bordom += 2.5
    $("#bordom p").text(existential.bordom)
    existential.sleepiness += 3
    $("#sleepiness p").text(existential.sleepiness)  
    if(existential.hunger >= 10 || existential.bordom >=  10 || existential.sleepiness >=  10 || existential.age >= 15){

        alert(`It was time... Your Tamagotchi, ${existential.name}, has passed.`)
        $('#life img').replaceWith($('.death').show())
        for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
    }
}

