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

const app=initializeApp(firebaseConfig);

const db=getFirestore(app);

async function loadGroup(){

let id=
localStorage.getItem("groupID");

if(!id) return;

let result=
await getDoc(doc(db,"group",id));

if(result.exists()){

let group=result.data();

document.getElementById("image").src=group.image;

document.getElementById("name").innerHTML=group.name;

document.getElementById("company").innerHTML="🏢 "+(group.company||"");

document.getElementById("country").innerHTML="🌍 "+(group.country||"");

document.getElementById("year").innerHTML="📅 "+(group.year||"");

document.getElementById("description").innerHTML=group.description||"";

}

}

loadGroup();
