let input = window.prompt("Introduce el mensaje a codificar:");
let output = "";

for (let i = 0; i < input.length; i++) {
    let charCode = input.charCodeAt(i);

    if (charCode >= 65 && charCode <= 90) {
        output += String.fromCharCode((charCode - 65 + 1) % 26 + 65);
    } else if (charCode >= 97 && charCode <= 122) {
        output += String.fromCharCode((charCode - 97 + 1) % 26 + 65);
    } else if (charCode >= 48 && charCode <= 57) {
        output += String.fromCharCode((charCode - 48 + 1) % 10 + 48);
    } else {
        output += input[i];
    }
}

document.getElementById("mensaje").innerText = output;
