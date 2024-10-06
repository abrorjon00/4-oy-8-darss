// For sikl operatoriga oid
// 1-masala
// for (let i = 1; i<= 50; i++) {
//     if ( i % 5 == 0) {
//         console.log("5ga bolinadi");

//     }
//     if (i % 3 == 0) {
//         console.log("3ga bolinadi");

//     } if (i % 3 == 0 && i % 5 == 0) {
//         console.log("3ga va 5ga bolinadi");

//     }


// }

// 2-masala


// let sum = 0;

// for (let i = 30; i <= 70; i++) {
//  if ( i % 2 === 0) {
//     sum += i
//  }
// }

// console.log(sum);


// 3-masala
// let toqs = 0;
// let manfiy = 0;
// for (let i = -20; i <= 20; i++) {
//     if ( i % 2 == 1) {
//         toqs++
//     }
//     if ( i > 0) {
//         manfiy++
//     }
// }
// console.log(toqs, manfiy);

// 4-masala

// for ( let i = 1; i <= 100; i++) {
//     if (i % 2 == 0 && i % 7 == 0) {
//         console.log("Maxsus son");

//     } 
// }

// Break va continue ga oid masalalar

// 1-masala

// for (let i = 1; i <= 100; i++) {
//     if (i == 25) {
//         break
//     }
//     console.log(i);
// }

// 2-masala
//  for ( let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         continue
//     }
//     console.log(i);

//  }

// 3-masala

// for ( let i = 1; i <= 50; i++) {
//     if ( i == 30) {
//         break
//     }
//     console.log(i);

// }



// Switchga iod masalalar

// 1-masala
// let num = +prompt("Hafta kunini kiriting...")
// switch (num) {
//     case 1:
//         console.log("Dushanba");
//         break;
//     case 2:
//         console.log("Seshanba");
//         break;
//     case 3:
//         console.log("Chorshanba");
//         break;
//     case 4:
//         console.log("Payshanba");
//         break;
//     case 5:
//         console.log("Juma");
//         break;
//     case 6:
//         console.log("Shanba");
//         break;
//     case 7:
//         console.log("Yakshanba");
//         break;
//     default:
//         console.log("Bunday hafta kuni yoq");
//             break;
// }

// 2-masala

// let num = +prompt("Oy kunini kiriting...")
// switch (num) {
//     case 1:
//         console.log("Yanvar oyi va Qish fasli");
//         break;
//     case 2:
//         console.log("Fevral oyi va Qish fasli");
//         break;
//     case 3:
//         console.log("Mart oyi va Bahor fasli");
//         break;
//     case 4:
//         console.log("Aprel oyi va Bahor fasli");
//         break;
//     case 5:
//         console.log("May oyi va Bahor fasli");
//         break;
//     case 6:
//         console.log("Iyun oyi va Yoz fasli");
//         break;
//     case 7:
//         console.log("Iyul oyi va Yoz fasli");
//         break;
//     case 8:
//         console.log("Avgust oyi va Yoz fasli");
//         break;
//     case 9:
//         console.log("Sentiyabr oyi va Kuz fasli");
//         break;
//     case 10:
//         console.log("Oktiyabr oyi va Kuz fasli");
//         break;
//     case 11:
//         console.log("Noyabr oyi va Kuz fasli");
//         break;
//     case 12:
//         console.log("dekabr oyi va Qish fasli");
//         break;
//     default:
//         console.log("Bunday oy  yoq");
//         break;
// }

// 3-masala

// let a = +prompt("Baholash tizimi..")

// switch (a) {
//     case 1:
//         console.log("Juda yomon");
//         break;
//     case 2:
//         console.log(" Yomon");
//         break;
//     case 3:
//         console.log("Qoniqarli");
//         break;
//     case 4:
//         console.log("Yaxshi");
//         break;
//     case 5:
//         console.log("Alo");
//         break;

//     default:
//         console.log("Bunday baholash tizimi yoq");

//         break;
// }

// 4-masala

// let a = +prompt(" Elektr energiyasi kiriting...")
// switch (a) {
//     case 1:
//         console.log("Ekonom");
//         break;
//     case 2:
//         console.log("Standart");
//         break;
//     case 3:
//         console.log("Premium");
//         break;
//     default:
//         console.log("Bunday  Elektr energiyasi yoq");
//         break;
// }

// 5-misol

// let a = +prompt(" Elektr energiyasi kiriting...")
// switch (a) {
//     case 1:
//         console.log("Olma");
//         break;
//     case 2:
//         console.log("Apelsin");
//         break;
//     case 3:
//         console.log("Banan");
//         break;
//     case 4:
//         console.log("Uva");
//         break;
//     default:
//         console.log("Bunday  Meva narxini yoq");
//         break;
// }

// 6-misol

// let a = +prompt(" parolini tasdiqlash kiriting...")
// switch (a) {
//     case 1:
//         console.log(" Parolni tiklash");
//         break;
//     case 2:
//         console.log("Parolni o'zgartirish");
//         break;
//     case 3:
//         console.log("Chiqish");
//         break;
   
//     default:
//         console.log("Bunday Parolni tasdiqlash yoq");
//         break;
// }



// While ga oid masalalar

// 1-masala
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++
//     }


// 2-masala

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--
//     }

// 3-masala

// let number = +prompt("Sonni kiriting...")
// while (number < 0 ) {
//     alert("Musbat son kiriting...")
//     number = +prompt("Son kiriting...")
// }

// 4-masala

// let i = 1;
// while (i <= 20) {
//     if ( i % 2 == 0) {
//         console.log(i);
        
//     }
//     i++
// }

// 6-misol

// let son = +prompt("son"); 

// while (son >= 1) {
//   console.log(son); 
//   son = son / 2;    
// }

// 7-misol


// let i = 1;
// while(i <= 50) {
//     if (i % 2 == 1) {
//         console.log(i);
        
//     }
//     i++
// }

// 8-misol

// let a = +prompt("Boshlangich son");
// let b = +prompt(" Yakuniy son" );
// let i = a;
// while(i <= b) {
//     if (i % 3 == 0) {
//         console.log(i);
        
//     }
//     i++;
// }

// 9-misol

// let son = 1234; 
// let teskari = 0;

// while (son > 0) {
//   let raqam = son % 10;   
//   teskari = teskari * 10 + raqam; 
//   son = Math.floor(son / 10);     
// }

// console.log(teskari); 

// 11-misol

// let son = 234; 
// let kopaytma = 1;

// while (son > 0) {
//   let raqam = son % 10;    
//   kopaytma *= raqam;
//   son = Math.floor(son / 10);   
// }

// console.log(kopaytma); 




// Do whilega oid

// 1-masala
// let i = 1;
// do {
//     console.log(i);
//     i++
// } while (i <= 10);

// 2-misol

// let i = 1;
// do {
//     if (i % 2 == 0) {
//         continue
//     }
//     console.log(i);
    
//     i++;

// } while (i <= 20);


