export const validateNewUser = (
  name,
  email,
  password,
  password_confirmation
) => {
  if (!name) {
    return "El campo Nombres es requerido.";
  }

  if (password !== password_confirmation) {
    return "Es password y su confirmacion no son iguales.";
  }

  return validateCredentials(email, password);
};

export const validateCredentials = (email, password) => {
  if (!email || !password) {
    return "Los campos Email y password son requeridos.";
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return "El Email no tiene un formato valido.";
  }

  if (!(password.length >= 8)) {
    return "La longitud minima del password son 8 caracteres.";
  }

  return null;
};
