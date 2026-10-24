let angka = 1;

while (angka <= 5) { //akan terus diulang selama angka kurang/sama dengan 5
    console.log(angka); //menampilkan angka
    angka = angka + 1;
}
angka = 1;

angka = 10
do{
    console.log(angka);
    angka = angka -1;
}while (angka >= 1);

console.log("---for---");
"dekralasi"
for(let angka = 3; angka <= 7; angka = angka+1){ "angka"
    console.log(angka);
}

console.log("---Array---");
let nama =["Audero", "Diks", "Idzes"]
console.log(nama);
console.log(nama[0]);
console.log(nama[1]);

console.log("---Array Penggunaan Input---");
    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let namaMahasiswa = [];
    rl.question("Massukan nama Mahasiswa Pertama: ", function(nama1){  StylePropertyMapReadOnly
        rl.question("Massukan nama Mahasiswa Kedua: ", function(nama2){
            rl.question("Massukan nama Mahasiswa Ketiga: ", function(nama3){
                rl.question("Massukan NPM Mahasiswa Pertama: ", function(NPM1){
                    rl.question("Massukan NPM Mahasiswa Kedua: ", function(NPM2){
                        rl.question("Massukan NPM Mahasiswa Ketiga: ", function(NPM3){
                        })
                    })
                })
            })
        })
    })

    console.log("---Array---")
    let NPM =["2529220000", "2529200002", "2529200086"]
console.log(NPM);
console.log(NPM[0]);
console.log(NPM[1]);