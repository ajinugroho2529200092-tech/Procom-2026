let angka = 2;

while (angka <= 40) { //akan terus diulang selama angka kurang/sama dengan 5
    console.log(angka); //menampilkan angka
    angka = angka + 2;
}
// angka = 2;

// angka = 40

console.log("---Array---");
let Alamat =["Jalan Rajawali ", "Jalan Tembok Baru ", "Kenten Laut "]
console.log(Alamat);
console.log(Alamat[0]);
console.log(Alamat[1]);



    console.log("---Array---")
    let NomorRumah =["14", "7", "86"]
console.log(NomorRumah);
console.log(NomorRumah[0]);
console.log(NomorRumah[1]);

function HitungHargaDiskon(HargaAsli,Diskon){
     var HargaDiskon=HargaAsli*Diskon;
     var HargaTotal=HargaAsli-HargaDiskon;
    console.log(`Harga Setelah Diskon Adalah = ${HargaTotal} IDR`)
    
}
HitungHargaDiskon(45000,0.05)
