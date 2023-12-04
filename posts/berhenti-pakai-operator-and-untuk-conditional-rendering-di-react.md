---
title: "Berhenti Pakai '&&' Untuk Conditional Rendering Di React"
author: "Novan Junaedi"
created_at: "November 11, 2022"
excerpt: "Hindari kemungkinan bug dengan tidak menggunakan '&&' pada saat melakukan conditional rendering di React"
cover_image: "/assets/img/posts/warning.jpg"
tags: "react, tips, javascript"
---

Kalau kamu lihat berbagai aplikasi React, kamu pasti tahu bagaimana caranya untuk merender bagian-bagian dari sebuah kompenen secara kondisional berdasarkan props dan state. Biarpun ada banyak cara untuk melakukan conditional rendering, artikel ini akan fokus membahas operator `&&` pada Javascript saja. Alasan utama untuk penekanan ini adalah operator `&&` sering kali memunculkan bug pada UI, yang mana sebenarnya bisa dihindari dengan mudah dan juga hal ini tidak banyak yang membahasnya.

<br>

### Cara "&&" Bekerja
Sebuah cara klasik dari penggunaan operator `&&` di React akan tampak seperti:
```javascript
function MyComponent({ condition }) {
  return (
    <div>
      <h1>Title</h1>
      {condition && <ConditionalComponent />}
    </div>
  );
}
```

Penjelasan:
- Jika `kondisi` adalah truthy value, maka `<ConditionalComponent />` akan dirender
- Jika `kondisi` adalah falsy value, maka `<ConditionalComponent />` tidak akan dirender

Kenapa demikian? Hal ini bukan spesifik di React saja tapi merupakan sebuah perilaku dari Javascript dan bahasa-bahasa pemrograman lainnya yang disebut dengan **_short-circuit evaluation_**. Yaitu jika operan pertama (`kondisi`) adalah falsy, operator AND (&&) akan berhenti dan tidak mengevaluasi operan kedua (`<ConditionalComponent />`).

Kamu dapat mencobanya di browser dengan menjalankan potongan kode berikut di console:
```javascript
// Ini akan menampilkan sebuah alert box.
true && alert('Hello');
// Ini tidak akan terjadi apa-apa
false && alert('Not hello');
```

<br>

### Kenapa Tidak Boleh Memakai "&&"?
Sintaks pendek `&&` sering lebih disukai dan memang juga berfungsi. Tapi hanya karena kamu bisa memakainya bukan berarti kamu harus memakainya juga.

Di kasus kita yang disebutkan diatas, jika `kondisi` bernilai `true` atau `false`, kamu akan mendapatkan hasil yang kamu harapkan — `<ConditionalComponent />` masing-masing akan dirender atau tidak. Semua berjalan baik sejauh ini. Namun, jika kondisi tidak mengevaluasi ke boolean, hal ini justru dapat menyebabkan masalah.

**Contohnya:**

- Jika `kondisi` adalah 0, 0 akan ditampilkan di UI
- Jika `kondisi` adalah `undefined`, kamu akan mendapatkan error: "Uncaught Error: Error(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null."

<br>

### Lalu Apa Yang Seharusnya Digunakan Selain "&&"?
Untuk menghindari sesuatu yang tidak kamu inginkan di UI, misalnya nilai 0 yang bisa merusak layout, kamu bisa menggunakan ternary operator sebagai gantinya

```javascript
condition ? <ConditionalComponent /> : null
```

<br>

### Kesimpulan
Untuk mencegah bug UI yang dapat dihindari, gunakanlah operator ternary Javascript untuk melakukan conditional rendering komponen React daripada menggunakan logic operator AND (&&). Ini adalah mantra yang sederhana tapi tidak bisa dihancurkan 🧙‍♂️
```javascript
// 🔴 Jelek
condition && <ConditionalComponent />
// 🟢 Bagus
condition ? <ConditionalComponent /> : null
```

Jadi, apakah kamu masih sering menggunakan operator `&&` daripada ternary operator? Coba kasih tahu di kolom komentar dibawah!

Terimakasih sudah membaca, jangan lupa share juga ke teman-teman kamu kalau kamu suka artikel ini.

<br>

Sumber: [Medium](https://medium.com/geekculture/stop-using-for-conditional-rendering-in-react-a0f7b96200f8)