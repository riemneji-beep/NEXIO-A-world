import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {

getFirestore,

collection,

addDoc,

getDocs,

query,

orderBy

}

from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import {

getAuth,

onAuthStateChanged

}

from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



// معلومات Firebase

const firebaseConfig = {

apiKey:"ضع المفتاح هنا",

authDomain:"ضع الدومين هنا",

projectId:"NEXIO-A-world"

};



const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


const auth = getAuth(app);



let userName="مستخدم";

let rating=0;




// معرفة المستخدم

onAuthStateChanged(auth,(user)=>{


if(user){


userName=user.email;


}


});





// اختيار التقييم

window.rate=function(number){


rating=number;


document.getElementById("rating")
.innerHTML=

"تقييمك: "+number+" ⭐";


}




// إرسال مراجعة

window.sendReview=async function(){



let text=
document.getElementById("review").value;



if(text==""){

alert("اكتب مراجعة");

return;

}



await addDoc(

collection(db,"reviews"),

{


drama:"Hidden Love",

user:userName,

text:text,

rating:rating,

date:new Date()

}


);



document.getElementById("result")
.innerHTML=
"✅ تم نشر المراجعة";


document.getElementById("review").value="";


loadReviews();


}







// تحميل المراجعات

async function loadReviews(){


let area=
document.getElementById("reviews");


area.innerHTML="";



let q=query(

collection(db,"reviews"),

orderBy("date","desc")

);



let data=
await getDocs(q);



data.forEach((doc)=>{


let review=doc.data();



area.innerHTML +=


`

<div class="card">

👤 ${review.user}

<br>

⭐ ${review.rating}/5

<br><br>

${review.text}

</div>

`;


});


}




loadReviews();
