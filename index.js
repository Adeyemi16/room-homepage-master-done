const btnb = document.getElementById('btnb');
btnb.addEventListener('click', () => {
    const imgA = document.getElementById("imgA");
    imgA.classList.add("imgB")
    imgA.classList.remove("imgA")

    const textb = document.getElementById("textb").innerHTML;
   const text= document.getElementById("text").innerHTML = textb;
    }
)

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    const imgA = document.getElementById("imgA");
    imgA.classList.add("imgA")
    imgA.classList.remove("imgB")

    const textc = document.getElementById("textc").innerHTML;
   const text= document.getElementById("text").innerHTML = textc;
})

const svgbtna = document.getElementById("svgbtna");
svgbtna.addEventListener('click', ()=>{
  const ul = document.getElementById("ul");
  ul.classList.add("ulb");
  ul.classList.remove("ula")
} )


const svgbtnb = document.getElementById("svgbtnb");
svgbtnb.addEventListener('click', ()=>{
  const ul = document.getElementById("ul");
  ul.classList.add("ula");
  ul.classList.remove("ulb")
} )