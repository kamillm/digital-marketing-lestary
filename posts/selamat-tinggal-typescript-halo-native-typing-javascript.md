---
title: "Selamat Tinggal Typescript, Halo Native Typing Javascript!"
author: "Novan Junaedi"
created_at: "December 2, 2022"
excerpt: "Rencananya pada Javascript akan ditambahkan fitur native typing seperti pada Typescript. Akankah ini menggantikan peran Typescript?"
cover_image: "/assets/img/posts/jsvts.jpg"
tags: "javascript, typescript"
---

Typing atau menentukan tipe data, suka atau tidak fitur ini memiliki banyak keuntungan seperti pengalaman development yang lebih baik (melalui intellisense auto-complete), dokumentasi kode yang lebih baik, dan memakan waktu yang lebih sedikit pada error. Manfaatnya jauh lebih besar daripada biayanya, jadi kenapa beberapa orang masih menghindari menggunakannya? Alasannya cuma satu yaitu karena **Typescript**. Kamu perlu menyiapkannya terlebih dahulu dan memastikan tools yang kamu gunakan benar-benar berjalan seperti yang diharapkan yang mana menambah sebuah layer frustasi pada proyek manapun.

Bagaimana jika native typing mungkin saja akan diadopsi di Javascript? Seperti mendapatkan sebuah hadiah yang luar biasa bukan.

<br>

### Proposal
TC39 adalah sebuah komisi yang bertanggung jawab atas spesifikasi Javascript. Mereka membantu untuk mempertahankan dan mengembangkan definisi Javascript. Kalau kamu penasaran kamu bisa membaca [artikel ini](https://dev.to/christopherkade/the-future-of-javascript-features-to-keep-an-eye-on-3d0h). Mereka baru saja memindahkan proposal Anotasi Tipe ke stage 1 (dari 4 stage), yang berarti saatnya untuk berspekulasi secara luas tentang dampak dan implikasi dari fitur tersebut!

>**Note:** Hal ini tidak akan menandakan berakhirnya TypeScript dengan cara apa pun, ini hanya akan memungkinkan kode Javascript yang lebih clean dan lebih andal untuk proyek yang tidak berencana menggunakan TypeScript atau yang ingin menggunakan keduanya secara bersamaan.

<br>

### Akan Seperti Apa Penampakan dari Native Typing Pada Javascript Jika Proposalnya Lolos?
Penampakannya akan sangat mirip seperti yang biasa kita gunakan pada Typescript dan Flow:

```javascript
// Kedua parameter bertipe data number dan method ini juga mereturn number
function add(a: number, b: number): number {
  return a + b;
}
```

Anotasi-anotasi ini tidak akan menghentikanmu dari mempassing sebuah string atau tipe variabel lain manapun sebagai parameter. Mereka akan diabaikan pada runtime dan disana fungsinya hanya sebagai guideline yang bisa digunakan oleh type checker pihak ketiga seperti IDE. Argumen untuk menentukan tipe data yang ketat mendapat tempatnya dalam diskusi ini. Dalam proposalnya saat ini, jenis ini hanyalah jenis anotasi, yang sudah kita miliki berkat JSDoc. Jadi pertanyaannya tetap: kenapa?

<br>

### Lalu Apa Gunanya?
Kita ada dalam situasi yang aneh. Javascript adalah satu-satunya bahasa yang membuat kita menulis dalam bahasa lain seperti Typescript untuk kemudian ditranspilasikan ke bahasa Javascript itu sendiri. Lapisan-lapisan ini menambah kerumitan dari proyek apapun, jadi semakin banyak tools yang ditambahkan pada default tool kita maka semakin baik.

Kebutuhan akan Typescript menciptakan bentuk monopoli pada tools yang tersedia saat ini, dimana masing-masing dan setiap orang perlu berevolusi dengan Typescript agar tidak tertinggal. [The State of the Octoverse 2022](https://octoverse.github.com/2022/top-programming-languages) menunjukkan popularitas TypeScript yang mengesankan pada tahun 2022, yang berarti kebutuhan untuk berevolusi menjadi hampir wajib untuk linter, bundler, dll.

Dengan adanya fitur ini yang sudah dibundel di dalam native Javascript akan membuatnya menjadi paket yang lebih lengkap dan membantu kita memperlambat pembengkakan tools yang saat ini sedang kita hadapi.

Jadi bagaimana pendapat kamu tentang hal ini baguskah atau biasa saja? Apakah kamu akan jadi orang yang pertama mencobanya setelah dirilis atau tetap setia dengan Typescript? Yuk diskusikan di kolom komentar!

Jika kamu suka artikel ini jangan lupa untuk share ke teman-temanmu ya! 😉

Sumber: [Dev.to](https://dev.to/christopherkade/goodbye-typescript-hello-native-typing-for-javascript-3ee1)