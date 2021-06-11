function section2Visible(){
    const name = document.getElementById("username");

    if(name.value != ""){
        document.getElementById("section-2").style.display = "block";
        document.getElementById("scroll").style.visibility = "visible";
    }
    else{
        alert("Enter name to continue");
    }
}

function section3Visible(){
    const blank1 = document.getElementById('blank1');
    const blank2 = document.getElementById('blank2');
    const blank3 = document.getElementById('blank3');
    const blank4 = document.getElementById('blank4');
    const blank5 = document.getElementById('blank5');    
    
    if(((blank1.value || blank2.value || blank3.value || blank5.value) == "Select") ||(blank4.value == "")){
        if(blank1.value == "Select"){
            blank1.style.backgroundColor = '#FF9F9B';
        }
        if(blank2.value == "Select"){
            blank2.style.backgroundColor = '#FF9F9B';
        }
        if(blank3.value == "Select"){
            blank3.style.backgroundColor = '#FF9F9B';
        }
        if(blank4.value == ""){
            blank4.style.backgroundColor = '#FF9F9B';
        }
        if(blank5.value == "Select"){
            blank5.style.backgroundColor = '#FF9F9B';
        }
        alert("Fill the highlighted fields");
    }
    else{
        document.getElementById("section-3").style.display = "block";
        
        blank1.style.backgroundColor = '#DEF1EA';
        blank2.style.backgroundColor = '#DEF1EA';
        blank3.style.backgroundColor = '#DEF1EA';
        blank4.style.backgroundColor = '#DEF1EA';
        blank5.style.backgroundColor = '#DEF1EA';

        document.getElementById("sp1").innerText = blank1.value;
        document.getElementById("sp2").innerText = blank2.value;
        document.getElementById("sp3").innerText = blank3.value;
        document.getElementById("sp4").innerText = blank4.value;
        document.getElementById("sp5").innerText = blank5.value;

        document.getElementById("afterst1").style.display = "block";
    }
}

function section4P2Visible(){
    const st3blank1 = document.getElementById('st3cblk1');
    const st3blank2 = document.getElementById('st3cblk2');
    const st3blank3 = document.getElementById('st3cblk3');
    const st3blank4 = document.getElementById('st3cblk4');
    const st3blank5 = document.getElementById('st3dblk1');
    const st3blank6 = document.getElementById('st3dblk2');
    const st3blank7 = document.getElementById('st3dblk3');
    const st3blank8 = document.getElementById('st3dblk4');

    if((st3blank1.value || st3blank2.value || st3blank3.value || st3blank4.value || st3blank5.value || st3blank6.value || st3blank7.value || st3blank8.value) == "Select"){
        if(st3blank1.value == "Select"){
            st3blank1.style.backgroundColor = '#FF9F9B';
        }
        if(st3blank2.value == "Select"){
            st3blank2.style.backgroundColor = '#FF9F9B';
        }
        if(st3blank3.value == "Select"){
            st3blank3.style.backgroundColor = '#FF9F9B';
        }
        if(st3blank4.value == "Select"){
            st3blank4.style.backgroundColor = '#FF9F9B';
        }
        if(st3blank5.value == "Select"){
            st3blank5.style.backgroundColor = '#FF9F9B';
        }
        if(st3blank6.value == "Select"){
            st3blank6.style.backgroundColor = '#FF9F9B';
        }
        if(st3blank7.value == "Select"){
            st3blank7.style.backgroundColor = '#FF9F9B';
        }
        if(st3blank8.value == "Select"){
            st3blank8.style.backgroundColor = '#FF9F9B';
        }
        alert("Fill the highlighted fields");
    }
    else{

        st3blank1.style.backgroundColor = '#DEF1EA';
        st3blank2.style.backgroundColor = '#DEF1EA';
        st3blank3.style.backgroundColor = '#DEF1EA';
        st3blank4.style.backgroundColor = '#DEF1EA';
        st3blank5.style.backgroundColor = '#DEF1EA';
        st3blank6.style.backgroundColor = '#DEF1EA';
        st3blank7.style.backgroundColor = '#DEF1EA';
        st3blank8.style.backgroundColor = '#DEF1EA';

        document.getElementById("st3p2").style.display = "block";
        document.getElementById("st3p3").style.display = "block";
    }
}


function myFunction1() {
    document.getElementById("div1").style.visibility = "visible";
    document.getElementById("div2").style.visibility = "hidden";
    document.getElementById("div3").style.visibility = "hidden";
    document.getElementById("div4").style.visibility = "hidden";
    document.getElementById("section-4").style.display = "block";

}
function myFunction2() {
    document.getElementById("div1").style.visibility = "hidden";
    document.getElementById("div2").style.visibility = "visible";
    document.getElementById("div3").style.visibility = "hidden";
    document.getElementById("div4").style.visibility = "hidden";

}
function myFunction3() {
    document.getElementById("div1").style.visibility = "hidden";
    document.getElementById("div2").style.visibility = "hidden";
    document.getElementById("div3").style.visibility = "visible";
    document.getElementById("div4").style.visibility = "hidden";
}
function myFunction4() {
    document.getElementById("div1").style.visibility = "hidden";
    document.getElementById("div2").style.visibility = "hidden";
    document.getElementById("div3").style.visibility = "hidden";
    document.getElementById("div4").style.visibility = "visible";
}