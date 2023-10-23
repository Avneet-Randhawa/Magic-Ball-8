response = document.getElementById("inner-circle");
var list = [
    "It is certain.",
    "Without a doubt.",
    "Yes, definitely.",
    "Most likely.",
    "Outlook good.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
    "You may rely on it.",
    "As I see it, yes.",
    "It is decidedly so.",
    "Yes, absolutely.",
    "You're in luck!",
    "Indications say no.",
    "All signs point to no.",
    "The answer is within reach.",
    "The future is unclear."
];

function magic_8_balls(){
    random = Math.floor(Math.random()*25);
    document.getElementById("inner-circle").style.fontSize = "60px";
    document.getElementById("inner-circle").innerHTML = list[random];
    setTimeout(fnc, 10000);

    function fnc(){
        document.getElementById("inner-circle").style.fontSize = "250px";
        document.getElementById("inner-circle").innerHTML = "8";
    }
}