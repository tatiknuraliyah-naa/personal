# PRODUCT REQUIREMENT DOCUMENT (PRD)

# Personal Portfolio Website

**Version:** 2.0
**Project Name:** Tatik Nur Aliyah – Personal Portfolio
**Owner:** Tatik Nur Aliyah
**Role:** Siswi SMK Jurusan Rekayasa Perangkat Lunak (RPL)
**Project Type:** Personal Portfolio Website
**Status:** Development

---

# 1. Project Overview

## Latar Belakang

Website ini merupakan portofolio pribadi milik **Tatik Nur Aliyah**, siswi **SMK jurusan Rekayasa Perangkat Lunak (RPL)**. Website dibuat sebagai media untuk memperkenalkan diri, mendokumentasikan perjalanan belajar, menampilkan proyek yang telah dibuat, serta menunjukkan perkembangan kemampuan di bidang pengembangan website.

Portofolio ini dirancang agar dapat terus diperbarui seiring bertambahnya pengalaman, proyek, sertifikat, dan kemampuan yang dipelajari.

Website bukan hanya sebagai tugas sekolah, tetapi juga menjadi identitas digital yang mencerminkan proses belajar dan perkembangan sebagai calon profesional di bidang teknologi.

---

# 2. Tujuan Website

## Tujuan Utama

* Memperkenalkan diri secara profesional.
* Menampilkan hasil proyek yang pernah dibuat.
* Mendokumentasikan perjalanan belajar.
* Menampilkan kemampuan yang sedang dipelajari.
* Menjadi media personal branding.
* Menjadi portofolio yang dapat terus dikembangkan.

## Tujuan Jangka Panjang

Website ini diharapkan dapat digunakan untuk:

* Melamar PKL.
* Melamar pekerjaan.
* Mengikuti lomba.
* Mendaftar beasiswa.
* Menampilkan perkembangan skill dari waktu ke waktu.

---

# 3. Target Pengguna

Website ditujukan kepada:

* Recruiter
* HRD
* Guru
* Pembimbing PKL
* Teman
* Klien (di masa depan)
* Pengunjung umum

---

# 4. Konsep Desain

## Tema

**Modern Dark Lavender**

Website harus memberikan kesan:

* Modern
* Elegan
* Bersih
* Minimalis
* Profesional
* Nyaman dibaca
* Tidak berlebihan

Inspirasi desain:

* Apple
* Vercel
* Framer
* Linear
* Figma

---

# 5. Design System

## Color Palette

### Primary Background

```
#16161D
```

### Secondary Background

```
#22212C
```

### Card Background

```
#2C2938
```

### Primary Color

```
#D9C8FF
```

### Secondary Purple

```
#B591F5
```

### Accent Purple

```
#8D68E8
```

### Text Primary

```
#FFFFFF
```

### Text Secondary

```
#A8A8B8
```

### Border

```
rgba(255,255,255,.08)
```

### Shadow

```
rgba(181,145,245,.25)
```

### Gradient

```
#16161D
↓

#22212C
↓

#2F2840
↓

#D9C8FF (Glow)
```

---

# 6. Typography

## Heading

**Poppins SemiBold**

Ukuran:

* H1 : 52px
* H2 : 40px
* H3 : 30px

---

## Body

**Inter**

Ukuran:

* Paragraph : 18px
* Small Text : 16px

---

## Code

**JetBrains Mono**

Digunakan pada tech stack atau badge kecil.

---

# 7. Branding

## Logo

Logo menggunakan inisial:

> **TNA**

Konsep logo:

* Minimalis
* Elegan
* Rounded
* Soft Lavender
* Modern

Logo digunakan pada:

* Navbar
* Footer
* Loading Screen
* Favicon

---

## Personal Branding

Website harus menunjukkan bahwa **Tatik Nur Aliyah** adalah:

