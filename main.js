starray = [];

function submit(){

    var name_1 = document.getElementById("name1").value;
    var name_2 = document.getElementById("name2").value;
    var name_3 = document.getElementById("name3").value;
    var name_4 = document.getElementById("name4").value;
    starray.push(name_1);
    starray.push(name_2);
    starray.push(name_3);
    starray.push(name_4);
    document.getElementById("dname").innerHTML=starray;
    document.getElementById("submitbtn").style.display="none";
    document.getElementById("sortbutton").style.display="inline-block";
    
}

function sort1 (){

starray.sort();
document.getElementById("dname").innerHTML=starray;
}