// Frontend-Prototyp mit Beispieldaten. Noch keine echten WebUntis-Daten!
const subjects = {
  "Mathematik":"#3979D8","Deutsch":"#D66A62","Englisch":"#E3B72F",
  "Geschichte":"#B18A50","Biologie":"#55A66A","Physik":"#8872C7",
  "Chemie":"#D28A43","Sport":"#D16C9B"
};
const sampleLessons = [
  {start:"08:00",end:"08:45",subject:"Englisch",room:"203"},
  {start:"08:50",end:"09:35",subject:"Mathematik",room:"204"},
  {start:"09:55",end:"10:40",subject:"Geschichte",room:"108",change:"Vertretung"},
  {start:"10:45",end:"11:30",subject:"Biologie",room:"NW 2"},
  {start:"11:50",end:"12:35",subject:"Deutsch",room:"205"},
  {start:"12:40",end:"13:25",subject:"Sport",room:"Sporthalle"},
  {start:"13:30",end:"14:15",subject:"Physik",room:"301"}
];
let selectedDate = new Date();
let tasks = [];
const $ = id => document.getElementById(id);
const formatDate = d => new Intl.DateTimeFormat("de-DE",{weekday:"long",day:"numeric",month:"long"}).format(d);
function renderDay(){
  $("date-title").textContent = formatDate(selectedDate);
  $("date-subtitle").textContent = "Alle Stunden bis zum Unterrichtsende";
  $("lesson-list").innerHTML = sampleLessons.map((l,i)=>{
    const color=subjects[l.subject]||"#8b94a5";
    const cancelled=!!l.cancelled;
    return `<article class="lesson-card ${cancelled?"cancelled":""}" style="--subject:${color}">
      <div class="lesson-time">${l.start}<br>– ${l.end}</div>
      <div class="lesson-bar" style="background:${color}"></div>
      <div><div class="lesson-subject">${l.subject}</div><div class="lesson-room">${l.room}</div></div>
      ${l.change?`<span class="lesson-state">${l.change}</span>`:""}
    </article>`;
  }).join("");
}
function renderTasks(){
  $("task-list").innerHTML=tasks.map((t,i)=>`<li><input type="checkbox" data-task="${i}" ${t.done?"checked":""}><span>${t.text}</span></li>`).join("");
}
document.querySelectorAll(".tab").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".tab").forEach(x=>x.classList.toggle("active",x===btn));
  ["day","week","tasks"].forEach(v=>$(`${v}-view`).classList.toggle("hidden",v!==btn.dataset.view));
}));
$("prev-day").addEventListener("click",()=>{selectedDate.setDate(selectedDate.getDate()-1);renderDay()});
$("next-day").addEventListener("click",()=>{selectedDate.setDate(selectedDate.getDate()+1);renderDay()});
$("today-button").addEventListener("click",()=>{selectedDate=new Date();renderDay()});
$("task-form").addEventListener("submit",e=>{e.preventDefault();const v=$("task-input").value.trim();if(v){tasks.push({text:v,done:false});$("task-input").value="";renderTasks()}});
$("task-list").addEventListener("change",e=>{if(e.target.dataset.task!==undefined){tasks[Number(e.target.dataset.task)].done=e.target.checked;renderTasks()}});
$("week-list").innerHTML=["Montag","Dienstag","Mittwoch","Donnerstag","Freitag"].map(d=>`<div class="week-day"><strong>${d}</strong><p class="muted">Wird mit den echten Stundenplandaten befüllt.</p></div>`).join("");
renderDay();renderTasks();
