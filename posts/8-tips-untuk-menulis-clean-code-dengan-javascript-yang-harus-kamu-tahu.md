---
title: "8 Tips Untuk Menulis Clean Code Dengan Javascript Yang Harus Kamu Tahu"
author: "Novan Junaedi"
created_at: "November 3, 2022"
excerpt: "Delapan tips ini akan membantumu untuk menulis kode yang lebih bersih dan mudah dibaca jika diterapkan"
cover_image: "/assets/img/posts/js.jpg"
tags: "javascript, tools, tips"
---

Javascript adalah sebuah bahasa pemrograman yang menakjubkan, tapi meski begitu menulis clean code di javascript bisa menjadi tantangan tersendiri bahkan untuk para programmer yang sudah berpengalaman sekalipun.

Seperti apa sih clean code di Javascript? Kodenya haruslah:

1. Gampang dibaca
2. Gampang di debug
3. Efisien dan berperforma tinggi

Berikut ini adalah beberapa tools populer dan trik-trik yang dapat kamu gunakan agar kualitas kode javascript yang kamu tulis lebih kece lagi:

### 1. Gunakan Try Catch Pada Semua API Request dan JSON methods

Banyak hal yang bisa salah saat membuat request ke api untuk mengambil data, jadi menangani skenario ini adalah suatu keharusan. Saat menangani JSON tidak secara otomatis kita bisa begitu saja mempercayai apa yang diberikan, cobalah untuk membuat kode kamu menjadi lebih kuat dengan menangani kemungkinan inkonsistensi yang mungkin saja terjadi.

```javascript
try {
  // Membuat request ke API dan manipulasi JSON
} catch (error) {
  // Handle error
}
```

<br>

### 2. Gunakan Linter (ESLint)

Linter adalah sebuah alat analisis kode statis yang akan memeriksa kesalahan program dan gaya penulisan berdasarkan seperangkat aturan dan konfigurasi yang telah ditentukan. Singkatnya itu akan meningkatkan performa Javascript/TypeScript dan membantu membuatnya lebih konsisten secara penulisan.

<br>

### 3. Lacak Masalah-masalah Javascript di Editormu

Komponen utama untuk menjaga codebase Javascript kamu agar tetap bersih adalah memudahkan untuk melacak dan melihat masalah dalam kode itu sendiri. Melacak masalah codebase di editor memungkinkan para engineer untuk:

- Mendapatkan visibilitas penuh tentang masalah yang lebih besar seperti tech debt
- Melihat konteks untuk setiap masalah pada codebase
- Mengurangi context switching
- Menyelesaikan tech debt secara berkelanjutan

Kamu dapat menggunakan berbagai tools untuk melacak technical debt tapi cara tercepat dan termudah untuk memulai adala dengan menggunakan ekstensi Stepsize gratis untuk VSCode atau JetBrains yang terintegrasi dengan Jira, Linear, Asana dan project management tools lainnya.

<br>

### 4. Gunakan String Template

String template akan memungkinkan kamu untuk memasukkan nilai ke dalam string sambil mempertahankan format dan kodenya, jauh lebih ramah pembaca daripada melakukan aritmatika string.

```javascript
// Hindari ini
const headerText = "Halo " + user.name + " ✌️. Selamat datang di " + workspace.name;

// Lakukan ini
const headerText = `Halo ${user.name} ✌️. Selamat datang di ${workspace.name}`;
```

<br>

### 5. Gunakan Regex Saat Perlu Mencari String

Meskipun regex dapat terlihat esoterik dari luar, tapi ini adalah string parsing tool yang powerful dan memungkinkanmu untuk membuat pola yang kompleks untuk menjelaskan berbagai skenario pencocokan string yang sulit.

<br>

### 6. Gunakan Optional Chaining

Berhentilah memiliki konjungsi logis yang panjang dan sederhanakan kodemu dengan optional chaining.

```javascript
// Hindari ini
if(data && data.payload && data.payload.workspace.name === 'default') {
  // Lakukan sesuatu...
}

// Lakukan ini
if(data?.payload?.workspace.name === 'default') {
  // Lakukan sesuatu...
}
```

<br>

### 7. Hindari Bersarang (Nesting)

Bersarang (nesting) adalah cara yang pasti untuk meningkatkan kompleksitas kode dan membuatnya lebih sulit untuk dibaca dan dipahami. Pertimbangkan refactoring jika kedalamannya lebih dari dua level, dengan memiliki kondisi pengembalian level root, blok yang lebih pendek, dan abstraksi logika bersarang ke functionnya sendiri.

<br>

### 8. Komentari Semua Kode Atipikal, Tapi Jangan Biarkan Itu Menggantikan Keterbacaan Kode

Akan ada masanya saat kamu harus menghandle skenario yang tidak umum dimana tidak adanya konvensi yang jelas. Mengomentari kode seperti ini untuk membantu menjelaskan apa yang dilakukannya dan konteks yang sedang dipertimbangkan akan sangat membantu programmer lain untuk memahaminya juga menjadi pengingat untuk diri kamu sendiri ketika kamu kembali melihat kode tersebut di masa yang akan datang. Tapi cara ini tidak boleh digunakan sebagai cara utama karena kita malas memikirkan cara penulisan kode yang mudah dibaca sejak awal!

Itulah tips yang dapat kamu terapkan dalam menulis kode di Javascript agar lebih clean dan mudah dibaca, karena programmer yang baik adalah programmer yang dapat menulis kode yang bukan hanya bisa dibaca mesin tapi juga dapat dibaca manusia.

Terima kasih sudah membaca, jangan lupa share ke teman-temanmu juga ya! :)

<br>

Sumber: [Dev.to](https://dev.to/alexomeyer/8-must-know-tips-for-writing-clean-code-with-javascript-i4)
