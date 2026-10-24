//input umur dengan readline 
const readline = require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
rl.question("Masukkan angka pertamaa: ", function(angka1) {
    angka1 = Number(angka1);
    console.log();

rl.question("Masukkan angka kedua: ", function(angka2) {
    angka2 = Number(angka2);
    console.log();
    console.log();
    console.log("Hasil Penjumlahan: " + ((angka1) + angka2));
    console.log("Hasil Pengurangan:" + ((angka1) - angka2));
    console.log("Hasil Perkalian:" + ((angka1) * angka2));
    console.log("Hasil Pembagian:" + ((angka1) / angka2));
    console.log("Hasil Modulus:" + ((angka1) % angka2));
    console.log("Hasil Pemangkatan:" + ((angka1) ** angka2));
    console.log();
    console.log();
    console.log("Hasil Perbandingan: ");
    console.log("1. " + (angka1 > angka2));
    console.log("1. " + (angka1 < angka2));
    console.log("1. " + (angka1 >= angka2));
    console.log("1. " + (angka1 <= angka2));
    console.log("1. " + (angka1 == angka2));
    console.log("1. " + (angka1 !== angka2));
    rl.close();

    let umur = 18;
    let punyaktp = true;
    console.log((umur >= 17 && punyaktp===true)===true);
    console.log((umur <= 17 && punyaktp===false)===false);
    console.log((umur = 17 && punyaktp===true)===true);

    if(umur >= 17){
        console.log("Anda Sudah TUA");
    } else {
        console.log("Anda Masih Muda");
    }
    })})
