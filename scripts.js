// Fungsi untuk memeriksa status login
function checkLogin() {
    if (!localStorage.getItem('loggedIn')) {
        window.location.href = 'login.html'; // Arahkan ke halaman login jika belum login
    }
}

// Menangani login pengguna
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifikasi pengguna dari localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert(`Login berhasil! Selamat datang, ${username}!`);
        localStorage.setItem('loggedIn', true); // Simpan status login
        window.location.href = 'index.html'; 
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
});

// Fungsi untuk mencari buku
function searchBook() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = books.filter(book => book.title.toLowerCase().includes(query));
    displaySearchResults(results);
}

// Fungsi untuk menampilkan hasil pencarian
function displaySearchResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Kosongkan hasil sebelumnya
    if (results.length > 0) {
        results.forEach(book => {
            const bookItem = document.createElement('div');
            bookItem.textContent = `${book.title} - ${book.author}`;
            resultsContainer.appendChild(bookItem);
        });
    } else {
        resultsContainer.textContent = 'Tidak ada buku yang ditemukan.';
    }
}

// Menangani pendaftaran pengguna
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    // Simpan data pengguna ke localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert(`Pendaftaran berhasil! Silakan login.`);
    window.location.href = 'login.html'; 
});

// Event listener untuk memuat lebih banyak buku
document.getElementById('loadMore').addEventListener('click', function() {
    const bookList = document.getElementById('bookList');
    const newBook = document.createElement('div');
    newBook.classList.add('book-card');
    newBook.innerHTML = '<h3>Buku Baru</h3><p>Deskripsi buku baru yang ditambahkan.</p>';
    bookList.appendChild(newBook);
});

// Panggil fungsi checkLogin saat halaman dimuat
window.onload = function() {
    checkLogin(); // Periksa status login
};
