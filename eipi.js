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

function getPointsAsLabels(points, scale) {
  var labels = [];
  points.forEach(function(p, index, array) {
    if (index > 0) {
      var prevP = points[index - 1];
      var midx = scale * (p.x + prevP.x) / 2;
      var midy = scale * (p.y + prevP.y) / 2;
      var len = scale * Math.abs((index % 2 == 0) ? p.y - prevP.y : p.x - prevP.x);
      var nudgex = 0;
      var nudgey = 0;
      switch ((index - 1) % 4) {
        case 0:
          nudgey = len / 10;
          break;
        case 1:
          nudgex = len / 10;
          break;
        case 2:
          nudgey = -len / 10;
          break;
        case 3:
          nudgex = -len / 10;
          break;
        default:
      }
      if (index == 1) {
        nudgey = len / 5; // special case
      }
      midx += nudgex;
      midy += nudgey;
      labels.push({i: index - 1, midx: midx, midy: midy, len: len});
    }
  });
  return labels;
}