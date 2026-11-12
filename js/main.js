document.addEventListener('DOMContentLoaded', () => {
    const disabledLinks = document.querySelectorAll('.nav-item.disabled');

    disabledLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Halaman Aksi & Rekomendasi akan dibuka pada Fase 3!");
        });
    });
});