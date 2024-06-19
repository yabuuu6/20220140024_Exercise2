document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('survey-form');
    const hasilList = document.getElementById('hasil-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(form);
        const nama = formData.get('nama');
        const email = formData.get('email');
        const tanggalLahir = formData.get('tanggal-lahir');
        const jenisKelamin = formData.get('jenis-kelamin');
        const satisfaction = formData.get('satisfaction');
        const feedback = formData.get('feedback');

        // Display results
        hasilList.innerHTML = `
            <li><strong>Nama:</strong> ${nama}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Tanggal Lahir:</strong> ${tanggalLahir}</li>
            <li><strong>Jenis Kelamin:</strong> ${jenisKelamin}</li>
            <li><strong>Kepuasan:</strong> ${satisfaction}</li>
            <li><strong>Komentar:</strong> ${feedback}</li>
        `;

        // Clear form
        form.reset();
    });
});
