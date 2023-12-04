---
title: "Next Js 13 Sudah Rilis!"
author: "Novan Junaedi"
created_at: "November 1, 2022"
excerpt: "Next Js 13 telah dirilis beberapa waktu lalu dengan segudang fitur baru dan cara baru yang lebih powerful"
cover_image: "/assets/img/posts/nextjs-13.jpg"
tags: "nextjs 13, vercel, frontend"
---

Seperti yang sudah diumumkan di konferensi Next Js beberapa hari lalu, Next Js 13 meletakan dasar-dasar untuk menjadi dinamis tanpa batas:

- **app/ Directory (beta):** Lebih mudah, lebih cepat, mengurangi JS Client.
  - **Layouts**
  - **React Server Components**
  - **Streaming**
- **Turbopack (alpha):** mencapai 700x lebih cepat dibanding webpack dan berbasis Rust
- **Fitur baru `next/image` (stable):** lebih cepat dengan native lazy load bawaan browser
- **Fitur baru `@next/font` (beta):** self-hosted fonts otomatis tanpa pergeseran tata letak
- **Perbaikan `next/link` (beta):** penyederhanaan API dengan penambahan tag anchor (`<a>`) secara otomatis

Jika kamu mau mengupdate proyek Next Js ke versi terbaru tinggal jalankan saja perintah:

```javascript
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

<br>

### `app/` Directory (beta)

Salah satu fitur yang paling disukai dari Next Js adalah routing berdasarkan file-system. Tinggal taruh file dalam folder dan kamu bisa secara instan membuat routes dalam aplikasi. Tidak perlu konfigurasi sama sekali.

Sekarang, core developer Next Js telah memperbaiki pengalaman routing dan layouting di Next Js dengan mengenalkan fitur direktori `app/` (beta). Ini adalah hasil dari Layouts RFC yang sebelumnya diterbitkan untuk umpan balik komunitas. Router baru mencakup dukungan untuk:

- **Layouts:** Berbagi UI dengan mudah antara route ketika mempersiapkan state dan menghindari expensive re-renders.
- **Server Components:** Menjadikan server-first sebagai default untuk kebanyakan aplikasi dinamis.
- **Streaming:** Menampilkan loading state secara instan dan penayangan dalam unit-unit UI saat mereka di render.
- **Support for Data Fetching:** async Server Components dan extended fetch API memungkinkan fetching di level komponen.

Meskipun kamu tidak perlu menggunakan direktori app/ saat update ke Next.js 13, direktori app/ dapat berdampingan dengan direktori halaman yang ada sebelumnya untuk adopsi tambahan.

![The app/ directory can be incrementally adopted from your existing pages/ directory.](https://nextjs.org/_next/image?url=%2Fstatic%2Fblog%2Flayouts-rfc%2Fapp-folder.png&w=3840&q=75)

<br>

### Layouts

Direktori `app/` memudahkan untuk meletakkan interface kompleks yang mempertahankan state di seluruh navigasi, menghindari expensive re-rendering, dan mengaktifkan pola route lanjutan. Selanjutnya, kamu dapat menyusun tata letak, dan menempatkan kode aplikasi dengan route kamu, seperti komponen, test, dan style.

![The app/ directory can be incrementally adopted from your existing pages/ directory.](https://nextjs.org/_next/image?url=%2Fstatic%2Fblog%2Fnext-13%2Fcolocating-assets-in-the-app-directory.png&w=3840&q=75)

Membuat routes didalam `app/` membutuhkan sebuah file `page.js`:

```javascript
// app/page.js
// This file maps to the index route (/)
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

Kamu kemudian bisa **mendefine layouts** lewat file system. Layouts membagi UI dengan banyak halaman. Di navigasi, layouts mempersiapkan state, tetap interaktif, dan tidak merender ulang.

```javascript
// app/blog/layout.js
export default function BlogLayout({ children }) {
  return <section>{children}</section>;
}
```

