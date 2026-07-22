import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {

getFirestore,

doc,

getDoc

}

from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





const firebaseConfig={


apiKey:"ضع المفتاح هنا",

authDomain:"ضع الدومين هنا",

projectId:"NEXIO-A-world"


};





const app =
initializeApp(firebaseConfig);



const db =
getFirestore(app);





async function loadDrama(){



let id =
localStorage.getItem("dramaID");



if(!id){

return;

}




let result =
await getDoc(

doc(
db,
"dramas",
id
)

);





if(result.exists()){



let drama =
result.data();





document.getElementById("name")
.innerHTML =
drama.name;



document.getElementById("poster")
.src =
drama.poster;



document.getElementById("country")
.innerHTML =
"🌍 "+drama.country;



document.getElementById("type")
.innerHTML =
"🏷️ "+drama.type;



document.getElementById("score")
.innerHTML =
"⭐ "+drama.score;



document.getElementById("story")
.innerHTML =
drama.story;



}



}



loadDrama();
