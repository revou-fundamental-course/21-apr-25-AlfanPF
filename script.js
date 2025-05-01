document.getElementById("form-konversi").addEventListener("submit", function(e) {
    e.preventDefault();

    const suhu = parseFloat(document.getElementById("suhu").value);
    const jenisKonversi = document.getElementById("konversi").value;
    const hasilEl = document.getElementById("hasil");
    const penjelasanEl = document.getElementById("penjelasan");

    if (isNaN(suhu)) {
        hasilEl.textContent = "Masukkan suhu yang valid.";
        penjelasanEl.textContent = "";
        return;
    }

    let hasil, penjelasan;

    if (jenisKonversi === "fahrenheit") {
        hasil = (suhu * 9/5) + 32;
        penjelasan = `${suhu}°C dikonversi menjadi ${hasil.toFixed(2)}°F`;
    } else {
        hasil = (suhu - 32) * 5/9;
        penjelasan = `${suhu}°F dikonversi menjadi ${hasil.toFixed(2)}°C`;
    }

    hasilEl.textContent = `Hasil: ${hasil.toFixed(2)}`;
    penjelasanEl.textContent = penjelasan;
});
