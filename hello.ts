function greeter(person) {
  return "Hello " + person;
}
var user = "hendy";

function tambah(angka1: number, angka2: number): number {
  return angka1 + angka2;
}
document.body.innerHTML = greeter(user) + "<br> <h1>10 + 20  = " + tambah(10, 20) + "<h1>";
