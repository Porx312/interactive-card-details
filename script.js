const form = document.querySelector("#form-credits--cards");
const numberCredits = document.querySelector("#number-credits-card");
const nameCard = document.querySelector(".name-card");
const vencimentCardMonth = document.querySelector(".date-venciment-month");
const vencimentCardYear = document.querySelector(".date-venciment-Year");
const cvcPassword = document.querySelector(".cvc-password")

form.addEventListener("input", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("input-card-number")) {
    const input = e.target.value.replace(/\s/g, "").substring(0, 19);
    const formattedInput = input.replace(/\D/g, "")
                               .replace(/(\d{4})(?=\d)/g, "$1 ")
                               .trim();
    numberCredits.textContent = formattedInput;
  }
  if (e.target.classList.contains("input-name-card")) {
    const cardNameE =  e.target.value.substring(0, 30);
    nameCard.textContent = cardNameE
  }
  if (e.target.classList.contains("mes-input")) {
    const monthInput = e.target.value.replace(/\D/g, "").substring(0, 2);
    vencimentCardMonth.textContent = monthInput;
  }
  if (e.target.classList.contains("anio-input")) {
    const yearInput = e.target.value.replace(/\D/g, "").substring(0, 2);
    vencimentCardYear.textContent = yearInput;
  }
  if (e.target.classList.contains("cvc-input")) {
    const cvcInput = e.target.value.replace(/\D/g, "").substring(0, 3);
    cvcPassword.textContent = cvcInput;
  }
});
const messageSucess = document.querySelector(".mensagge-sucess")

let success = false;
console.log(success)
form.addEventListener("submit",(e)=>{
e.preventDefault();
if(!success){
success = true;
form.innerHTML = "";
messageSucess.innerHTML = `
<img class="emoticon-confirm" src="./images/icon-complete.svg" alt="">
<h2 class="thankiu">Thank You!</h2>
<h3 class="details-text-comfirm">We've added your card details </h3>
<button onclick="message()" class="btn-continue">Continue</button>
`
console.log(success)
}
})
function message(e){ 
  if(success){
  messageSucess.innerHTML = ''
  form.innerHTML = `
  <label for="nombre">CALHOLDER NAME</label>
  <input type="text" placeholder="  e.g. Jane Appleseed
  " id="nombre" class="input-name-card" name="nombre" required max="10"><br>

  <label for="numero_tarjeta">CARD NUMBER</label>
  <input type="text" placeholder="  e.g. 1234 5678 9123 0000" id="numero_tarjeta" class="input-card-number" pattern="[0-9]{16}" required maxlength="16+"><br>

 <div class="exp-cvc-label">
  <label for="fecha_expiracion">Exp. Date(MM/YY)</label>
  <label for="codigo_seguridad">CVC</label>
 </div>
  <div class="cvc-year">
    <input class="mes-input" type="text" id="mes"  placeholder="MM" name="mes" pattern="(0[1-9]|1[0-2])" required maxlength="2">
    <input class="anio-input" type="text" placeholder="YY" id="ano" name="ano" pattern="[0-9]{2}" required maxlength="2">
    <input class="cvc-input" type="text" placeholder="e.g. 123" id="codigo_seguridad" name="codigo_seguridad" pattern="[0-9]{3,4}" required maxlength="3"><br>
  </div>
 

  <input class="input-submit" type="submit" value="Confirm">
  `
  success = false
  console.log(success)
  }
}