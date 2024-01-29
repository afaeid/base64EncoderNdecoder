var form = document.querySelector("form");

const decodeEncodedText = (input, output)=>{
  try {
  var encodedText = input.value;
  var plainText = atob(encodedText);
  output.value = plainText;

 } catch (e) {
  input.value = "";
  output.value = "";
  alert(e.stack)
 }
}

var inputField = document.getElementById("input-textarea");
inputField.addEventListener("keyup", ()=>{
 decodeEncodedText(document.getElementById("input-textarea"), document.getElementById("output-textarea"))
})

form.addEventListener("submit", (e) => {
 e.preventDefault();
 var inputField = document.getElementById("input-textarea");
 var outputField = document.getElementById("output-textarea")
 decodeEncodedText(document.getElementById("input-textarea"), document.getElementById("output-textarea"))
})


/*Hello*/