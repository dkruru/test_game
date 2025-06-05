const abilities = [
  {name: 'Extra Ball', apply: () => { extraBalls.push({x:x, y:y, dx:dx, dy:dy}); }},
  {name: 'Multi Ball', apply: () => { extraBalls.push({x:x, y:y, dx:dx, dy:dy}); extraBalls.push({x:x, y:y, dx: -dx, dy: dy}); }},
  {name: 'Random Bounce', apply: () => { randomBounce = true; }},
  {name: 'Extra Life', apply: () => { lives++; }},
  {name: 'Paddle Expand', apply: () => { paddleWidth += 20; }},
  {name: 'Paddle Shrink', apply: () => { paddleWidth = Math.max(20, paddleWidth-20); }},
  {name: 'Speed Up Ball', apply: () => { dx*=1.5; dy*=1.5; extraBalls.forEach(b=>{b.dx*=1.5; b.dy*=1.5;}); }},
  {name: 'Slow Down Ball', apply: () => { dx*=0.7; dy*=0.7; extraBalls.forEach(b=>{b.dx*=0.7; b.dy*=0.7;}); }},
  {name: 'Sticky Paddle', apply: () => { stickyPaddle = true; }},
  {name: 'Piercing Ball', apply: () => { piercing = 5; }},
  {name: 'Bottom Shield', apply: () => { bottomShield += 1; }},
  {name: 'Big Ball', apply: () => { ballRadius += 2; }},
  {name: 'Small Ball', apply: () => { ballRadius = Math.max(2, ballRadius-2); }},
  {name: 'Reverse Controls', apply: () => {
    [leftPressed, rightPressed] = [rightPressed, leftPressed];
    document.addEventListener('keydown', e => {
      if(e.key=='d'||e.key=='D') leftPressed=true; else if(e.key=='a'||e.key=='A') rightPressed=true;
    },{once:true});
  }},
  {name: 'Paddle Speed Up', apply: () => { paddleSpeed += 2; }},
  {name: 'Paddle Slow Down', apply: () => { paddleSpeed = Math.max(1, paddleSpeed-2); }},
  {name: 'Score Bonus', apply: () => { score += 50; }},
  {name: 'Random Paddle Size', apply: () => { paddleWidth = Math.floor(40+Math.random()*60); }},
  {name: 'Fireball', apply: () => { dx*=2; dy*=2; setTimeout(()=>{dx*=0.5; dy*=0.5;},3000); }},
  {name: 'Teleport Ball', apply: () => { x=Math.random()*canvas.width; y=canvas.height/2; extraBalls.forEach(b=>{b.x=x; b.y=y;}); }}
];
