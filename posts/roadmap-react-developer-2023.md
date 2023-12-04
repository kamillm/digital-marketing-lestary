---
title: "Roadmap React Developer 2023"
author: "Novan Junaedi"
created_at: "December 6, 2022"
excerpt: "Berencana untuk belajar React dan jadi React Developer di 2023? Berikut langkah-langkah yang bisa kamu ikuti"
cover_image: "/assets/img/posts/reactroadmap.jpg"
tags: "react, roadmap"
---

React adalah sebuah UI library yang paling populer saat ini, banyak perusahaan yang membutuhkan tenaga seorang React Developer menjadikannya peluang yang terbuka luas untuk kamu yang ingin bekerja di bidang frontend development. Jika kamu seorang newbie yang belum tahu harus mulai dari mana, tenang saja karena artikel ini akan membahas langkah-langkahnya dari awal sampai akhir. Untuk menjadi seorang React Developer tentunya kamu harus siap untuk mempelajari banyak hal tapi tidak perlu sekaligus, kamu bisa melakukannya tahap demi tahap.

Banyak sekali fitur dan benefit yang ditawarkan oleh React dan karena itu juga React menjadi UI library paling populer, kita dapat membuat berbagai macam aplikasi yang diantaranya seperti:
- Progresive Web Apps
- Scalable web applications
- Reusable components
- Proyek berskala kecil sampai besar

Di artikel ini kita akan membahas bahasa dan tools apa saja yang diperlukan untuk bisa membuat aplikasi dengan React dan membuat kamu jadi seorang React Developer yang handal.

<br>

### HTML
Pertama-tama kamu harus pelajari dulu HTML untuk dapat membuat komponen di React, jangankan React semua website juga memerlukan yang namanya HTML sebagai bahasa markupnya. HTML tidak terlalu susah untuk dipelajari dan resourcenya tersedia banyak sekali di internet seperti di W3School dan youtube. Di React kita bisa menggunakan HTML langsung dalam sebuah komponen.

```jsx
const MyComponent = () => (
  <div>
    <h1>Heading 1</h1>
  </div>
);
```

<br>

### CSS
Setelah kamu terbiasa menggunakan HTML untuk membuat struktur dari sebuah halaman website, selanjutnya kamu harus belajar CSS untuk memberikan styling agar website yang kamu buat terlihat lebih bagus dan menarik. Belajar CSS memang agak tricky tapi jika kamu sudah bisa memahaminya maka kedepannya akan lebih mudah karena kita bisa menggunakan framework CSS seperti Bootstrap, Tailwind, Material UI dan sebagainya untuk mempercepat proses pengembangan website yang kita buat. Jika sudah paham dasar-dasar CSS dan bisa mengaplikasikannya kamu bisa mencoba tools CSS Preprosessor seperti Sass agar penulisan kodenya lebih rapih dan ringkas.

<br>

### Javascript
Oke, setelah kamu bisa menggunakan HTML dan CSS untuk membuat layoutnya, ditahap ini kamu harus belajar bahasa pemrograman Javascript untuk menghandle logic dan semua alur yang terjadi pada aplikasi web yang kamu buat. Javascript sendriri merupakan core atau inti dari React itu sendiri, jadi pastikan kamu jangan skip langkah ini. Belajar bahasa Javascript mungkin akan sedikit lebih sulit karena kita mulai diharuskan untuk berfikir tentang logika-logika dan menerapkan algoritma pada aplikasi kita agar dia bisa berjalan dengan baik seperti yang kita harapkan. Tapi seiring berjalannya waktu kamu pasti akan paham dan bisa menerapkannya sendiri.

<br>

