const formatearDinero = (valor) => {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });
  return formatter.format(valor);
};

const formatearFecha = (date) => {
  const dateFormatter = new Intl.DateTimeFormat("es-MX", {
    dateStyle: "full",
    timeStyle: "long",
  });
  return dateFormatter.format(date);
};

const calcularTotalPagar = (cantidad, plazo) => {
  let total;
  //Mientras mayor es la cantidad, menor es el interes
  if (cantidad < 5000) {
    total = cantidad * 1.5;
  } else if (cantidad >= 5000 && cantidad < 10000) {
    total = cantidad * 1.4;
  } else if (cantidad >= 10000 && cantidad < 15000) {
    total = cantidad * 1.3;
  } else {
    total = cantidad * 1.2;
  }
  //Plazo + plazo mayor interés
  if (plazo === 6) {
  } else if (plazo === 6) {
    total *= 1.1;
  } else if (plazo === 12) {
    total *= 1.2;
  } else if (plazo === 18) {
    total *= 1.3;
  } else if (plazo === 24) {
    total *= 1.4;
  } else {
    total *= 1.5;
  }
  return total;
};

export { formatearDinero, formatearFecha, calcularTotalPagar };
