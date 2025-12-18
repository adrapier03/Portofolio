import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Rocket } from "../components/Rocket";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense } from "react";
import Loader from "../components/Loader";

// Komponen Hero: Bagian utama/paling atas dari halaman (Landing Page)
const Hero = () => {
  // Mengecek apakah ukuran layar adalah mobile (max-width 853px)
  const isMobile = useMediaQuery({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      {/* Menampilkan teks utama hero */}
      <HeroText />
      {/* Menampilkan latar belakang dengan efek parallax */}
      <ParallaxBackground />

      {/* Container untuk elemen 3D */}
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        {/* Canvas adalah area render untuk objek 3D dari React Three Fiber */}
        <Canvas camera={{ position: [0, 1, 3] }}>
          {/* Suspense digunakan untuk menampilkan Loader sementara objek 3D sedang dimuat */}
          <Suspense fallback={<Loader />}>
            {/* TAMBAHKAN CAHAYA INI */}
            <ambientLight intensity={5.0} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            {/* Float membuat objek di dalamnya melayang-layang */}
            <Float>
              <Rocket
              //scale={isMobile ? 0.23 : 0.5} // Ukuran rocket disesuaikan
              //position={isMobile ? [-5, -1.5, 0] : [-5, -2, 0]} // Posisi rocket disesuaikan
              />
            </Float>
            {/* Komponen Rig untuk mengontrol pergerakan kamera mengikuti mouse */}
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  );
};

// Fungsi Rig: Mengatur pergerakan kamera berdasarkan posisi mouse
function Rig() {
  // useFrame dijalankan setiap frame (loop render)
  return useFrame((state, delta) => {
    // easing.damp3 membuat pergerakan kamera halus (smooth) mengikuti mouse
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3], // Target posisi kamera
      0.5, // Smoothness
      delta
    );
  });
}

export default Hero;
