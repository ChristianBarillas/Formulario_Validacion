window.onload = function () {
  const nombre = document.getElementById("name");
  const correo = document.getElementById("email");
  const coemntario = document.getElementById("comment");
  const boton = document.getElementById("btn");
  const resultado = document.querySelector(".resultado");

  boton.addEventListener("click", (e) => {
    e.preventDefault();
    let error = validarcampo();
    if (error[0]) {
      resultado.innerHTML = error[1];
      resultado.classList.add("red");
    } else {
      resultado.innerHTML = "solicitud enviada con exito";
      resultado.classList.add("green");
      resultado.classList.remove("red");
    }
  });

  const validarcampo = () => {
    let error = [];

    if (nombre.value.length < 5 || nombre.value.length > 40) {
      error[0] = true;
      error[1] = "el nombre no ouede contener menos de 5";
      return error;
    } else if (
      correo.value.length > 40 ||
      correo.value.indexOf("@") == -1 ||
      correo.value.indexOf(".com") == -1
    ) {
      error[0] = true;
      error[1] = "el mail es invalido";
      return error;
    }

    error[0] = false;
    return error;
  };
};
