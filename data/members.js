export const members = [

{
name:"Bang Chan",
group:"Stray Kids",
position:"Leader | Producer | Vocalist | Rapper",
nationality:"Australia",
birthday:"1997-10-03",

description:`
Bang Chan هو قائد فرقة Stray Kids وعضو في فريق الإنتاج
3RACHA.

وُلد في أستراليا وانتقل إلى كوريا لتحقيق حلمه في أن يصبح
فنانًا. يعرف بكونه من أكثر الأعضاء مشاركة في إنتاج
الأغاني وترتيب العروض.

يتميز بشخصيته القيادية واهتمامه الكبير بأعضاء الفرقة
والمعجبين.

الفرقة:
Stray Kids

المنصب:
Leader, Producer, Vocalist
`,

image:""

},



{
name:"Lee Know",
group:"Stray Kids",
position:"Dancer | Vocalist",
nationality:"South Korea",
birthday:"1998-10-25",

description:`
Lee Know هو عضو في فرقة Stray Kids ويشتهر بمهاراته
الراقصة القوية.

قبل الترسيم كان راقصًا احتياطيًا، ثم أصبح أحد أهم
الراقصين في الفرقة.

يعرف بشخصيته المرحة وحبه للقطط، كما يشارك في العديد
من محتويات الفرقة.

المنصب:
Main Dancer, Vocalist
`,

image:""

},



{
name:"Changbin",
group:"Stray Kids",
position:"Rapper | Producer",
nationality:"South Korea",
birthday:"1999-08-11",

description:`
Changbin هو أحد أعضاء فريق 3RACHA والمسؤول عن كتابة
وإنتاج العديد من أغاني Stray Kids.

يشتهر بصوته القوي في الراب وطاقة أدائه على المسرح.

يعتبر من أهم العناصر التي ساعدت في بناء هوية الفرقة
الموسيقية.

المنصب:
Main Rapper, Producer
`,

image:""

},



{
name:"Hyunjin",
group:"Stray Kids",
position:"Dancer | Rapper | Visual",
nationality:"South Korea",
birthday:"2000-03-20",

description:`
Hyunjin هو عضو في Stray Kids معروف بأدائه الراقص
وحضوره القوي على المسرح.

يتميز بأسلوبه الفني واهتمامه بالرسم والفنون.

يعد من الأعضاء الذين لديهم شعبية كبيرة بين المعجبين
بفضل شخصيته وأدائه.

المنصب:
Main Dancer, Rapper
`,

image:""

},



{
name:"Han",
group:"Stray Kids",
position:"Rapper | Vocalist | Producer",
nationality:"South Korea",
birthday:"2000-09-14",

description:`
Han هو عضو في Stray Kids وعضو في فريق 3RACHA.

يمتلك قدرة عالية على كتابة الكلمات وإنتاج الموسيقى،
كما يتميز بمهاراته في الراب والغناء.

يُعرف بتنوعه وقدرته على الانتقال بين الأساليب
الموسيقية المختلفة.

المنصب:
Rapper, Vocalist, Producer
`,

image:""

},



{
name:"Felix",
group:"Stray Kids",
position:"Dancer | Rapper | Vocalist",
nationality:"Australia",
birthday:"2000-09-15",

description:`
Felix هو عضو في Stray Kids وُلد في أستراليا.

يشتهر بصوته العميق والمميز جدًا، بالإضافة إلى مهاراته
في الرقص وحضوره القوي على المسرح.

يعتبر من أكثر أعضاء الفرقة شهرة عالميًا، وله علاقة
قوية مع المعجبين.

المنصب:
Dancer, Rapper, Vocalist
`,

image:""

},



{
name:"Seungmin",
group:"Stray Kids",
position:"Main Vocalist",
nationality:"South Korea",
birthday:"2000-09-22",

description:`
Seungmin هو المغني الرئيسي في Stray Kids.

يتميز بصوته القوي والمستقر وقدرته على تقديم الأغاني
العاطفية.

يعرف أيضًا بشخصيته الهادئة وروحه الفكاهية في محتوى
الفرقة.

المنصب:
Main Vocalist
`,

image:""

},



{
name:"I.N",
group:"Stray Kids",
position:"Vocalist | Maknae",
nationality:"South Korea",
birthday:"2001-02-08",

description:`
I.N هو أصغر عضو في Stray Kids.

بدأ مسيرته كأصغر عضو في الفرقة، وتطور بشكل كبير في
الغناء والأداء مع مرور الوقت.

يعرف بابتسامته وشخصيته اللطيفة.

المنصب:
Vocalist, Maknae
`,

image:""

}

];
<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<title>NEXIO-A-world | Member</title>


<style>

body{

margin:0;
font-family:Arial;
color:white;

background:
radial-gradient(circle,#40106b,#050008);

}


.container{

max-width:700px;
margin:auto;
padding:20px;

}


.card{

background:rgba(255,255,255,.12);

padding:20px;

border-radius:25px;

margin-bottom:20px;

}



img{

width:100%;
height:300px;
object-fit:cover;
border-radius:20px;

}


</style>

</head>


<body>


<div class="container">


<div class="card">


<img id="image">


<h1 id="name"></h1>


<p id="group"></p>


<p id="position"></p>


<p id="birthday"></p>


<p id="nationality"></p>



</div>



<div class="card">


<h2>
📖 التقرير
</h2>


<p id="description">

</p>


</div>



<div class="card">


<h2>
💬 آراء المعجبين
</h2>


<div id="reviews">

لا توجد آراء بعد

</div>


</div>



<div class="card">


<h2>
🤖 NEXIO AI
</h2>


<p>
سيتم إنشاء تقرير AI عن العضو هنا.
</p>


</div>



</div>



<script type="module" src="js/member-details.js"></script>


</body>

</html>
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





async function loadMember(){


let id =
localStorage.getItem("memberID");



if(!id) return;



let result =
await getDoc(

doc(db,"member",id)

);



if(result.exists()){


let member =
result.data();



document.getElementById("image").src =
member.image;


document.getElementById("name").innerHTML =
"👤 "+member.name;


document.getElementById("group").innerHTML =
"🎤 "+member.group;


document.getElementById("position").innerHTML =
"⭐ "+member.position;


document.getElementById("birthday").innerHTML =
"🎂 "+member.birthday;


document.getElementById("nationality").innerHTML =
"🌍 "+member.nationality;


document.getElementById("description").innerHTML =
member.description;


}


}



loadMember();
