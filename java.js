AOS.init({ duration: 1000, once: true });


const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.onclick = () => {
  menu.classList.toggle('active');
  burger.innerHTML = menu.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
};
document.querySelectorAll('.nav-links a').forEach(link => {
  link.onclick = () => menu.classList.remove('active');
});


function calculateAC() {
  const area = parseFloat(document.getElementById('area').value);
  const sun = document.getElementById('sun').value;
  const devices = document.getElementById('devices').value;

  if (!area || area <= 0) { alert("من فضلك ادخل مساحة صحيحة"); return; }

  let acHP = area / 8;
  if (sun === "yes") acHP += 0.5;
  if (devices === "yes") acHP += 0.5;
  acHP = Math.round(acHP * 2) / 2;

  document.getElementById('result').innerHTML = `القدرة المطلوبة للتكييف: <span>${acHP} حصان</span>`;
}


document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  const fname = document.getElementById("fname").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if(!fname || !email || !message){ alert("من فضلك املأ البيانات الأساسية"); return; }

  const phone = "201156641492"; 
  const text = `رسالة من الموقع:\nالاسم: ${fname}\nالبريد: ${email}\nالعنوان: ${subject}\nالرسالة: ${message}`;
  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;

  window.open(whatsappUrl,"_blank");
  this.reset();
});


const snowContainer = document.getElementById('snow-container');
function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');

  snowflake.textContent = '❄';
  snowflake.style.left = Math.random()*window.innerWidth + 'px';
  snowflake.style.fontSize = (Math.random()*15 +10)+'px';


  snowflake.style.opacity = Math.random();
       snowflake.style.animationDuration = (Math.random()*5 +5)+'s';

  snowContainer.appendChild(snowflake);
  setTimeout(()=>{ snowflake.remove(); },10000);
}
setInterval(createSnowflake,200);

function showSection(id){
  document.querySelectorAll('.service-section').forEach(s=>{
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

function hideSections(){
  document.querySelectorAll('.service-section').forEach(s=>{
    s.classList.remove('active');
  });
  window.scrollTo({top:0, behavior:"smooth"});
}