* Siswi SMK Jurusan Rekayasa Perangkat Lunak (RPL)
* Memiliki semangat belajar tinggi.
* Menyukai pengembangan website.
* Senang mencoba teknologi baru.
* Terus mengembangkan kemampuan secara bertahap.
* Teliti dan kreatif dalam mengerjakan proyek.

Website **tidak boleh memberikan kesan bahwa pemilik sudah menjadi developer profesional**, tetapi harus menunjukkan proses belajar yang aktif dan konsisten.

---

# 8. Website Structure

```
Home

↓

Hero

↓

About Me

↓

Skills & Learning

↓

Featured Projects

↓

Learning Journey

↓

Education

↓

Certificates

↓

Contact

↓

Footer
```

Navigasi menggunakan **smooth scrolling** sehingga pengguna dapat berpindah antar section dengan nyaman.

---

# 9. Navbar

Navbar berada di bagian atas halaman dan bersifat **sticky**, sehingga tetap terlihat saat pengguna melakukan scroll.

## Menu

* Home
* About
* Skills
* Projects
* Contact

Di sisi kanan terdapat tombol:

> **Download CV**

*(Jika CV belum tersedia, tombol dapat diubah menjadi "Coming Soon" atau disembunyikan sementara.)*

### Desain Navbar

* Semi transparan
* Efek blur (glassmorphism)
* Border tipis
* Rounded penuh
* Saat scroll, background menjadi sedikit lebih gelap

### Interaksi

Hover menu:

* Warna berubah menjadi lavender
* Underline tipis
* Transisi ±0,3 detik

---

# 10. Hero Section

## Tujuan

Hero section menjadi area pertama yang dilihat pengunjung. Bagian ini harus mampu memperkenalkan identitas pemilik website secara singkat, jelas, dan menarik.

---

## Layout

Layout menggunakan dua kolom.

### Kiri

Berisi:

* Greeting
* Nama
* Status
* Deskripsi
* Tombol aksi

### Kanan

Berisi:

* Foto profil
* Glow effect
* Decorative blur
* Floating animation ringan

---

## Greeting

```
Hello, I'm
```

---

## Nama

```
Tatik Nur Aliyah
```

Menggunakan ukuran font paling besar pada halaman.

---

## Status

```
SMK Student

Rekayasa Perangkat Lunak (RPL)
```

Tidak menggunakan gelar seperti **Front-End Developer**, karena website ingin menunjukkan proses belajar yang sedang berlangsung.

---

## Deskripsi

> Halo! Saya **Tatik Nur Aliyah**, siswi jurusan **Rekayasa Perangkat Lunak (RPL)** yang memiliki ketertarikan pada pengembangan website dan desain antarmuka. Saat ini saya sedang mempelajari HTML, CSS, dan JavaScript melalui berbagai proyek serta terus mengembangkan kemampuan agar dapat menciptakan website yang modern, responsif, dan nyaman digunakan.

---

## Call To Action

Primary Button

> **Explore Projects**

Secondary Button

> **Contact Me**

---

## Hero Background

Background menggunakan kombinasi:

* Gradient gelap
* Blur ungu
* Glow lavender
* Noise texture tipis (opsional)

Tidak menggunakan background yang terlalu ramai agar fokus tetap pada konten.

---

# 11. About Me

## Tujuan

Memberikan gambaran singkat mengenai siapa pemilik website, minat, tujuan belajar, dan motivasi dalam mempelajari dunia teknologi.

---

## Judul

```
About Me
```

---

## Isi

> Halo! Saya **Tatik Nur Aliyah**, siswi **SMK jurusan Rekayasa Perangkat Lunak (RPL)** yang memiliki minat pada pengembangan website dan desain antarmuka. Saya senang mempelajari teknologi baru serta mencoba menerapkannya melalui berbagai proyek sederhana. Bagi saya, setiap proyek adalah kesempatan untuk belajar, meningkatkan kemampuan, dan memahami cara membangun website yang lebih baik.

