function check()
{
    
    var q1= document.quiz.q1.value;
    var q2= document.quiz.q2.value;
    var q3= document.quiz.q3.value;
    var ans1;
    var ans2;
    var message;
    var pic;
    if (q1=="Delhi")
    {   message="RIGHT";
        pic="img\yes.jpg";
        ans1="correct answer";
    }
    else
    {   message="WRONG";
        pic="img\no.jpg";
        ans1="wrong answer";
    }
    if (q2=="Harvard")
    {   message="HARVARD";
        pic="harvard.jpg";
        ans2="Well done!! Great choice. Give all your 100% to achieve this task"
    }
    else{
        message="STANFORD";
        pic="img/st.jpg";
        ans2="Wow!! Nice. Focus and achieve your goal."
    }
    if (q3=="Confidently Yes")
    {
        ans3="Wow! Strongly determined!! All the best wishes to u";
    }
    else
    {
        ans3="Wow! Pretty determined!! All the very Best";
    }
document.getElementById("submit").style.visibility="visible";
document.getElementById("ans").innerHTML="Result is:\t"+ans1+"\n"+ans2+"\n"+ans3;
document.getElementById("message").innerHTML=message;
document.getElementById("pic").src=pic;

}