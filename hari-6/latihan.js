const nama = "Adam";
let saldo = 1000000;
saldo = saldo + 500000;

console.log("Halo, " + nama);
console.log(`Saldo sekarang: ${saldo}`);
console.log(typeof nama);
console.log(typeof saldo);

function hitungPajak(harga, persen) {
    return harga * persen / 100;    
}

const totalBayar = (harga, persen) => harga + hitungPajak(harga, persen);

console.log(hitungPajak(200000,10));
console.log(totalBayar(200000, 10));