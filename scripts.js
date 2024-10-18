document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dari pengiriman default
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Logika untuk memeriksa kredensial (hanya contoh)
    if (username === 'admin' && password === 'password') {
        alert('Login berhasil!');
    } else {
        alert('Username atau password salah.');
    }
});

function searchBook() {
    const query = document.getElementById('searchInput').value;
    alert('Mencari: ' + query);
}

document.getElementById('loadMore').addEventListener('click', function() {
    // Logika untuk memuat lebih banyak buku (contoh)
    const bookList = document.getElementById('bookList');
    const newBook = document.createElement('div');
    newBook.classList.add('book-card');
    newBook.innerHTML = '<h3>Buku Baru</h3><p>Deskripsi buku baru yang ditambahkan.</p>';
    bookList.appendChild(newBook);
});

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
    
    // Arahkan ke halaman login setelah pendaftaran
    window.location.href = 'login.html'; 
});

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
        
        // Arahkan ke halaman utama setelah login berhasil
        window.location.href = 'index.html'; 
    } else {
        alert('Username atau password salah. Silakan coba lagi.');
    }
});