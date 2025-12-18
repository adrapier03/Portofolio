import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

// Komponen About: Menampilkan informasi tentang pengguna, keahlian, dan cara menghubungi
const About = () => {
  // useRef digunakan untuk referensi elemen DOM kontainer grid 2 (untuk efek drag/interaksi pada Card)
  const grid2Container = useRef();
  return (
    // Section utama dengan ID 'about' untuk navigasi scroll
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      {/* Grid Container: Mengatur tata letak grid responsif (1 kolom di mobile, 6 kolom di tablet/desktop) */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1: Perkenalan Diri & Gambar */}
        {/* Menampilkan gambar coding dan teks perkenalan singkat */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/Server.png"
            className="absolute scale-[1.1] -right-[1rem] -top-[1rem] md:scale-[3] md:left-5 md:inset-y-10 lg:scale-[1.3]"
          />
          <div className="z-10">
            <p className="subtext">
              Independent Validator securing the network.
              Focused on reliability, uptime, and technical excellence to drive a transparent blockchain ecosystem.
            </p>
          </div>
          {/* Overlay gradient di bagian bawah untuk estetika */}
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2: My Services */}
        {/* Menampilkan kartu-kartu layanan validator */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <div className="absolute z-10 text-left left-8 top-1/2 -translate-y-1/2">
              <p className="text-sm text-gray-400">I constantly try to improve</p>
              <p className="text-5xl font-bold text-white">My services</p>
            </div>
            {/* Kartu-kartu layanan validator dengan posisi yang disesuaikan */}
            <Card
              style={{ top: "1%", right: "30%" }}
              text="RPC Node"
              containerRef={grid2Container}
            />
            <Card
              style={{ top: "15%", right: "1%" }}
              text="Snapshot"
              containerRef={grid2Container}
            />
            <Card
              style={{ top: "30%", right: "30%" }}
              text="Guide Installation"
              containerRef={grid2Container}
            />
            <Card
              style={{ top: "45%", right: "1%" }}
              text="Validator"
              containerRef={grid2Container}
            />
            <Card
              style={{ top: "60%", right: "30%" }}
              text="Public Endpoint"
              containerRef={grid2Container}
            />
            <Card
              style={{ top: "75%", right: "1%" }}
              text="Storage Node"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3: Lokasi & Zona Waktu */}
        {/* Menampilkan globe interaktif dan informasi lokasi */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Global Validator</p>
            <p className="subtext">
              Running reliable nodes across time zones, ensuring worldwide network stability.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4: Kontak */}
        {/* Bagian ajakan untuk memulai proyek dan tombol copy email */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5: Tech Stack */}
        {/* Menampilkan daftar teknologi yang dikuasai */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
