function convert() {
    // Mendapatkan nilai input dari pengguna
    const meterInput = document.getElementById("meterInput").value;

    // Konversi meter ke kilometer
    const kilometer = meterInput / 1000;

    // Menampilkan hasil konversi
    const result = document.getElementById("result");
    result.innerText = `${meterInput} meters is equal to ${kilometer} kilometers.`;
}
