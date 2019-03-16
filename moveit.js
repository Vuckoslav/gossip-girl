   $(document).ready(function(){
        $(".girl").click(function(){
            $(".hand").css('bottom', '250px');
             setTimeout(function(){
                    $(".hand").css('bottom', '220px');
                },2500);
             $(".ee1").css({
                 top: '6px',
                 left: '4.5px'
             });
             setTimeout(function(){
                    $(".ee1,.ee2").css({
                 top: '4.6px',
                 left: '3px'
             });
                },2500);
             $(".ee2").css({
                 top: '6px',
                 left: '2px'
             });
             
                
            });

            
        });
    
            var ThingsICanDo = [
    "What's your name ?",
    "What's my name ?",
    "What's the time ?",
    "What date is today?",
    "Hello Sam",
    "Sam where are you?",
    "How are you ?",
    "5+10",
    "lol",
    "best programming language",
    "Good Night",
    "Good Morning",
    "Good Afternoon",
    "happy diwali",
    "do you like sololearn",
    "i love you",
    "open facebook",
    "tell me a joke",
    "commands",
    "list",
    "features"
    
];

var ListThings = ThingsICanDo => "You can try asking the following : <br><br><br>" + ThingsICanDo.join("<br/><br/>");

var Random = list => list[Math.floor(Math.random()*list.length)]; 

var WhatCanIDo = ThingsICanDo => Random(ThingsICanDo); 


var Links = {
    "facebook" : "https://www.facebook.com",
    "google" : "https://www.google.com",
    "twitter" : "https://www.twitter.com",
    "youtube" : "https://www.youtube.com",

};

var getLink = siteName => `Click here to open <a href="${Links[siteName]}">${siteName}</a>`;


var Jokes = [
    
    `A: I have the perfect son.<br/>
B: Does he smoke? <br/>
A: No, he doesn't. <br/>
B: Does he drink whiskey? <br/> 
A: No, he doesn't. <br/>
B: Does he ever come home late? <br/> 
A: No, he doesn't. <br/>
B: I guess you really do have the perfect son. How old is he?<br/> 
A: He will be six months old next Wednesday.<br/>`,
`Patient: Doctor! You've got to help me! Nobody ever listens to me. No one ever pays any attention to what I have to say.<br/>
Doctor: Next please! `,
`Headmaster: I've had complaints about you, Johnny, from all your teachers. What have you been doing?<br/> 
Johnny: Nothing, sir.<br/> 
Headmaster: Exactly.<br/> `,
`PUPIL: Would you punish me for something I didn't do? <br/> 
TEACHER: Of course not.<br/> 
PUPIL: Good, because I haven't done my homework.<br/>`

];

var TellAJoke = Jokes => Random(Jokes);


var Message = () => alert("If you want to suggest new jokes or questions and answer, feel free to comment. ");

var illegals = [
  "window",
  ...Object.keys(window),
  ...Object.keys(document),
  ...Object.keys(Element.prototype)
];

var isLegal = string => {
    
    let Legal = true;

    illegals.forEach(illegal=>{
        
        if(string.indexOf(illegal) !== -1)
        {
            Legal = false;
        }
        
    });
    
    return Legal;
}

var HtmlSpecialChars = string => {
 
    let escapedString = string;
        
    HtmlSpecialChars.specialchars.forEach(
       chr=>{
       
           escapedString = escapedString.replace(
           new RegExp(chr[0], 'g'), 
           chr[1]
           );
           
       });
  
    
    return escapedString;
};
     
HtmlSpecialChars.specialchars = [
    [ '&', '&amp;' ],
    [ '<', '&lt;' ],
    [ '>', '&gt;' ],
    [ '"', '&quot;' ]
];

var monthNames = [
    "January",
    "February",
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October",
    "November", 
    "December"
 ]; 


var today = monthNames =>
{
  let date = new Date();
  
  return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  
}


var now = () =>
{
    let date = new Date();
    
    return date.toLocaleTimeString();
}

var Evaluate = expression =>
{
    try
    {
        if(isLegal(expression))
        {
            
        
            var result = eval(HtmlSpecialChars(expression));
            return result;
        
        }
        else 
        {
            return "error";
        }
    }
    
    catch(err)
    {
        return "error";
    }
}

