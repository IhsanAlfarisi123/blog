// Ambil semua elemen gambar dengan kelas 'clickable'
const clickableImages = document.querySelectorAll('.clickable');

// Tambahkan event listener untuk setiap gambar
clickableImages.forEach(img => {
    img.addEventListener('click', () => {
        // Buat elemen modal overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // Buat elemen gambar dalam modal
        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.alt = img.alt;

        // Tambahkan gambar ke dalam modal overlay
        overlay.appendChild(modalImg);

        // Tambahkan modal overlay ke dalam body
        document.body.appendChild(overlay);

        // Hapus modal overlay saat diklik
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});
