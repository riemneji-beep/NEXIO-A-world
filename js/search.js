import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

// ضع بيانات Firebase الخاصة بك هنا

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const input = document.getElementById("searchInput");
const results = document.getElementById("results");

let allData = [];

async function loadData(){

allData=[];

const collections=[
"dramas",
"groups",
"members",
"news"
];

for(const name of collections){

const snap=await getDocs(collection(db,name));

snap.forEach(doc=>{

allData.push({

id:doc.id,
type:name,
...doc.data()

});

});

}

}

function render(keyword){

results.innerHTML="";

keyword=keyword.trim().toLowerCase();

if(keyword===""){

results.innerHTML="ابدأ بكتابة اسم...";

return;

}

const filtered=allData.filter(item=>{

const title=(item.name||item.title||"").toLowerCase();

return title.includes(keyword);

});

if(filtered.length===0){

results.innerHTML="<h3>لا توجد نتائج</h3>";

return;

}

filtered.forEach(item=>{

const card=document.createElement("div");

card.className="card";

const image=item.image || item.poster || "";

card.innerHTML=`

<img
src="${image}"
style="width:100%;max-height:250px;object-fit:cover;border-radius:15px;margin-bottom:15px;">

<h2>${item.name || item.title}</h2>

<div class="type">${item.type}</div>

`;

card.onclick=()=>openItem(item);

results.appendChild(card);

});

}

function openItem(item){

switch(item.type){

case "dramas":
location.href=`drama-details.html?id=${item.id}`;
break;

case "groups":
location.href=`group-details.html?id=${item.id}`;
break;

case "members":
location.href=`member-details.html?id=${item.id}`;
break;

case "news":
location.href=`news-details.html?id=${item.id}`;
break;

}

}

loadData();

input.addEventListener("input",()=>{

render(input.value);

});
