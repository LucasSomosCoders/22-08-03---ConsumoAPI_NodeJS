import fetch from "node-fetch";

fetch("https://api.generadordni.es/v2/profiles/person")
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
    let i = 0;
    while (i < data.length) {
      console.log("\n");
      console.log(`Persona N°${i + 1}`);
      console.log(`Nombre: ${data[i].name}`);
      console.log(`Apellido: ${data[i].surname}`);
      console.log(`Segundo Apellido: ${data[i].surnname2}`);
      console.log(`Genero: ${data[i].gender}`);
      i++;
    }
  });
