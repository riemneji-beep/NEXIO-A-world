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





async function loadDramas(){



let area =
document.getElementById("dramaList");



area.innerHTML="";



let snapshot =
await getDocs(
collection(db,"dramas")
);





snapshot.forEach((doc)=>{



let drama =
doc.data();





area.innerHTML +=



`

<div class="card">


<div class="poster">


<img src="${drama.poster}"
width="100%"
height="200"
style="border-radius:20px">


</div>



<h2>

${drama.name}

</h2>



<p>

🌍 ${drama.country}

</p>



<p>

🏷️ ${drama.type}

</p>



<p>

⭐ ${drama.score}

</p>



<button onclick="openDrama('${doc.id}')">

عرض التفاصيل 🎬

</button>


</div>


`;



});



}





window.openDrama=function(id){


localStorage.setItem(
"dramaID",
id
);



window.location.href=
"drama-details.html";


}




loadDramas();
