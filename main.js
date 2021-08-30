name_of_the_student_array=[];
function submit(){
    var name1=document.getElementById("nameofthestudent1"). value;
    var name2=document.getElementById("nameofthestudent2"). value;
    var name3=document.getElementById("nameofthestudent3"). value;
    var name4=document.getElementById("nameofthestudent4"). value;
    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);
    console.log(name_of_the_student_array);
    document.getElementById("display_names").innerHTML=name_of_the_student_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_names").innerHTML=name_of_the_student_array;
}

function reset(){
    document.getElementById("sort_button").style.display="none";
    document.getElementById("submit_button").style.display="inline-block";
    
}
