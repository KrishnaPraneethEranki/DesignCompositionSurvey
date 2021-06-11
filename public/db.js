const username = document.getElementById('username');
const blank1 = document.getElementById('blank1');
const blank2 = document.getElementById('blank2');
const blank3 = document.getElementById('blank3');
const blank4 = document.getElementById('blank4');
const blank5 = document.getElementById('blank5');

const st3blank1 = document.getElementById('st3cblk1');
const st3blank2 = document.getElementById('st3cblk2');
const st3blank3 = document.getElementById('st3cblk3');
const st3blank4 = document.getElementById('st3cblk4');
const st3blank5 = document.getElementById('st3dblk1');
const st3blank6 = document.getElementById('st3dblk2');
const st3blank7 = document.getElementById('st3dblk3');
const st3blank8 = document.getElementById('st3dblk4');

const st3p2_1 = document.getElementById('st3p2-1');
const st3p2_2 = document.getElementById('st3p2-2');

const final1 = document.getElementById('final1');
const final2 = document.getElementById('final2');
const final3 = document.getElementById('final3');
const final4 = document.getElementById('final4');



const addbtn = document.getElementById('nextbtn');

const database = firebase.database().ref();

if(((blank1.value || blank2.value || blank3.value || blank5.value ) == "Select") &&(blank4.value == "")){
    addbtn.addEventListener('click', (e)=> {
        e.preventDefault();

        firebase.database().ref(username.value).set({
            st1blank1 : blank1.value,
            st1blank2 : blank2.value,
            st1blank3 : blank3.value,
            st1blank4 : blank4.value,
            st1blank5 : blank5.value,
            st3p1blank1 : st3blank1.value,
            st3p1blank2 : st3blank2.value,
            st3p1blank3 : st3blank3.value,
            st3p1blank4 : st3blank4.value,
            st3p1blank5 : st3blank5.value, 
            st3p1blank6 : st3blank6.value,
            st3p1blank7 : st3blank7.value,
            st3p1blank8 : st3blank8.value,
            st3p2blank1 : st3p2_1.value,
            st3p2blank2 : st3p2_2.value,
            final1 : final1.value, 
            final2 : final2.value,
            final3 : final3.value,
            final4 : final4.value
        });
    
    });
}