> Saat ini saya sedang mempelajari HTML, CSS, JavaScript, serta berbagai tools pendukung seperti Git, GitHub, dan Figma. Saya percaya bahwa proses belajar yang konsisten akan membantu saya berkembang dan mempersiapkan diri untuk menghadapi dunia kerja di bidang teknologi.

---

## Highlight Cards

Tampilkan 4 kartu kecil.

### 🌱 Selalu Belajar

Terbuka untuk mempelajari teknologi dan pengalaman baru.

---

### 💡 Suka Mencoba Hal Baru

Senang mengeksplorasi desain dan pengembangan website.

---

### 🎯 Teliti

Berusaha mengerjakan setiap proyek dengan rapi dan terstruktur.

---

### 🚀 Terus Berkembang

Selalu ingin meningkatkan kemampuan sedikit demi sedikit melalui latihan dan pengalaman.

---

# 12. Section Transition

Setiap section dipisahkan menggunakan white space yang cukup agar tampilan terasa lega.

Tambahkan animasi:

* Fade In
* Slide Up
* Smooth Scroll

Animasi harus halus dan tidak mengganggu kenyamanan pengguna.

---

# 13. Skills & Learning

## Tujuan

Section ini bertujuan untuk memperkenalkan teknologi, tools, dan software yang sedang dipelajari selama menempuh pendidikan di jurusan Rekayasa Perangkat Lunak (RPL). Informasi yang ditampilkan menggambarkan proses belajar yang sedang berlangsung, bukan tingkat keahlian profesional.

---

## Layout

Menggunakan **grid card** responsif.

Desktop:

* 3 kolom

Tablet:

* 2 kolom

Mobile:

* 1 kolom

Setiap card memiliki:

* Ikon teknologi
* Nama
* Deskripsi singkat
* Status pembelajaran

Hover:

* Card sedikit terangkat
* Glow lavender
* Shadow lembut
* Transisi halus

---

## Web Development

### HTML

Digunakan untuk membangun struktur dasar halaman website.

**Status:** 🌱 Sedang Dipelajari

---

### CSS

Digunakan untuk mengatur tampilan website agar menarik, rapi, dan responsif.

**Status:** 🌱 Sedang Dipelajari

---

### JavaScript

Digunakan untuk membuat website menjadi lebih interaktif.

**Status:** 🌱 Sedang Dipelajari

---

## CSS Framework

### Bootstrap

Sedang mempelajari penggunaan komponen siap pakai untuk mempercepat proses pengembangan website.

**Status:** 🌱 Sedang Dipelajari

---

### Tailwind CSS

Mulai mempelajari utility class untuk membangun tampilan website modern.

**Status:** 🌱 Sedang Dipelajari

---

## Design Tools

### Figma

Digunakan untuk membuat wireframe dan desain antarmuka sederhana sebelum proses coding.

**Status:** ⭐ Cukup Familiar

---

### Canva

Digunakan untuk membuat aset visual sederhana dan kebutuhan desain pendukung.

**Status:** ⭐ Cukup Familiar

---

## Development Tools

### Visual Studio Code

Editor utama yang digunakan untuk belajar dan membuat proyek.

**Status:** ⭐ Digunakan Sehari-hari

---

### Git

Sedang mempelajari dasar version control.

**Status:** 🌱 Sedang Dipelajari

---

### GitHub

Digunakan untuk menyimpan proyek dan belajar kolaborasi.

**Status:** 🌱 Sedang Dipelajari

---

## Sedang Dipelajari

Bagian ini menampilkan teknologi yang ingin dipelajari lebih lanjut.

* React
* Firebase
* UI/UX Design
* Responsive Web Design

---

# 14. Featured Projects

## Tujuan

Menampilkan proyek yang telah dibuat sebagai bukti proses belajar dan penerapan materi yang telah dipelajari.

---

## Layout

Grid Card

Desktop:

3 kolom

Tablet:

2 kolom

