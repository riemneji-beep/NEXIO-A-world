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
import {
collection,
addDoc,
getDocs,
query,
where,
orderBy
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
getAuth
}
from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const auth = getAuth();

window.publishReview = async function () {

    const user = auth.currentUser;

    if (!user) {
        alert("يجب تسجيل الدخول أولاً.");
        return;
    }

    const text = document.getElementById("userReview").value.trim();
    const rating = Number(document.getElementById("userRating").value);
    const dramaID = localStorage.getItem("dramaID");

    if (text === "") {
        alert("اكتب رأيك أولاً.");
        return;
    }

    await addDoc(collection(db, "reviews"), {

        dramaID: dramaID,

        userName: user.email,

        rating: rating,

        review: text,

        createdAt: new Date()

    });

    document.getElementById("reviewMessage").innerHTML =
    "✅ تم نشر رأيك.";

    document.getElementById("userReview").value = "";

    loadReviews();

};



async function loadReviews() {

    const dramaID = localStorage.getItem("dramaID");

    const container =
    document.getElementById("reviewsContainer");

    container.innerHTML = "";

    const q = query(
        collection(db, "reviews"),
        where("dramaID", "==", dramaID),
        orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {

        container.innerHTML =
        "<p>لا توجد آراء حتى الآن.</p>";

        return;

    }

    snapshot.forEach(doc => {

        const data = doc.data();

        container.innerHTML += `

<div class="review">

<h4>👤 ${data.userName}</h4>

<p>⭐ ${data.rating}/5</p>

<p>${data.review}</p>

</div>

`;

    });

}

loadReviews();
