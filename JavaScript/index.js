let animal;
function ingreseEdad (){
    return parseInt (prompt ("Ingrese la edad"));

}
const edadPerro = 16
const edadGato = 15
const edadConejo = 32


while (true) {
    animal = prompt ("Ingrese si es perro, gato o conejo").toLowerCase();

    if (animal === "perro") {
        let edad = ingreseEdad();
        alert ("La edad del perro es de " + edad * edadPerro + " años");
        break;
    } else if (animal === "gato") {
        let edad = ingreseEdad();
        alert ("La edad del gato es de " + edad * edadGato + " años");
        break;
    }else if (animal === "conejo") {
        let edad = ingreseEdad();
        alert ("La edad del conejo es de " + edad * edadConejo + " años");
        break;
    }else {
        alert ("Ingrese un animal válido")
    }
}