### NPM
NMP adalah sebuah package manager untuk library dan framework javascript, kamu akan membutuhkannya untuk menginstal React dan dependencies lainnya yang munkin kamu butuhkan dalam aplikasi yang kamu buat. Kamu bisa mencari tahu lebih lanjut tentang NPM di website resminya [npmjs.com](https://npmjs.com)

<br>

### Git
Dalam dunia pemrograman, Git adalah tools yang juga menjadi salah satu yang paling penting untuk dikuasai karena bersangkutan dengan version control dari aplikasi yang kamu buat. Dengan menggunakan git kamu bisa mengontrol perubahan pada kode yang kamu tulis dengan sangat mudah selain itu kamu juga dapat berkolaborasi dengan developer lain hingga mendeploy aplikasi yang kamu buat ke hosting dengan hanya memasukan beberapa perintah saja. Mempelajari git tidaklah sesulit yang dibayangkan dan resourcenya banyak di internet kamu bisa mencarinya dengan mudah.

<br>

### React
Ini dia yang ditunggu-tunggu, jika kamu sudah menguasai dasar-dasar dari poin-poin sebelumnya maka kamu seharusnya sudah siap untuk belajar React Js. Untuk mempelajari React Js tersedia banyak resource yang dapat kamu akses secara gratis maupun berbayar. Untuk belajar secara gratis kamu bisa coba dari [dokumentasi resminya](https://reactjs.org) atau Playlist youtube. Berikut ini beberapa channel/playlist youtube dalam bahasa Inggris maupun Indonesia yang bisa kamu coba:
- [Parsinta](https://www.youtube.com/playlist?list=PLRKMmwY3-5MwC02nYlx4kgyNO0fRvPdDc)
- [Array Id](https://www.youtube.com/@arrayid4435)
- [FreeCodeCamp](https://www.youtube.com/@freecodecamp)

Jika kamu lebih suka dengan yang berbayar agar mendapat benefit lain seperti sertifikat dan job opportunity kamu bisa mencoba kursus online berbayar di:
- [Codepolitan](https://codepolitan.com)
- [Dicoding](https://dicoding.com)
- [BuildWith Angga](https://buildwithangga.com)
- [Udemy](https://udemy.com)

Selain itu kamu juga bisa belajar dari komunitas React developer:
- [Grup Facebook ReactJs Indonesia](https://web.facebook.com/groups/442974152553174)
- [Telegram ReactJs Indonesia](https://t.me/react_idn)

> Eits, jangan senang dulu, kita masih belum selesai... Masih ada beberapa langkah lagi biar skill kamu tambah GG 😋

<br>

### State Management
Setelah menguasai React Js kamu harus belajar juga yang namanya State Management. Apa itu? State management adalah suatu cara untuk mengatur data / state kita secara global agar dapat digunakan secara berulang kali (reusable) tanpa harus menuliskan kode yang sama secara terus menerus di tempat yang berbeda dan juga menghindari props drilling. Sederhananya state global itu mirip seperti bank data dimana saat kita butuhkan maka kita tinggal panggil saja di komponen yang kita butuhkan. Jika hanya menggunakan local state (seperti useState hook) maka data tersebut hanya bisa dipakai di komponen parent atau diturunkan ke komponen child melalui props. Ada banyak tools state management untuk React seperti:
- Context API (Bawaan React)
- Redux & Redux Toolkit
- Zustand
- MobX
- Recoil

Kamu tidak perlu mempelajari semuanya cukup pilih salah satu, dan yang paling banyak digunakan saat ini yaitu Redux Toolkit.

<br>

### TypeScript (Opsional)
Akan lebih baik jika kamu bisa menggunakan Typescript juga untuk meminimalisir error yang terjadi karena tipe data. Dengan Typescript kamu bisa menentukan tipe data apa saja yang akan dipakai dalam suatu komponen atau method dan juga tersedia fitur auto complete yang dapat memudahkanmu dalam proses development. Dengan begitu setiap error akan bisa lebih terprediksi. Menggunakan Typescript di React memang agak sedikit lebih sulit dan memakan waktu karena kita harus melakukan setup dan konfigurasi terlebih dahulu. Tapi jika sudah terbiasa maka akan terasa lebih mudah.

<br>

### Next Js
Kalau kamu sudah terbiasa menggunakan React sekarang mungkin saatnya kamu untuk mencoba Framework Next Js yang merupakan framework yang dibangun diatas ekosistem React. Dengan Next Js kamu akan dimudahkan dengan segudang fitur yang siap pakai seperti Routing berdasarkan folder/file dan juga fitur Static Site Generation dan Server Side Rendering untuk meningkatkan SEO. Seperti yang kita ketahui jika React Js merupakan UI library yang hanya support Client Side Rendering jadi jika berkaitan dengan SEO maka akan lebih rumit proses developmentnya. Dengan Next Js kamu tidak perlu memikirkan itu semua, karena Next Js sudah menyediakannya untukmu.

<br>

### What's Next?
Oke kalau sudah bisa semua terus apa lagi? Ini adalah langkah yang paling penting dan wajib kamu lakukan. Untuk jadi React Developer kamu harus membuat beberapa proyek portfolio yang menarik dengan mempraktikan semua hal yang sudah kamu pelajari dari awal dan jangan lupa untuk dihosting agar bisa kamu pamerkan hasil karyamu pada calon client atau perusahaan. Dengan begitu kemungkinan kamu untuk dapat pekerjaan atau proyek freelance akan semakin besar. Jadi sudahkah kamu siap untuk memulai karier sebagai React Developer di 2023?

Jika kamu suka artikel ini jangan lupa untuk share ke teman-temanmu ya... 😉