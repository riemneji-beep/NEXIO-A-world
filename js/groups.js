import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {

getFirestore,

collection,

getDocs

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




async function loadGroups(){



let box =
document.getElementById("groupsList");



box.innerHTML="";



let data =
await getDocs(
collection(db,"group")
);




data.forEach((doc)=>{


let group =
doc.data();



box.innerHTML += `


<div class="card">


<img src="${group.image}">


<h2>

🎤 ${group.name}

</h2>


<p>

🏢 ${group.company || "غير معروف"}

</p>


<p>

📅 ${group.year || "غير معروف"}

</p>


<p>

${group.description || ""}

</p>



<button onclick="openGroup('${doc.id}')">

عرض التفاصيل 🎤

</button>


</div>


`;



});



}





window.openGroup=function(id){


localStorage.setItem(
"groupID",
id
);



window.location.href=
"group-details.html";


}




loadGroups();
