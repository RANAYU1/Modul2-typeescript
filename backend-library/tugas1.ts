export {};


interface Siswa {
    id: number;
    nama: string;
    kelas: string;
}
const siswa1: Siswa = {
    id: 1,
    nama: "Budi Santoso",
    kelas: "XI-RPL-1"
};
console.log(siswa1);

function hitungUmur(tahunLahir: number): number {
    const tahunSekarang: number = new Date().getFullYear();
    return tahunSekarang - tahunLahir;
}
const hasilUmur = hitungUmur(2008);
console.log(`Umur siswa adalah: ${hasilUmur} tahun`);