import math
print("""<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
  "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">

<path transform="scale(32) translate(5, 5)" d="M 1 0 l -1 0"
  stroke="red" fill="white" stroke-width="0.05" fill-opacity="0.0"/>
""")

print("""
<path transform="scale(32) translate(5, 5)" d="M 1 0
""")
dir = 'h'
dist = 1
print("%s %s" % (dir, dist))
for i in range(1, 13):
    dir = 'h' if dir == 'v' else 'v'
    dist = dist * math.pi / i
    if i % 2 == 1:
        dist = -dist
    print("%s %s" % (dir, dist))
print(""""
  stroke="black" fill="white" stroke-width="0.05" fill-opacity="0.0"/>
""")

print("""
</svg>""")
