import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {
getAuth,
createUserWithEmailAndPassword
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


import {
getFirestore,
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";




// معلومات مشروع Firebase
const firebaseConfig = {

apiKey: "ضع المفتاح هنا",

authDomain: "ضع الدومين هنا",

projectId: "NEXIO-A-world"

};



const app = initializeApp(firebaseConfig);


const auth = getAuth(app);


const db = getFirestore(app);





window.register = function(){


let username =
document.getElementById("username").value;


let email =
document.getElementById("email").value;


let password =
document.getElementById("password").value;



createUserWithEmailAndPassword(
auth,
email,
password
)


.then((userCredential)=>{


let user = userCredential.user;



return setDoc(

doc(
db,
"users",
user.uid
),


{


username:username,


email:email,


country:"غير محدد",


planet:"🪐 لم يتم اختيار كوكب",


level:1,


gems:100,


experience:0,


favorites:{


dramas:[],


groups:[]


},


created:
new Date()


}


);


})


.then(()=>{


document.getElementById("message")
.innerHTML=
"🎉 تم إنشاء حسابك في NEXIO-A-world";


setTimeout(()=>{


window.location.href=
"profile.html";


},2000);



})


.catch((error)=>{


document.getElementById("message")
.innerHTML=
"❌ حدث خطأ: "
+error.message;


});


}
