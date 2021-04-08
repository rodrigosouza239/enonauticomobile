function maskDate( value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{4})?(\d)/g, "$1-$2");
  value = value.replace(/(\d)(\d{2})$/, "$1-$2");
  return value;
}

function maskDateform( value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{4})?(\d)/g, "$1-$2");
  value = value.replace(/(\d)(\d{2})$/, "$1-$2");
  return value;
}

function maskphone( value: string) {
  value = value.replace(/\D/g, "");
  value = value.replace(/^(\d{2})(\d)/g, "($1)$2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
}

export { maskDate,maskDateform,maskphone }