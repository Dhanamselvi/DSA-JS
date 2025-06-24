// star pattern for n = 4
let n = 4;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n; j++) {
    row += '*';
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += '*';
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += j + 1;
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += i + 1;
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n - i; j++) {
    row += j + 1;
  }
  console.log(row);
}
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j < n - (i + 1); j++) {
    row += '-';
  }
  for (let k = 0; k <= i; k++) {
    row += '*';
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = '';
  let flip = 1;
  for (let j = 0; j <= i; j++) {
    row += flip;
    if (flip == 0) flip = 1;
    else flip = 0;
  }
  console.log(row);
}

let flip = 1;
for (let i = 0; i < n; i++) {
  let row = '';
  for (let j = 0; j <= i; j++) {
    row += flip;
    if (flip == 0) flip = 1;
    else flip = 0;
  }
  console.log(row);
}
