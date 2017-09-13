 export default () => {
  return (input, simbol) => {
    let fv = input;
    let out= "";
    if (typeof input === 'number') {
      fv = input.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      out = simbol ? simbol +  fv : fv;
      return out;
    } else if (typeof input === 'string') {
      fv = input.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      out = simbol ? simbol +  fv : fv;
      return out
    }else{
      return fv;
    }

  }
}
