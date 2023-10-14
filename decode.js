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


// var text = window.location;
// var nt = new URLSearchParams(text.search)
// console.log(nt.get("id"));
// nt.append("id", "hellosnsn")
// console.log(nt.getAll("id"));
// console.log(nt);
// console.log(tex3t.href);
// console.log(nt.has("id"));
// console.log(new URLSearchParams);