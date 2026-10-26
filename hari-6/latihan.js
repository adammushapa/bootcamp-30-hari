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

function kategoriSaldo(saldo) {
    if (saldo >= 10000000) {
        return "Besar";
    } else if (saldo >= 1000000) {
        return "Sedang";
    } else {
        return "Kecil";
    }
}

console.log(kategoriSaldo(15000000));
console.log(kategoriSaldo(2500000));
console.log(kategoriSaldo(300000));

const belanja = [15000, 32000, 8500, 21000];
let total = 0;

for (const harga of belanja) {
    total += harga;
}

console.log(`Total belanja: ${total}`);
console.log(`Jumlah item: ${belanja.length}`);

belanja.push(12000);
console.log(belanja.length);

const transaksi = {
    id: 1,
    keterangan: "Beli ATK",
    jumlah: 75000,
    lunas: true
};

console.log(transaksi.keterangan);
transaksi.jumlah = 80000;
console.log(transaksi);