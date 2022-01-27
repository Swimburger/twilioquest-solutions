const allowedColors = ['red', 'blue', 'yellow'];  
function isAllowedColor(color){
  if(allowedColors.indexOf(color) === -1) throw "Color not allowed";
}
class Ducktypium{
  color;
  calibrationSequence = [];
  constructor(color)
  {
    isAllowedColor(color);
    this.color = color;
  }

  refract(color){
    isAllowedColor(color);
    if(color === this.color) return color;
    let colors = [color, this.color].sort();
    if(colors[0] === 'blue' && colors[1] === 'red') return 'purple';
    if(colors[0] === 'red' && colors[1] === 'yellow') return 'orange';
    if(colors[0] === 'blue' && colors[1] === 'yellow') return 'green';
  }

  calibrate(numbers){
    this.calibrationSequence = numbers.sort().map(n => n*3);
  }
}