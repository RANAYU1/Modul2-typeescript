const siswa1 = {
    id: 1,
    nama: "Budi Santoso",
    kelas: "XI-RPL-1"
};
console.log(siswa1);
function hitungUmur(tahunLahir) {
    const tahunSekarang = new Date().getFullYear();
    return tahunSekarang - tahunLahir;
}
const hasilUmur = hitungUmur(2008);
console.log(`Umur siswa adalah: ${hasilUmur} tahun`);