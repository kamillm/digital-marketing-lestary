---
title: "Cara Setting ESLint, Prettier dan Husky di Next Js"
author: "Novan Junaedi"
created_at: "October 27, 2022"
excerpt: "Berikut ini adalah langkah-langkah untuk setting ESLint, Prettier dan Husky di Next Js dengan mudah dan cepat"
cover_image: "/assets/img/posts/eslint-prettier-husky.jpg"
tags: "nextjs, eslint, prettier, frontend"
---

### Intro

Para Software Developer biasanya punya gaya dan aturan masing-masing dalam menulis kode atau penggunaan tools untuk membuat sebuah produk softaware. Preferensi dan gaya yang berbeda-beda tersebut sering kali menjadi argumen dan perdebatan panas di kalangan developer sepanjang waktu.

**Developer A:** Gua lebih seneng pake spasi daripada tabs.\
**Developer B:** Single quotes lebih cakep daripada double quotes!\
**Developer C:** Bro! Kok ada ya yang pake light mode di VSCode?

Masalah-masalah tersebut sebenarnya bisa diatasi dengan menggunakan tools linter seperti ESLint (biar kode kita konsisten), prettier (buat format kode kita supaya rapih) dan husky (bantu kita buat masuk ke lifecycle pre-commit dan post-commit git).

Sebelum meng-commit kode kamu serangkaian pengecekan aturan-aturan akan di jalankan untuk memastikan kode yang kamu tulis sesuai dengan aturan-aturan yang ditetapkan dalam file eslint dan prettier. Pengecekan ini adalah yang memaksa dan memastikan "kesehatan" dan memaintain kekonsistenan penulisan kode dalam proyek, khususnya saat bekerja dengan tim developer atau orang-orang yang melakukan commit kode ke proyek open source yang kamu buat.
<br/>
<br/>

### Ayo Kita Mulai

Untuk menggunakan eslint, prettier dan husky di proyek Next Js atau React yang kamu buat pertama-tama kita instal terlebih dahulu dependencies ini dengan mengetikan perintah berikut ini:

```javascript
yarn add --dev eslint prettier husky lint-staged eslint-config-prettier
```

Tujuan dari dependency yang di instal antara lain:

- **eslint:** untuk memastikan kualitas penulisan kode.
- **prettier:** untuk memastikan kode terformat dengan baik berdasarkan aturan-aturan yang telah ditetapkan.
- **husky:** memungkinkan untuk menjalankan skrip dalam file package.json dalam git lifecycle hooks.
- **lint-staged:** menjalankan skrip yang ditentukan hanya pada file yang ditetapkan.
- **eslint-config-prettier:** mencegah berbagai macam konflik format kode antara eslint dan prettier. Seperti yang kita tahu, eslint menghandle kualitas kode dan format kode. Package ini mendisable aturan dalam eslint yang berfungsi untuk memformat kode jadi eslint cuma fokus dalam memastikan kualitas penulisan kode.
  <br/>
  <br/>

### Konfigurasi Prettier

1. Buat file bernama `.prettier.json` dan masukkan perintah di bawah ini:

```json
{
  "trailingComma": "es5",
  "bracketSpacing": true,
  "printWidth": 80,
  "tabWidth": 2,
  "singleQuote": true,
  "arrowParens": "always"
}
```

2. Buat lagi sebuah file bernama `.prettierignore`. Kamu bisa memasukan folder dan file yang tidak boleh di format oleh prettier saat melakukan formatting. Berikut ini adalah beberapa file dan folder yang biasanya di ignore:

```javascript
node_modules;
build;
dist;
```

<br/>
<br/>

### Konfigurasi ESLint

Proyek seperti _create-react-app_ dan Next Js biasanya sudah punya konfigurasi eslint didalamnya. Yang perlu kamu lakukan adalah mengaitkan prettier kedalam file file eslint `.eslintrc.json`. Alasannya karena kita mau eslint cuma fokus dibagian masalah kualitas kode dan membiarkan prettier yang mengurus formatting kode kita. Ini adalah saat dimana package `eslint-config-prettier` yang kita instal sebelumnya bermain.

```json
{
  "extends": ["next/core-web-vitals", "prettier"]
}
```

Tapi untuk proyek yang belum punya konfigurasi eslint bisa mengikuti langkah berikut:

1. Lakukan inisialisasi eslint dan ikuti perintah yang muncul di command prompt

```javascript
npx eslint --init
```

2. Setelah mengikuti perintah tersebut, sebuah file bernama `.eslintrc.json` akan dibuat. Lalu kaitkan prettier disana.
3. Tambahkan file `.eslintignore` untuk mengabaikan folder node_modules, builds dan dist.
   <br/>
   <br/>

### Konfigurasi Lint-Staged

Jalankan perintah berikut ini untuk menginstal dan mengkonfigurasi husky dan lint-staged:

```javascript
npx mrm@2 lint-staged
```

Saat lint-staged selesai, dia akan membuat skrip dalam `package.json` seperti ini:

```json
"lint-staged": {
  "*.{js, jsx, ts, tsx}": "eslint --cache --fix",
  "*.{js, css, md}": "prettier --write"
}
```

Dan juga sebuah folder bernama `.husky` akan dibuat. Buika file pre-commit dalam folder tersebut dan tambahkan perintah berikut:

```javascript
yarn lint-staged
```

Perintah diatas akan menjalankan skrip lint-staged dalam file `package.json` ketika mengcommit dan memastikan kode sudah di format sesuai dengan aturan-aturan yang ditetapkan dan kode tersebut terbebas dari berbagai masalah linting.

![Console](https://i.ibb.co/jzCxLrk/console.png)

Sumber: [Medium](https://victorbruce82.medium.com/setting-up-eslint-prettier-and-husky-in-your-nextjs-project-b468fb56331)

<br>
