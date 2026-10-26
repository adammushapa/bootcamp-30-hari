const daftarTransaksi = [
  { keterangan: "Gaji", jumlah: 5000000, jenis: "masuk" },
  { keterangan: "Makan", jumlah: 50000, jenis: "keluar" },
  { keterangan: "Transport", jumlah: 30000, jenis: "keluar" }
];

function hitungSaldo(daftar) {
  let saldo = 0;

  for (const transaksi of daftar) {
    if (transaksi.jenis === "masuk") {
      saldo += transaksi.jumlah;
    } else if (transaksi.jenis === "keluar") {
      saldo -= transaksi.jumlah;
    }
  }

  return saldo;
}

function formatRupiah(angka) {
  return `Rp ${angka.toLocaleString("id-ID")}`;
}

function totalPengeluaran(daftar) {
  let total = 0;

  for (const transaksi of daftar) {
    if (transaksi.jenis === "keluar") {
      total += transaksi.jumlah;
    }
  }

  return total;
}

console.log("Saldo akhir:", formatRupiah(hitungSaldo(daftarTransaksi)));

console.log("Total pengeluaran:", formatRupiah(totalPengeluaran(daftarTransaksi)));