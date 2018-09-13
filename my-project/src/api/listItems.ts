function arrayData(params) {
  let mass = new Array(params[2]);
  for (let y = 0; y < params[2]; y++) {
    mass[y] = [];
    for (let x = 0; x < params[3]; x++) {
      mass[y][x] = {
        x: params[0] + y,
        y: params[1] + x,
        isActive: Math.random() > 0.5,
        text: Math.random() > 0.5 ? '' : Math.round(Math.random()*100),
      };
    }
  }
  return mass;
}

export function getAllList (params) {
  return arrayData(params);
}
