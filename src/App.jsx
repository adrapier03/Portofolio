// Mengimpor React untuk membuat komponen
import React from "react";
// Mengimpor komponen Navbar dari folder sections
import Navbar from "./sections/navbar";
// Mengimpor komponen Hero dari folder sections
import Hero from "./sections/Hero";
// Mengimpor komponen About dari folder sections
import About from "./sections/About";
// Mengimpor komponen Projects dari folder sections
import Projects from "./sections/Projects";
// Mengimpor komponen Experiences dari folder sections
import Experiences from "./sections/Experiences";
// Mengimpor komponen Testimonial dari folder sections (saat ini dinonaktifkan)
//import Testimonial from "./sections/Testimonial";
// Mengimpor komponen Contact dari folder sections
import Contact from "./sections/Contact";
// Mengimpor komponen SupportedNetworks dari folder sections
import SupportedNetworks from "./sections/SupportedNetworks";
// Mengimpor komponen Footer dari folder sections
import Footer from './sections/Footer';

// Fungsi komponen utama App
const App = () => {
  return (
    // Container utama dengan lebar maksimum 7xl dan posisi di tengah
    <div className="container mx-auto max-w-7xl">
      {/* Menampilkan komponen Navbar */}
      <Navbar />
      {/* Menampilkan komponen Hero */}
      <Hero />
      {/* Menampilkan komponen About */}
      <About />
      {/* Menampilkan komponen Projects */}
      <Projects />
      {/* Menampilkan komponen Experiences */}
      <Experiences />
      {/* Komponen Testimonial saat ini dinonaktifkan */}
      {/* <Testimonial /> */}
      {/* Menampilkan komponen Supported Networks */}
      <SupportedNetworks />
      {/* Menampilkan komponen Contact */}
      <Contact />
      {/* Menampilkan komponen Footer */}
      <Footer />
    </div>
  );
};

// Mengekspor komponen App sebagai default export
export default App;
