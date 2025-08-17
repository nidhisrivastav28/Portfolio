//ABOUT SECTION---TAB links(skills...experience...education)
var a_tablinks = document.getElementsByClassName("tab-links");
var a_tabcontents = document.getElementsByClassName("tab-contents");

function opentab(a_tabname){
	for(a_tablinks of a_tablinks){
		a_tablinks.classList.remove("active-link");
	}
	for(a_tabcontents of a_tabcontents){
		a_tabcontents.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(a_tabname).classList.add("active-tab");
}
 
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
	sidemenu.style.right = "0";
}
function closemenu(){
	sidemenu.style.right = "-200px";
}

//CONTACT FORM...GoogleSheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbyHOBMVwfijaNa4JwvyNcmVF_jSaFi5IGqnjFLObtjCJf5IxQPI_IEt-ilmZkV0rjiR/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
      		msg.innerHTML = "Message sent successfully"
      		setTimeout(function(){
      			msg.innerHTML = ""
      		},5000)
      		form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

//SLIDE IN CERTIFICATES & IN PROJECTS
const scrollStep=390;

function setupSlider(prevClass,nextClass,sliderId){
	const slider = document.getElementById(sliderId);
	const prevBtn = document.querySelectorAll(prevClass);
	const nextBtn = document.querySelectorAll(nextClass);

	function checkArrowVisibility(){
		const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
		prevBtn.forEach(btn =>{
			btn.style.display = slider.scrollLeft > 0 ? "block" : "none";
		});
		nextBtn.forEach(btn =>{
			btn.style.display = slider.scrollLeft < maxScrollLeft - 5 ? "block" : "none";
		});
	}
	if(slider){
		prevBtn.forEach(prevBtn=>{
			prevBtn.addEventListener("click", ()=>{
				slider.scrollBy({left: -scrollStep,behavior: "smooth"});
			});
		});
		nextBtn.forEach(nextBtn=>{
			nextBtn.addEventListener("click",()=>{
				slider.scrollBy({left:scrollStep, behavior:"smooth"});
			});
		});
		slider.addEventListener("scroll",checkArrowVisibility);
		window.addEventListener("resize", checkArrowVisibility);
		checkArrowVisibility();
	}
}

setupSlider(".prev",".next","slider-cert");
setupSlider(".prev-project", ".next-project","slider-web");
setupSlider(".prev-project", ".next-project","slider-android");


//WORK SECTION---TABLINKS(web projects & android projects)
var w_tablinks = document.getElementsByClassName("tab-links");
var w_tabcontents = document.getElementsByClassName("tab-contents");

function opentab(w_tabname){
	for(w_tablinks of w_tablinks){
		w_tablinks.classList.remove("active-link");
	}
	for(w_tabcontents of w_tabcontents){
		w_tabcontents.classList.remove("active-tab");
	}
	event.currentTarget.classList.add("active-link");
	document.getElementById(w_tabname).classList.add("active-tab");
}
 
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
	sidemenu.style.right = "0";
}
function closemenu(){
	sidemenu.style.right = "-200px";
}
