var form = document.querySelector("form");


const encodePlainText = (input, output)=>{
  try {
  var plainText = input.value;
  var encodedText = btoa(plainText);
  output.value = encodedText

 } catch (e) {
  input.value = "";
  output.value = "";
  alert(e.stack)
 }
}

var inputField = document.getElementById("input-textarea");
inputField.addEventListener("keyup", ()=>{
 encodePlainText(document.getElementById("input-textarea"), document.getElementById("output-textarea"))
})



form.addEventListener("submit", (e) => {
 e.preventDefault();
 var inputField = document.getElementById("input-textarea");
 var outputField = document.getElementById("output-textarea");
 encodePlainText(inputField, outputField)
})