[Pelajari lebih lanjut tentang layouts dan pages](https://beta.nextjs.org/docs/routing/fundamentals) atau [deploy sebuah contoh untuk kamu coba](https://vercel.com/templates/next.js/app-directory).

<br>

### Server Components

Direktori `app/` memperkenalkan dukungan untuk arsitektur Server Components baru React. [Server dan Client Components](https://beta.nextjs.org/docs/rendering/server-and-client-components) menggunakan server dan client di bagian terbaik mereka masing-masing seperti mengizinkan kamu untuk mem-build dengan cepat, aplikasi yang sangat interaktif dengan sebuah model pemrograman yang menyediakan pengalaman terbaik bagi developer.

Dengan Server Components, tim core Next Js meletakan dasar untuk membangun interface yang kompleks sembari **mengurangi jumlah javascript yang di kirim ke client**, memungkinkan halaman menjadi lebih cepat saat di muat untuk pertama kali.

Saat route telah di muat, Next Js dan React runtime akan dimuat yang mana dapat di cache dan terprediksi ukurannya. Ukuran runtime ini tidak naik selama aplikasi kamu berkembang. Terlebih lagi, runtime tersebut dimuat secara asyncronous, memungkinkan HTML kamu yang berasal dari server untuk ditingkatkan secara progresif di client.

[Pelajari lebih lanjut tentang Server Components](https://beta.nextjs.org/docs/rendering/server-and-client-components) atau [deploy sebuah contoh untuk mencobanya](https://vercel.com/templates/next.js/app-directory)

<br>

### Streaming

Direktori `app/` memperkenalkan kemampuan untuk merender secara progresif dan secara bertahap mengalirkan unit UI yang dirender ke client.

Dengan Server Components dan [nested layouts](https://beta.nextjs.org/docs/routing/pages-and-layouts) di Next Js, kamu dapat merender bagian-bagian dari halaman yang tidak bisa secara spesifik membutuhkan data secara instan dan menampilkan sebuah [state loading](https://beta.nextjs.org/docs/routing/loading-ui) untuk bagian-bagian dari halaman yang mem-fetching data. Dengan pendekatan ini, user tidak perlu menunggu semua bagian dari halaman dimuat sebelum mereka dapat memulai berinteraksi dengan halaman tersebut.

![You can colocate your application code, such as components, tests, and styles, with your routes.](https://nextjs.org/_next/image?url=%2Fstatic%2Fblog%2Fnext-13%2Fstreaming.png&w=3840&q=75)

Saat di deploy ke Vercel, aplikasi Next Js 13 yang menggunakan direktori `app/` akan mengalirkan respon secara default dalam Node Js dan Edge runtimes untuk meningkatkan performa.

[Pelajari lebih lanjut tentang streaming](https://beta.nextjs.org/docs/data-fetching/fundamentals) atau [deploy sebuah contoh untuk mencobanya](https://vercel.com/templates/next.js/app-directory)

<br>

### Data Fetching

[Dukungan untuk Promises RFC](https://github.com/acdlite/rfcs/blob/first-class-promises/text/0000-first-class-support-for-promises.md) terbaru dari React memperkenalkan cara baru yang kuat untuk mengambil data dan menangani promises di dalam komponen:

```javascript
// app/page.js
async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  return res.json();
}

// This is an async Server Component
export default async function Page() {
  const data = await getData();

  return <main>{/* ... */}</main>;
}
```

Native fetch Web API juga telah diperluas di React dan Next.js. Ini secara otomatis mengurangi fetch request dan menyediakan satu cara fleksibel untuk mengambil, menyimpan, dan memvalidasi ulang data di tingkat komponen. Ini berarti semua manfaat dari Static Site Generation (SSG), Server-Side Rendering (SSR), dan Incremental Static Regeneration (ISR) kini tersedia melalui satu API:

```javascript
// This request should be cached until manually invalidated.
// Similar to `getStaticProps`.
// `force-cache` is the default and can be omitted.
fetch(URL, { cache: "force-cache" });

// This request should be refetched on every request.
// Similar to `getServerSideProps`.
fetch(URL, { cache: "no-store" });

// This request should be cached with a lifetime of 10 seconds.
// Similar to `getStaticProps` with the `revalidate` option.
fetch(URL, { next: { revalidate: 10 } });
```

Dalam direktori `app/`, kamu dapat mem-fetch data dalam [layouts](https://beta.nextjs.org/docs/routing/pages-and-layouts), [halaman](https://beta.nextjs.org/docs/routing/pages-and-layouts) dan komponen termasuk dukungan untuk mengalirkan respon dari server.

Tim core developer Next Js mengaktifkan cara ergonomis untuk menangani loading state dan error serta streaming di UI saat dirender. Dalam rilis mendatang, mereka juga akan meningkatkan dan menyederhanakan mutasi data.

![With the app/ directory, you can use a new special file loading.js to automatically create Instant Loading UI with Suspense boundaries.](https://nextjs.org/_next/image?url=%2Fstatic%2Fblog%2Fnext-13%2Fstreaming.png&w=3840&q=75)

Tim core developer Next Js senang bekerja sama dengan komunitas open-source, pengelola package, dan perusahaan lain yang berkontribusi pada ekosistem React untuk membangun era baru React dan Next.js ini. Kemampuan untuk menempatkan pengambilan data di dalam komponen dan mengirimkan lebih sedikit Javascript ke klien adalah dua bagian penting dari umpan balik komunitas yang dengan senang hati mereka sertakan dengan direktori `app/`.

[Pelajari lebih lanjut tentang data fetching]() atau [deploy sebuah contoh untuk mencobanya](https://vercel.com/templates/next.js/app-directory)

<br>

### Memperkenalkan Turbopack (alpha)

Next Js 13 memasukan [Turbopack](https://vercel.com/blog/turbopack), sebuah suksesor Webpack terbaru yang berbasis Rust.

Webpack telah diunduh lebih dari 3 miliar kali. Meskipun telah menjadi bagian integral dalam membangun Web, tim core developer Next Js telah mencapai batas kinerja maksimum yang dimungkinkan dengan alat berbasis JavaScript.

Di Next.js 12, tim core developer Next Js memulai transisi ke native tooling yang didukung Rust. Mereka mulai dengan bermigrasi dari Babel, yang menghasilkan transpilasi 17x lebih cepat. Kemudian, mereka mengganti Terser, yang menghasilkan minifikasi 6x lebih cepat. Saatnya menggunakan native secara keseluruhan untuk bundling.

Menggunakan Turbopack alpha dengan Next Js 13 menghasilkan:

- Update 700x lebih cepat dari Webpack
- Update 10x lebih cepat dari Vite
- Cold start 4x lebih cepat dari Webpack

![Turbopack is our Rust-based successor to Webpack, with 700x faster HMR for large applications.](https://nextjs.org/_next/image?url=%2Fstatic%2Fblog%2Fnext-13%2Fturbopack.png&w=2048&q=75)

Turbopack hanya menggabungkan aset minimum yang diperlukan dalam pengembangan, sehingga waktu startup sangatlah cepat. Pada aplikasi dengan 3.000 modul, Turbopack membutuhkan 1,8 detik untuk boot. Sementara Vite membutuhkan waktu 11,4 detik dan Webpack membutuhkan waktu 16,5 detik.

Turbopack memiliki dukungan siap pakai untuk Server Components, TypeScript, JSX, CSS, dan masih banyak lagi. Selama alpha, banyak fitur yang belum didukung.

<div class="alert alert-secondary" role="alert">
Note: Turbopack di Next.js saat ini hanya mendukung next dev. Sementara dukungan untuk next build masih dikerjakan.
</div>

Coba Turbopack alpha di Next Js 13 dengan menjalankan perintah `next dev --turbo`.

<br>

### next/image

Next Js 13 memperkenalkan sebuah komponen Image baru yang powerful, mengizinkan kamu untuk menampilkan gambar dengan mudah tanpa penggeseran tata letak dan mengoptimalkan file sesuai permintaan untuk meningkatkan performa.

Saat survey komunitas Next Js, 70% dari responden mengatakan mereka menggunakan komponen Image Next Js di production dan melihat peningkatan pada Core Web Vital. Dengan Next Js 13, tim core developer Next Js meningkatkan `next/image` lebih jauh lagi.

Komponen Image yang baru memiliki:

- Mengirim lebih sedikit Javascript sisi klien
- Lebih mudah distyling dan dikonfigurasi
- Lebih mudah diakses dengan penambahan tag alt secara default
- Sejajar dengan platform Web
- Lebih cepat karena native lazy loading tidak memerlukan hidrasi

```javascript
import Image from "next/image";
import avatar from "./lee.png";

function Home() {
  // "alt" is now required for improved accessibility
  // optional: image files can be colocated inside the app/ directory
  return <Image alt="leeerob" src={avatar} placeholder="blur" />;
}
```

[Pelajari lebih lanjut tentang Komponen Image](https://nextjs.org/docs/basic-features/image-optimization) atau [deploy sebuah contoh untuk mencobanya](https://vercel.com/templates/next.js/nextjs-boilerplate)

<br>

#### Upgrade `next/image` ke Next Js 13

Komponen Image yang lama telah diganti nama menjadi `next/legacy/image`. Tim core developer Next Js telah menyediakan codemod yang secara otomatis akan memperbarui penggunaan `next/image` kamu yang ada ke `next/legacy/image`. Contohnya, perintah ini akan menjalankan codemod pada direktori ./pages saat dijalankan dari root:

```javascript
npx @next/codemod next-image-to-legacy-image ./pages
```

[Pelajari lebih lanjut tentang codemod](https://nextjs.org/docs/advanced-features/codemods) atau [lihat dokumentasi](https://nextjs.org/docs/basic-features/image-optimization)

<br>

### @next/font

Next Js 13 memperkenalkan sebuah sistem font baru yang:

- Secara otomatis mengoptimalkan fontmu, termasuk custom fonts
- Menghilangkan request ke jaringan eksternal untuk meningkatkan privasi dan performa
- Memiliki Hosting mandiri otomatis bawaan untuk file font apa pun
- Tidak ada pergeseran tata letak secara otomatis menggunakan properti `size-adjust` CSS

Sistem font terbaru ini memungkinkan kamu untuk dengan nyaman menggunakan semua Google Fonts dengan performa dan privasi. File CSS dan font diunduh pada saat build time dan dihosting secara mandiri dengan semua aset statis. Tidak ada request yang di kirim ke Google oleh browser.

```javascript
import { Inter } from '@next/font/google';

const inter = Inter();

<html className={inter.className}>
```

Custom fonts juga didukung termasuk dukungan untuk hosting mandiri secara otomatis, caching dan preloading dari file-file font.

```javascript
import localFont from '@next/font/local';

const myFont = localFont({ src: './my-font.woff2' });

<html className={myFont.className}>
```

Kamu dapat mengcustom setiap bagian dari pengalaman loading font sambil tetap memastikan performa yang hebat dan tidak ada perubahan tata letak, termasuk tampilan font, preloading, fallback, dan banyak lagi.

[Pelajari lebih lanjut tentang komponen Font](https://nextjs.org/docs/basic-features/font-optimization) atau [deploy sebuah contoh untuk mencobanya](https://nextjs.org/blog/next-13)

<br>

### next/link

`next/link` tidak lagi memerlukan penambahan tag `<a>` sebagai child secara manual.

Ini ditambahkan sebagai opsi eksperimental di versi 12.2 dan sekarang menjadi default. Di Next Js 13, tag `<Link>` selalu merender tag `<a>` dan memungkinkan kamu meneruskan props ke tag yang mendasarinya. Sebagai contoh:

```javascript
import Link from 'next/link'

// Next.js 12: `<a>` has to be nested otherwise it's excluded
<Link href="/about">
  <a>About</a>
</Link>

// Next.js 13: `<Link>` always renders `<a>`
<Link href="/about">
  About
</Link>
```

[Pelajari lebih lanjut tentang komponen Link yang ditingkatkan](https://nextjs.org/docs/api-reference/next/link) atau [deploy sebuah contoh untuk mencobanya](https://vercel.com/templates/next.js/nextjs-boilerplate)

#### Upgrade `next/link` ke Next Js 13

Untuk mengupgrade link-link kamu ke Next Js 13, tim core developer Next Js telah menyediakan sebuah codemod yang akan secara otomatis mengupdate codebasemu. Contohnya, perintah ini akan menjalankan codemod di direktori `./pages` saat menjalankannya dari root:

```javascript
npx @next/codemod new-link ./pages
```

[Pelajari lebih lanjut tentang codemod](https://nextjs.org/docs/advanced-features/codemods) atau lihat dokumentasi.

<br>

### OG Image Generation

Social card yang dikenal juga sebagai gambar open graph, dapat meningkatkan engagement rate dari klik pada kontenmu secara masif, dengan beberapa eksperimen yang menunjukkan konversi hingga 40% lebih baik.

Social card statis sangatlah memakan waktu, rawan error dan susah di maintain. Karena hal ini, social card sering kali dikurangi bahkan di lewat. Sampai sekarang, social card yang dinamis yang dapat di personalisasi dan dihitung dengan cepat itu sulit dan mahal.

Tim core depelover Next Js membuat sebuah library baru `@vercel/og` yang bekerja mulus dengan Next Js untuk menghasilkan social card yang dinamis.

```javascript
// pages/api/og.jsx

import { ImageResponse } from "@vercel/og";

export const config = {
  runtime: "experimental-edge",
};

export default function () {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
        }}
      >
        Hello, World!
      </div>
    )
  );
}
```

Pendekatan ini 5x lebih cepat daripada solusi yang telah ada dengan menggunakan Vercel Edge Functions, WebAssembly dan core libray terbaru untuk mengkonversi HTML dan CSS menjadi gambar dan memanfaatkan abstraksi komponen React.

[Pelajari lebih lanjut tentang OG Image Generation](https://vercel.com/docs/concepts/functions/edge-functions/og-image-generation) atau [deploy sebuah contoh untuk mencobanya](https://vercel.com/new/clone?repository-url=https://github.com/vercel/examples/tree/main/edge-functions/vercel-og-nextjs&project-name=vercel-og-nextjs&repository-name=vercel-og-nextjs)

<br>

### Update Middleware API

Di Next Js 12, tim core developer Next Js memperkenalkan Middleware untuk mengaktifkan fleksibilitas penuh dengan router Next Js. Mereka mendengar umpan balik komunitas pada desain API yang pertama dan telah menambahkan beberapa tambahan untuk meningkatkan pengalaman developer dan juga menambahkan fungsionalitas baru yang powerful.

Kamu sekarang bisa lebih mudah mengatur header pada saat melakukan request:

```javascript
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-version`
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-version", "13");

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });

  // Set a new response header `x-version`
  response.headers.set("x-version", "13");
  return response;
}
```

Kamu sekarang juga dapat menyediakan sebuah respon secara langsung dari Middleware tanpa perlu untuk `rewrite` atau `redirect`.

```javascript
// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@lib/auth";

// Limit the middleware to paths starting with `/api/`
export const config = {
  matcher: "/api/:function*",
};

export function middleware(request: NextRequest) {
  // Call our authentication function to check the request
  if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return NextResponse.json(
      {
        success: false,
        message: "Auth failed",
      },
      {
        status: 401,
      }
    );
  }
}
```

Mengirim respon dari Middleware saat ini memerlukan pilihan konfigurasi `experimental.allowMiddlewareResponseBody` dalam `next.config.js`.

<br>

### Breaking Changes

- Versi minimal React telah dinaikan dari versi 17.0.2 ke 18.2.0.
- Versi minimal Node.js telah dinaikan dari versi 12.22.0 ke 14.6.0, sejak versi 12.x telah mencapai akhir hidupnya.
- Konfigurasi properti `swcMinify` telah di ganti dari `false` ke `true`. Lihat [Next.js Compiler](https://nextjs.org/docs/advanced-features/compiler) untuk info lebih lanjut.
- Import `next/image` telah diganti nama menjadi `next/legacy/image`. Import `next/future/image` telah diganti nama menjadi `next/image`. Sebuah codemod telah tersedia untuk secara aman dan otomatis mengganti nama importmu.
- Child `next/link` tidak perlu lagi tag `<a>`. Tambahkan `legacyBehavior` prop untuk menggunakan legacy behavior atau hapus tag `<a>` untuk mengupgradenya. Sebuah codemod telah tersedia untuk secara otomatis mengupgrade kodemu.
- Routes tidak lagi diambil sebelumnya saat User-Agent adalah bot.
- Opsi `target` yang telah usang di `next.config.js` telah dihilangkan.
- Browser yang didukung telah diganti untuk membuang Internet Explorer dan ditargetkan browser-browser moderen. Kamu masih bisa menggunakan Browserlist untuk mengganti browser yang ditargetkan.
  - Chrome 64+
  - Edge 79+
  - Firefox 67+
  - Opera 51+
  - Safari 12+

Untuk mempelajari lebih lanjut, lihat [panduan upgrade](https://nextjs.org/docs/upgrading).

<br>

### Komunitas

Enam tahun lalu, tim core developer Next Js telah merilis Next Js ke publik. Mereka mulai membangun kerangka kerja React tanpa konfigurasi yang menyederhanakan pengalaman developer. Menengok ke belakang, sungguh luar biasa melihat bagaimana komunitasnya telah berkembang, dan apa yang dapat mereka lakukan bersama. Mari terus lanjutkan.

Next Js adalah sebuah hasil dari kombinasi kerja lebih dari 2.400 developer individu, partner industri seperti Google dan Meta dan tim core Vercel. Dengan lebih dari 3 juta unduhan npm perminggu dan 94.000 bintang di GitHub, Next Js menjadi salah satu cara paling populer untuk membangun sebuah website.

Rilis ini dipersembahkan oleh para kontributor:
<br>
@ijjk, @huozhi, @HaNdTriX, @iKethavel, @timneutkens, @shuding, @rishabhpoddar, @hanneslund, @balazsorban44, @anthonyshew, @TomerAberbach, @philippbosch, @styfle, @mauriciomutte, @hayitsdavid, @abdennor, @Kikobeats, @cjdunteman, @Mr-Afonso, @kdy1, @jaril, @abdallah-nour, @North15, @feedthejim, @brunocrosier, @Schniz, @sedlukha, @hashlash, @Ethan-Arrowood, @fireairforce, @migueloller, @leerob, @janicklas-ralph, @Trystanr, @atilafassina, @nramkissoon, @kasperadk, @valcosmos, @henriqueholtz, @nip10, @jesstelford, @lorensr, @AviAvinav, @SukkaW, @jaycedotbin, @saurabhburade, @notrab, @kwonoj, @sanruiz, @angeloashmore, @falsepopsky, @fmontes, @Gebov, @UltiRequiem, @p13lgst, @Simek, @mrkldshv, @thomasballinger, @kyliau, @AdarshKonchady, @endymion1818, @pedro757, @perkinsjr, @gnoff, @jridgewell, @silvioprog, @mabels, @nialexsan, @feugy, @jackromo888, @crazyurus, @EarlGeorge, @MariaSolOs, @lforst, @maximbaz, @maxam2017, @teobler, @Nutlope, @sunwoo0706, @WestonThayer, @Brooooooklyn, @Nsttt, @charlypoly, @aprendendofelipe, @sviridoff, @jackton1, @nuta, @Rpaudel379, @marcialca, @MarDi66, @ismaelrumzan, @javivelasco, @eltociear, and @hiro0218.

<br>

Sumber: [Next Js 13](https://nextjs.org/blog/next-13)
