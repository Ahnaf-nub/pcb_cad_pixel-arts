const t = new bt.Turtle();
const b = new bt.Turtle();
const height = -209;
const width = 227;
setDocDimensions(width, height);

b.jump([bt.randInRange(-150, -100), bt.randInRange(-70, -60)]);
b.forward(bt.randInRange(40, 50));
b.left(bt.randInRange(240, 270));
b.forward(bt.randInRange(20, 30));
b.arc(bt.randInRange(230, 250), bt.randInRange(90, 100));
b.right(bt.randInRange(-10, 10));
b.forward(bt.randInRange(-5, 5));
b.left(bt.randInRange(350, 360));
b.arc(bt.randInRange(5, 10), bt.randInRange(70, 80));
b.right(bt.randInRange(-10, 10));
b.forward(bt.randInRange(0, 5));
b.arc(bt.randInRange(70, 80), bt.randInRange(60, 70));
b.right(bt.randInRange(-15, 15));
b.forward(bt.randInRange(0, 5));
b.left(bt.randInRange(-10, 10));
b.right(bt.randInRange(-5, 5));
b.arc(bt.randInRange(5, 10), bt.randInRange(290, 310));
b.right(bt.randInRange(-10, 10));
b.forward(bt.randInRange(0, 5));
b.arc(bt.randInRange(150, 170), bt.randInRange(50, 70));
b.left(bt.randInRange(-10, 10));
b.forward(bt.randInRange(-5, 5));
b.arc(bt.randInRange(50, 60), bt.randInRange(50, 60));
b.left(bt.randInRange(10, 20));
b.forward(bt.randInRange(-5, 5));
b.arc(bt.randInRange(120, 130), bt.randInRange(50, 60));
b.right(bt.randInRange(-15, 15));
b.forward(bt.randInRange(0, 5));
b.arc(bt.randInRange(0, 10), bt.randInRange(50, 60));
b.left(bt.randInRange(10, 20));
b.forward(bt.randInRange(10, 20));
b.arc(bt.randInRange(200, 220), bt.randInRange(30, 40));

// Move turtle t with random movements
t.forward(bt.randInRange(0, 5));
t.right(bt.randInRange(-360, -340));
t.forward(bt.randInRange(160, 180));
t.left(bt.randInRange(230, 250));
t.forward(bt.randInRange(160, 180));

// Draw the lines
drawLines(t.lines());
drawLines(b.lines());
