import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";


import {

getFirestore,

collection,

getDocs,

orderBy,

query

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





async function loadNews(){


const box =
document.getElementById("newsList");



box.innerHTML="";



const q =
query(

collection(db,"news"),

orderBy("createdAt","desc")

);



const result =
await getDocs(q);



result.forEach((doc)=>{


let news =
doc.data();



box.innerHTML += `


<div class="card">


<img src="${news.image || ''}">


<h2>
📰 ${news.title}
</h2>


<p>
${news.description}
</p>


<p>
🌌 ${news.category}
</p>


</div>


`;



});


}



loadNews();
