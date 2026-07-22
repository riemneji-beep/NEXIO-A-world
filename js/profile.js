import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {
getFirestore,
doc,
getDoc,
updateDoc
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


import {
getAuth,
onAuthStateChanged
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";



// بيانات Firebase الخاصة بك
const firebaseConfig = {

apiKey:"ضع المفتاح هنا",

authDomain:"ضع الدومين هنا",

projectId:"NEXIO-A-world"

};



const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


const auth = getAuth(app);



let userID;



let selectedPlanet="🪐 لم يتم الاختيار";

let selectedInterests=[];



// معرفة المستخدم المسجل

onAuthStateChanged(auth, async(user)=>{


if(user){


userID=user.uid;



let data = await getDoc(
doc(db,"users",userID)
);



if(data.exists()){


let info=data.data();



document.getElementById("username").value =
info.username || "";


document.getElementById("country").value =
info.country || "";


document.getElementById("planet").innerHTML =
info.planet || "🌍";



}


}

else{


window.location.href="index.html";


}



});





// اختيار الكوكب

window.choosePlanet=function(name){


selectedPlanet=name;


document.getElementById("planet")
.innerHTML=name;


}





// إضافة الاهتمامات

window.addInterest=function(item){


selectedInterests.push(item);



document.getElementById("likes")
.innerHTML=
selectedInterests.join(" - ");



}





// حفظ البيانات

window.saveProfile=async function(){


let username=
document.getElementById("username").value;


let country=
document.getElementById("country").value;



await updateDoc(

doc(db,"users",userID),

{


username:username,

country:country,

planet:selectedPlanet,

interests:selectedInterests


}

);



document.getElementById("result")
.innerHTML=
"✅ تم تحديث شخصيتك في NEXIO-A-world";


}
