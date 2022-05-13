const element = document.getElementById("element"); 

getComputedStyle(element).getPropertyValue("--color-text");
element.style.setProperty("--color-text", "red");

// * CSSOM 
// -Propiedad del objeto getComputedStyle(element)

// Para recuperar una variable CSS 
getComputtedStyle(element).getPropertyValue('--variable')

// Para setear una variable CSS 

element.style.setProperty('--variable', 'valor')

getComputerStyle(document.documentElement);
