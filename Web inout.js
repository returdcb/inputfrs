document.addEventListener('DOMContentLoaded', function() {
    const dataForm = document.getElementById('dataForm');
    const outputDiv = document.getElementById('output');
    const outputNama = document.getElementById('outputNama');
    const outputEmail = document.getElementById('outputEmail');
    const outputUmur = document.getElementById('outputUmur');

    dataForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah form untuk refresh halaman

        // Mengambil nilai dari input
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const umur = document.getElementById('umur').value;

        // Menampilkan nilai di area output
        outputNama.textContent = nama;
        outputEmail.textContent = email;
        outputUmur.textContent = umur;

        // Menampilkan div output
        outputDiv.style.display = 'block';

        // Opsional: Mereset form setelah submit
        dataForm.reset();
    });
});
