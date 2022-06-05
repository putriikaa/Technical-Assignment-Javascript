/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
// /// EDIT HERE

// for (let i = 1; i <= 100; i++) {
// let terbagi = 0;
// for (let j = 1; j <= i; j++) {
// if (i % j == 0) {
// terbagi++;
// }
// }
// if (terbagi == 2) {
// document.write(i+"<br>"); 
// }
// }

        
    
// /// Soal - 02
// /// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop 
// let primeCounter = 0;
// let fiftiethPrime;
// let angka = 2;

// // // /// EDIT HERE

// while(primeCounter < 50) {
// if (primeChecker(angka) == true) {
// primeCounter += 1;
// console.log("primecounter " + primeCounter);
// }
// if (primeCounter < 50) {
// angka += 1; 
// }
// }

// fiftiethPrime = angka;
// console.log(fiftiethPrime);

// function primeChecker(angka) {
// let prima = true;
// for(let i = 2; i < angka; i++) {
// if (angka % i == 0) {
// prima = false;
// break;
// }
// }
// return prima;
// }

// //Soal - 03
// //Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop
let oddCounter = 0;
let fiftiethOdd;
let angka = 0;

// /// EDIT HERE
// // let oddCounter = 0;

// do{
//     if(!(angka % 2 == 0)) {
//         oddCounter += 1;
//     }
//     if(oddCounter < 50) {
//         angka += 1;
//     }   
//     else {
//         fiftiethOdd = angka;
//     }
// }
// while(oddCounter < 50)
// console.log(fiftiethOdd);