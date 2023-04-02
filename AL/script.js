function IsEnter(){
    var TextBox_val=document.getElementById("inputbox").value;
    if(TextBox_val!=""){
        if(event.keyCode==13)
            main();
    }
}
function main(){
    var TextBox_val=document.getElementById("inputbox").value;
    var ResponseBox_val=document.getElementById("mainh");
    var FormatInput=TextBox_val.toLowerCase().trim();
    if(FormatInput.includes("hi") || FormatInput.includes("hello"))
        ResponseBox_val.innerHTML="Hello!";
    else if(FormatInput.includes("how are you"))
        ResponseBox_val.innerHTML="I'm fine! Thank for asking!";
    else if(FormatInput.includes("who are you"))
        ResponseBox_val.innerHTML="I'm Chatbot!";
    else if(FormatInput.includes("open youtube")){
        ResponseBox_val.innerHTML="Opening YOUTUBE";
        window.open("https://www.youtube.com/","_blank");
    }
    else if(FormatInput.includes("open google")){
        ResponseBox_val.innerHTML="Opening GOOGLE";
        window.open("https://www.google.com/","_blank");
    }
    else
        ResponseBox_val.innerHTML="Sorry, I can't understand you ???";
}
function Dark(){

}