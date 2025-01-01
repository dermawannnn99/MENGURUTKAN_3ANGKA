/**
 * Buat case mengurutkan angka dari yang terkecil ke yang terbesar
 */

// Fungsi untuk mengurutkan tiga angka
function urutkanAngka(angka1, angka2, angka3) {
    let angka = [angka1, angka2, angka3];
    angka.sort((a, b) => a - b); // Mengurutkan dari kecil ke besar (jadi a-b)
    console.log(`Urutan angka: ${angka.join(", ")}`);
}

// memanggil fungsi urutkanAngka, input dibawah ini
urutkanAngka(10, 3, 7);

/**
 * Kalo yang ini urutkan dari yang terbesar ke yang terkecil
 */

function urutkanAngka2(Angka1, Angka2, Angka3) {
    let Angka = [Angka1, Angka2, Angka3]
    Angka.sort((a, b) => b - a) //Mengurutkan dari besar ke kecil (jadi b-a)
    console.log(`Urutan angka: ${Angka.join(", ")}`)
}

urutkanAngka2(211, 2, 30)