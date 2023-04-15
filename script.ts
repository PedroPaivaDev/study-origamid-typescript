function toNumber(value: number | string) {
  if(typeof value === 'number') {
    return value;
  } else if(typeof value === 'string') {
    return Number(value);
  } else {
    throw new Error("value deve ser um número ou uma string");    
  }
}

console.log(toNumber(Number(true)))