Mobile:

1 kolom

---

## Informasi Setiap Project

Setiap project menampilkan:

* Thumbnail
* Nama Project
* Deskripsi
* Teknologi yang digunakan
* Tombol GitHub
* Tombol Live Demo (jika tersedia)

---

## Contoh Project

### Bakery Website

Website toko roti modern dengan tampilan responsif.

Tech Stack:

* HTML
* CSS
* JavaScript

---

### Personal Portfolio

Website portofolio pribadi sebagai media personal branding.

Tech Stack:

* HTML
* CSS
* JavaScript

---

### Landing Page

Website latihan untuk meningkatkan kemampuan layout dan responsive design.

---

## Hover Effect

Saat pointer diarahkan ke card:

* Card naik ±8px
* Shadow ungu
* Border berubah menjadi lavender
* Thumbnail sedikit membesar

---

# 15. Learning Journey

## Tujuan

Menampilkan perjalanan belajar secara kronologis sehingga pengunjung dapat melihat perkembangan kemampuan dari waktu ke waktu.

---

## Layout

Vertical Timeline

---

### Tahap 1

Mulai mengenal dunia pemrograman.

---

### Tahap 2

Belajar HTML untuk membuat struktur website.

---

### Tahap 3

Belajar CSS untuk membuat tampilan lebih menarik.

---

### Tahap 4

Mulai mempelajari JavaScript agar website lebih interaktif.

---

### Tahap 5

Belajar menggunakan Git dan GitHub untuk mengelola proyek.

---

### Tahap 6

Membuat proyek website sebagai sarana latihan dan pengembangan kemampuan.

---

# 16. Education

## Layout

Timeline sederhana.

---

### SMK

**Jurusan:** Rekayasa Perangkat Lunak (RPL)

Fokus pembelajaran:

* Dasar Pemrograman
* Algoritma
* Pengembangan Website
* Basis Data
* Version Control
* Dasar UI/UX

---

## Tujuan

Menunjukkan latar belakang pendidikan yang relevan dengan bidang yang sedang dipelajari.

---

## Catatan Pengembangan

Karena website ini dirancang untuk berkembang bersama pemiliknya, struktur harus memungkinkan penambahan section seperti **Sertifikat**, **Pengalaman PKL**, atau **Prestasi** di masa depan tanpa perlu mengubah keseluruhan desain.

---

# 17. Contact

## Tujuan

Memberikan cara yang mudah bagi pengunjung untuk menghubungi pemilik website.

---

## Layout

Desktop:

Dua kolom

**Kiri**

* Judul
* Deskripsi
* Informasi kontak

**Kanan**

Form kontak

---

## Heading

> **Let's Connect**

---

## Deskripsi

> Terima kasih telah mengunjungi portofolio saya. Jika ingin berdiskusi, memberikan masukan, atau sekadar menyapa, jangan ragu untuk menghubungi saya melalui formulir atau media sosial di bawah ini.

---

## Contact Form

Field:

* Full Name
* Email Address
* Message

Button:

> **Send Message**

---

## Contact Information

Tampilkan ikon beserta informasi berikut (isi dapat diperbarui nanti):

* 📧 Email
* 💻 GitHub
* 📷 Instagram *(opsional)*
* 💼 LinkedIn *(opsional, jika sudah memiliki akun)*

---

# 18. Footer

Footer menggunakan background yang sama dengan website agar terlihat konsisten.

## Isi Footer

Logo:

> **TNA**

Nama:

> **Tatik Nur Aliyah**

Deskripsi singkat:

> Siswi SMK Jurusan Rekayasa Perangkat Lunak (RPL) yang sedang mempelajari pengembangan website dan terus mengembangkan kemampuan melalui berbagai proyek.

Copyright:

> © 2026 Tatik Nur Aliyah. All Rights Reserved.

Tambahkan tulisan kecil:

> Designed & Developed with ❤️ using HTML, CSS & JavaScript.