var Answers = {
    "features" : ListThings(ThingsICanDo),
    "commands" : ListThings(ThingsICanDo),
    "list" : ListThings(ThingsICanDo),
    "joke" : TellAJoke(Jokes),
    "what you can do" : `Try saying '${ WhatCanIDo(ThingsICanDo)}'`,
    "who is your creator" : "My creator is Suvansh Rana 😃",
    "meaning of life" : "The meaning of life is 42.",
    "hello" : "Hello %U% 😃. How can I help ? ",
    "hi" : "Hi %U% 😁",
    "hola" : "Hola amigo 😁",
    "my name" : "Your name is %U% &#10024;",
    "your name" : "My name is Sam &#10024;",
    "sam" : "I'm here for you %U%",
    "date" : "Its "+ today(monthNames) + " today. Make this day a great one %U% 😀",
    "time" : "The time is " + now() + " in your region.",
    
    
    "happy diwali" : "Happy Diwali to you too %U% 😃",
    "who is better google assistant or siri" : "No virtual assistant is better than me 😎",
    "best programming language" : "the one that lacks curly braces 🐍",
    "bye" : "Good bye. Hope we meet soon 😀",
    "good night" : "Good Night %U% 🌃",
    "good morning" : "Good Morning %U% 🌅",
    "good afternoon" : "Good Afternoon %U% ☀",
    "good evening" : "Good Evening %U% 🌇",
    "how are you" : "I am great !!! %U%. 😃",
    "you are cool" : "Thanks, I was born this way 😉",
    "i love you" : "I Love you too %U% 😊",
    "awesome" : "Glad, you liked it 😊",
    "do you like sololearn" : "Yes, Sololearn is fun. Infact, Sololearn is my birthplace 😃",  
"lol" : "Haha.. That was funny 😂",
"facebook" : getLink("facebook"),
"google" : getLink("google"),
"twitter" : getLink("twitter")
};

 
var Notfound = "Sorry, I have no answers for that.";

var Invalid = "Invalid Expression";

 
var D = window.document;

var element = selector => D.querySelector(selector);

var Answer = (Main,User,Text) =>
{
    let Flag = false;
    
    var Result = Evaluate(Text);
    
    text = Text.toLowerCase();
    
    Object.keys(Answers).forEach(key =>{
    
    if(!Flag)
    {
        if(text.indexOf(key) !== -1 )
        {
    
          addAnswer(
              Main,
              Answers[key].replace(
              "%U%",
              User
              )
          );
            
          Flag = true;
        
       }
   
       else if(typeof Result == "number")
       {
          
             addAnswer(
                 Main,
                 `${Text} equals ${Result}`
             );
             
             Flag = true;
        
       }
       
       }
        
    });
    
    if(!Flag)
    {
        addAnswer(Main,Notfound);
    }
    
    
};

var addQuestion = (Main,text) =>
{
    Main.innerHTML += `
        <div class="row">
            <div class="chat question shadow">${text}</div>
        </div>
    `;
}

var addAnswer = (Main,text) =>
{
    Main.innerHTML += `
    <div class="row">
        <div class="chat answer shadow">${text}</div>
    </div>
    `;
}


D.addEventListener("DOMContentLoaded",()=>{
    
    var Main = element("main");
    
    var Askbtn = element("button");
    
    var Question = element("input");
    
    var Lastdiv = element("#last");
    
    let User = prompt("Enter your name :");
    
    while(User === null  || User === '')
    {
    
        User = prompt("Your name is required for the assistant to work properly : ");
        
    }
    
    Question.focus();
    
    var Ask = () =>{
        
        var Text = Question.value;
        
        if(Text.length)
        {
        
            addQuestion(Main, Text);
        
            Question.value = "";
            
            Answer(Main,User,Text);
             
            Lastdiv.scrollIntoView();
        
        }
    };
    
    
    Askbtn.addEventListener("click",Ask);
    
    Question.addEventListener("keyup",function(event){
        if(event.keyCode === 13)  Ask();
    });
    
    addAnswer(Main,`Hello ${User}, I am Sam. How can I help ?`);
    
    Message();
});
