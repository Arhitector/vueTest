let x = new Array(35);
for (let i = 0; i < x.length; i++) {
  x[i] = [];
  for (let z = 0; z < x.length/3; z++) {
    x[i][z] = {
      x: i,
      y: z,
      isActive: Math.random() > 0.5,
      text: Math.random() > 0.5 ? '' : Math.round(Math.random()*100),
    };
  }
}
module.exports = x;
