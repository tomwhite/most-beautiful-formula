function getPoints(steps) {
  var points = [];
  var horiz = true;
  var x = 1;
  var y = 0;
  points.push({x: x, y: y});
  var dist = 1;
  x += dist;
  points.push({x: x, y: y});
  for (var i = 1; i < steps; i++) {
    horiz = !horiz;
    dist = dist * Math.PI / i;
    if (i % 2 == 1) {
      dist = -dist;
    }
    if (horiz) {
      x += dist;
    } else {
      y += dist;
    }
    points.push({x: x, y: y});
  }
  return points;
}

function getPointsAsPath(points, scale) {
  var d = "";
  points.forEach(function(p, index, array) {
    d += (d.length == 0 ? "M" : "L") + " " + (scale * p.x) + " " + (scale * p.y) + " ";
  });
  return d;
}