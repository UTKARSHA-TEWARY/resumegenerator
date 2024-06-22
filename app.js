let pp=document.getElementById("profile");
let inp=document.getElementById("input");
inp.onchange= function(){
    pp.src=URL.createObjectURL(inp.files[0]);
}


let del=document.getElementById("ppp");

let del1=document.getElementById("ppp1");

let del2=document.getElementById("ppp2");

let del3=document.getElementById("ppp3");

let del4=document.getElementById("ppp4");

let del5=document.getElementById("ppp5");
let del6=document.getElementById("ppp6");
let damn=document.getElementById("s0");

let damn1=document.getElementById("s1");
let damn2=document.getElementById("s2");
let damn3=document.getElementById("s3");
let damn4=document.getElementById("s4");
let damn5=document.getElementById("s5");
let damn6=document.getElementById("s6");
let damn7=document.getElementById("s7");
del.addEventListener('click',function(e){
    e.preventDefault();
    damn.value=" ";

})
del1.addEventListener('click',function(e){
    e.preventDefault();
    damn1.value=" ";

})
del2.addEventListener('click',function(e){
    e.preventDefault();
    damn2.value=" ";

})
del3.addEventListener('click',function(e){
    e.preventDefault();
    damn3.value=" ";

})
del4.addEventListener('click',function(e){
    e.preventDefault();
    damn4.value=" ";

})
del5.addEventListener('click',function(e){
    e.preventDefault();
    damn5.value=" ";

})
del6.addEventListener('click',function(e){
    e.preventDefault();
    damn6.value=" ";

})


    let output=document.querySelector(".output")
const inpf=document.querySelector(".input-fields")
let inputshow=true

let cl=document.querySelector("#click")
cl.addEventListener("click",function(e){
    e.preventDefault()
})




function toggle(){
    
   /* const selectedImage = inp.files[0];

     Create an <img> element to display the user's profile picture
    const profilePic = document.createElement('img');
    profilePic.src = URL.createObjectURL(selectedImage);
    profilePic.alt = 'Profile Picture';

    // Create other resume sections (skills, experience, education, etc.)
    // You can dynamically generate HTML elements here based on user input

    // Append everything to the resume container
    resumeContainer.innerHTML = ''; // Clear existing content
    resumeContainer.appendChild(profilePic);*/
   

   

    if(inputshow){
inpf.style.display="none"

       

inputshow=false

output.innerHTML=`  



<div class="hero">
<div>
<div id="resumeContainer"></div>
</div>
<div>
            <h1 class="h2">${inpf["name"].value}</h1>
            <h3 class="h2">${inpf["title"].value}</h3>
            </div>
       </div>
       <div class="main">
       <div>
       <h2 class="h">WORK EXPERIENCE</h2>
       <p class="new"> ${inpf["workexp"].value}</p>
       <h2 class="h">ACADEMICS</h2>
       <p  class="new">${inpf["academics"].value}</p>
       <h2 class="h">SKILLS</h2>
       <p  class="new">${inpf["skills"].value}</p>
       </div>
       <div>
       <h2 class="h">PROJECTS</h2>
       <p  class="new">${inpf["projects"].value}</p>
       <h2 class="h">ACHIEVEMENTS<h2>
       <p  class="new">${inpf["achievements"].value}</p>
       <h2 class="h">CONTACT</h2>
       <p  class="new">${inpf["contacts"].value}</p>
        </div>
        </div>
        <div class="btn">
        <button onclick="print()" class="yes">Print Resume</button>
  </div>
`
let immm=document.getElementById("resumeContainer");
const files = input.files;
if (!files || files.length === 0) {
    immm.textContent = 'No image selected.';
    return;
}

const file = files[0];

const reader = new FileReader();
reader.onload = function () {
    const base64Data = reader.result;
    displayImage(base64Data);
};
reader.readAsDataURL(file);

function displayImage(base64Data) {
const img = document.createElement('img');
img.src = base64Data;
img.alt = 'Uploaded Image';
img.style.width = "200px";
img.style.height= "200px";
img.style.backgroundColor="grey";

output.appendChild(img);
const existingFirstChild = output.firstChild;

// Insert the new paragraph before the existing first child
output.insertBefore(img, existingFirstChild);}



    }
   
    else{
        inpf.style.display="block"
        
        
  
    
            inputshow=true

    }

             
}
    /* document.getElementById("click").addEventListener("click",function(){
        if(!inputshow){
        document.body.style.backgroundImage="none";}
     })*/

     