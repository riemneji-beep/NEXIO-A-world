import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {

getFirestore,

collection,

addDoc

}

from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";





const firebaseConfig={


apiKey:"ضع المفتاح هنا",

authDomain:"ضع الدومين هنا",

projectId:"NEXIO-A-world"


};





const app=
initializeApp(firebaseConfig);



const db=
getFirestore(app);






window.addDrama=async function(){



let name=
document.getElementById("name").value;



let country=
document.getElementById("country").value;



let type=
document.getElementById("type").value;



let score=
document.getElementById("score").value;



let poster=
document.getElementById("poster").value;



let story=
document.getElementById("story").value;






await addDoc(

collection(db,"dramas"),

{


name:name,

country:country,

type:type,

score:score,

poster:poster,

story:story,


createdAt:new Date()


}

);





document.getElementById("result")
.innerHTML=

"✅ تمت إضافة المسلسل بنجاح";



}
