// Nomor 1
let IT = ['Software developer', 'web developer', 'Mobile apps developer', 'Game developer', 'Database administrator', 'Security engineer'];

console.log(IT.length);
console.log(IT);

document.getElementById('demo').innerHTML = IT.length;
document.getElementById('demo1').innerHTML = IT;

// Nomor 2
let totalTeam = ['Maulana', 'Firsty', 'Sarah', 'Aditya', 'Shella', 'Bagas', 'Aldi', 'Lazzaro', 'Trio', 'Rodhiyah', 'roni'];

let team1 = totalTeam.slice(0, 6);
let team2 = totalTeam.slice(7, 11);

console.log('team', team1, team2);

document.getElementById('demo2').innerHTML = team1;
document.getElementById('demo3').innerHTML = team2;

// Nomor 3
let ganjil = [3, 5, 7, 9, 11];

let rumus = ganjil.map((num) => {
  return num * 5;
});
console.log(rumus);

document.getElementById('demo4').innerHTML = rumus;

// //No.4
const pelajaran1 = ['Math', 'English', 'Programming'];
const pelajaran2 = ['Geography', 'Spanish', 'Programming'];

function CekPelajaran(pelajaran1, pelajaran2) {
  return pelajaran1.some((item) => pelajaran2.includes(item));
}

CekPelajaran(pelajaran1, pelajaran2);

document.getElementById('demo5').innerHTML = CekPelajaran(pelajaran1, pelajaran2);
