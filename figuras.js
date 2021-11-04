//Codigo del cudrado
console.group("Cuadrado");

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}

perimetroCuadrado();

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

//Codigo del triángulo
console.group("Triangulo");
const ladoTraingulo1 = 6;
// const ladoTraingulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//   "Los lados del triángulo miden: " +
//     ladoTraingulo1 +
//     "cm, " +
//     ladoTraingulo2 +
//     "cm, " +
//     baseTriangulo +
//     "cm"
// );
// const alturaTrangulo = 5.5;
// console.log("La alturta del triángulo es de: " + alturaTrangulo + " cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// console.log(
//   "El perimetro del triángulo es de: " +
//     (ladoTraingulo1 + ladoTraingulo2 + baseTriangulo) +
//     " cm"
// );

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log("El area del trangulo es: " + areaTriangulo + " cm^2");
console.groupEnd();

//Codigo del Círculo
console.group("Circulo");
//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");

function diametroCirculo(radio) {
  return radio * 2;
}

//Pi
const pi = Math.PI;
console.log("El PI: " + pi);
//Círcunferecia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}
// const perimetroCirculo = diametroCirsulo * pi;
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");
//Area

function areaCirculo(radio) {
  return radio * radio * pi;
}
// const areaCirculo = radioCirculo * radioCirculo * pi;
// console.log("El area del circulo es: " + areaCirculo + " cm^2");
console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
