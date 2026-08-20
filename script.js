const menuBtn=document.querySelector(".menu-btn"),navLinks=document.querySelector(".nav-links");menuBtn.addEventListener("click",()=>navLinks.classList.toggle("open"));document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>navLinks.classList.remove("open")));

const DOWNLOAD_URL="#";document.getElementById("downloadBtn").href=DOWNLOAD_URL;
const KEY="project_dublagens_feedbacks",form=document.getElementById("feedbackForm"),status=document.getElementById("formStatus"),list=document.getElementById("feedbackItems");
function getItems(){try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return[]}}
function esc(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function render(){const items=getItems();if(!items.length){list.innerHTML='<p class="empty">Nenhum feedback registrado ainda.</p>';return}list.innerHTML=items.map(f=>`<article class="feedback-item"><strong>${esc(f.name)}</strong> · ${esc(f.type)}<p>${esc(f.message)}</p><small>${esc(f.date)}</small></article>`).join("")}
form.addEventListener("submit",e=>{e.preventDefault();const items=getItems();items.unshift({name:document.getElementById("name").value.trim(),type:document.getElementById("type").value,message:document.getElementById("message").value.trim(),date:new Date().toLocaleString("pt-BR")});localStorage.setItem(KEY,JSON.stringify(items));form.reset();status.textContent="✓ Feedback registrado neste navegador.";render();setTimeout(()=>status.textContent="",3500)});
document.getElementById("clearFeedback").addEventListener("click",()=>{if(confirm("Apagar os feedbacks salvos neste navegador?")){localStorage.removeItem(KEY);render()}});render();