---

# 19. User Experience (UX)

Website harus memberikan pengalaman yang nyaman dengan memperhatikan hal-hal berikut:

* Navigasi mudah dipahami.
* Tata letak bersih dan rapi.
* White space yang cukup.
* Kontras warna nyaman di mata.
* Informasi mudah ditemukan.
* Tampilan tetap konsisten di setiap halaman.

---

# 20. Animation & Interaction

Animasi harus halus, tidak berlebihan, dan mendukung pengalaman pengguna.

## Saat Website Dibuka

* Hero muncul dengan efek **Fade In**.
* Foto profil memiliki efek **Floating** yang lembut.
* Tombol muncul sedikit terlambat (*stagger animation*).

---

## Saat Scroll

* Setiap section muncul dengan efek **Fade Up**.
* Card muncul secara bertahap.
* Progress animasi mengikuti arah scroll.

---

## Hover Effect

Card:

* Sedikit terangkat.
* Shadow berwarna lavender.
* Border berubah menjadi ungu muda.

Button:

* Warna sedikit lebih terang.
* Efek glow lembut.
* Transisi sekitar 0,3 detik.

---

# 21. Responsive Design

Website harus responsif pada berbagai ukuran layar.

## Desktop

* Layout dua hingga tiga kolom.
* Konten menggunakan lebar maksimal sekitar **1200px** agar tetap nyaman dibaca.

## Laptop

* Layout tetap dua kolom dengan penyesuaian jarak antar elemen.

## Tablet

* Beberapa grid berubah menjadi dua kolom.
* Ukuran font sedikit diperkecil.

## Mobile

* Semua section menjadi satu kolom.
* Navbar berubah menjadi hamburger menu.
* Tombol lebih besar agar mudah ditekan.
* Jarak antar elemen diperlebar.

---

# 22. Accessibility

Website harus mudah digunakan oleh semua pengunjung.

* Menggunakan struktur HTML semantik (`header`, `main`, `section`, `footer`).
* Seluruh gambar memiliki **alt text**.
* Kontras warna cukup tinggi.
* Navigasi dapat digunakan dengan keyboard.
* Ukuran teks mudah dibaca.

---

# 23. Performance Requirements

Target performa website:

* Waktu muat halaman kurang dari **2 detik**.
* Gambar dioptimalkan tanpa mengurangi kualitas secara signifikan.
* Animasi tidak mengganggu performa.
* Kode terstruktur dan mudah dipelihara.

---

# 24. Tech Stack

Website dibangun menggunakan:

### Front-End

* HTML5
* CSS3
* JavaScript (Vanilla)

### Library

* AOS (Animate On Scroll)
* Font Awesome
* Google Fonts

### Tools

* Visual Studio Code
* Git
* GitHub

### Deployment

* GitHub Pages *(atau Netlify/Vercel jika ingin nanti)*

---

# 25. Struktur Folder

```text
portfolio/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── README.md
```

---

# 26. Future Development

Website dirancang agar mudah dikembangkan di masa mendatang, seperti:

* Menambahkan halaman khusus untuk detail setiap proyek.
* Menambahkan blog pribadi.
* Menambahkan sertifikat setelah mengikuti pelatihan atau webinar.
* Menambahkan pengalaman PKL.
* Menambahkan teknologi baru yang dipelajari.
* Menghubungkan form kontak ke layanan email.

---

# 27. Target Impression

Website ini diharapkan memberikan kesan bahwa **Tatik Nur Aliyah** adalah siswi **SMK jurusan Rekayasa Perangkat Lunak (RPL)** yang memiliki semangat belajar tinggi, teliti, kreatif, dan terus mengembangkan kemampuan di bidang pengembangan website. Portofolio harus mencerminkan proses belajar yang nyata melalui proyek-proyek yang telah dibuat, sekaligus menunjukkan kesiapan untuk terus berkembang di dunia teknologi.

---
