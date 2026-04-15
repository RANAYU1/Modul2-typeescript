"use strict";
let nama = "Budi";
let umur = 17;
let aktif = true;
console.log(nama, umur, aktif);
function login(username, password) {
    return username === "admin" && password === "admin";
}
console.log(login("admin", "admin"));
const user = {
    id: 1,
    nama: "Sinta",
    role: "admin"
};
console.log(user);
const buku1 = {
    id: 1,
    judul: "Belajar Backend"
};
console.log(buku1);


