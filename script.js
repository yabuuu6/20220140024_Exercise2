// Ambil elemen tombol berdasarkan ID
const mulaiSurveiButton = document.getElementById('mulai-survei');

// Tambahkan event listener untuk menangkap klik pada tombol
mulaiSurveiButton.addEventListener('click', function() {
    // URL halaman survei yang akan dibuka dalam tab baru
    const surveiUrl = 'survei.html';

    // Buka halaman survei dalam tab baru
    window.open(surveiUrl, '_blank');
});
