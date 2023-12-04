---
title: "Cara Gampang Integrasi GA4 di NextJs 13 dengan GTM"
author: "Novan Junaedi"
created_at: "September 18, 2023"
excerpt: "Cara ini bisa dibilang paling gampang untuk integrasi GA4 di NextJs 13"
cover_image: "/assets/img/posts/ga-4-nextjs.png"
tags: "nextjs 13, ga4, gtm, analytics"
---

Ada banyak cara untuk mengintegrasikan Google Tag Manager (GTM) dan Google Analytics 4 (GA4) di Next Js yang bersebaran di internet. Tapi banyak dari artikel-artikel tersebut yang kurang jelas tentang cara paling mudah di implementasi atau yang benar untuk dilakukan itu seperti apa. Nah, postingan ini bertujuan untuk menyederhanakan proses dengan menyajikan metode langsung untuk mengintegrasikan GA4 menggunakan GTM di Next.js 13 dan udah gua praktekan juga.

<br>

### Menyiapkan Properti GTM dan GA4

Sebelum masuk ke kodingan pastikan kamu sudah punya akun Google Tag Manager. Kalau belum punya kamu bisa buat dulu [disini](https://tagmanager.google.com/). Pastikan juga untuk meng-copy GTM ID kamu (GTM-XXXXXX).

Kamu juga perlu properti Google Analytics GA4, kamu bisa buat di menu [Admin Google Analytics](http://analytics.google.com/). Pastikan kamu membuat sebuah aliran data web (web stream) dan copy Measurement ID-nya (G-XXXXXXX).

<br>

### Buat Tag Baru di Google Tag Manager

Di menu GTM, buat sebuah container jika kamu belum punya.

1. Klik tombol "New Tag":

![New Tag](https://www.rodyvansambeek.com/images/blog/ga4-newtag.png)

2. Klik "Choose a tag type to begin setup..."
3. Pilih "Google Analytics: GA4 Configuration"
4. Isi Measurement ID dan kasih nama tag-nya:

![Measurement ID](https://www.rodyvansambeek.com/images/blog/ga4-tag-config.png)

5. Klik "Choose a trigger to make this tag fire..."
6. Pilih "All Pages"
7. Klik "Save"

<br>

### Embed GTM di NextJs App

NextJs 13 menggunakan sebuah komponen built-in `Script` yang memungkinkan kamu untuk menentukan kapan script akan di load. Disini kita akan menggunakannya untuk menambahkan script GTM ke aplikasi NextJs kita.

Pertama, tambahkan GTM script ke file `app/layout.tsx` atau `app/layout.js` seperti ini:

```javascript
import Script from 'next/script'
const GTM_ID = 'GTM-XXXXXXX';
 
...
 
<html>
    <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
    </Script>
    <body>
        ...
    </body>
</html>
```

Pastikan untuk mengganti variabel GTM_ID dengan punya kamu sendiri.

Jika javascript dimatikan di browser user kamu bisa menambahkan tag `noscript` dibawah ini sebelum `</body>`

```javascript
...
    <noscript
        dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
        }} 
    />
    </body>
```

<br>

### Loading Strategy

Pada komponen Script, kita telah menggunakan properti `strategy` dengan nilai `afterInteractive`. Ini adalah nilai default yang menunjukkan bahwa skrip akan diambil dan dijalankan setelah halaman telah selesai dimuat dan siap untuk digunakan oleh user. Ini adalah saat ketika browser telah mendownload file-file yang diperlukan dan web siap untuk berinteraksi. Strategi ini ideal digunakan untuk skrip seperti GTM (Google Tag Manager) dan analitik yang tidak memengaruhi proses render awal halaman.

Sebagai alternatif, jika kamu memiliki skrip yang bisa menunggu untuk dimuat selama waktu ketika browser sedang tidak sibuk, seperti chat support atau widget media sosial, kamu dapat menggunakan strategi `lazyOnload`. Strategi ini akan menunggu hingga halaman sepenuhnya dimuat dan browser berada dalam waktu ketika tidak ada aktivitas sebelum menjalankan skrip. Ini membantu memastikan bahwa skrip-skrip ini tidak memperlambat proses awal saat memuat halaman bagi user.

Namun, perlu diingat bahwa kedua strategi ini tetap menggunakan main thread browser, yang dapat menyebabkan "Waktu Pemblokiran Utas Utama" (Main Thread Blocking Time) dalam Google Page Speed. Properti `strategy` hanya mengubah waktu kapan skrip-skrip ini dimuat.

<br>

### Kesimpulan

Seperti itulah cara mudah untuk mengintegrasikan GA4 dengan GTM di NextJs 13. Jika kamu melakukan langkah-langkah diatas dengan benar maka GTM sudah berhasil terpasang dan biasanya data akan tersedia secara otomatis dalam dua hari di akun Google Analytics kamu. Kamu juga dapat melakukan tes dengan cara menginstal chrome extension seperti Wappalyzer untuk melihat apakah Google Analytics sudah terpasang pada website atau belum.

Sumber: [rodyvansambeek.com](https://www.rodyvansambeek.com/blog/easiest-ga4-integration-nextjs-13-gtm-guide)