import { motion, useScroll, useSpring, useTransform } from "motion/react";

// Komponen ParallaxBackground: Membuat efek latar belakang parallax dengan beberapa lapisan
const ParallaxBackground = () => {
  // Menggunakan hook useScroll untuk mendapatkan progress scroll halaman
  const { scrollYProgress } = useScroll();

  // Menambahkan efek spring (pegas) pada nilai scroll agar pergerakan lebih halus
  const x = useSpring(scrollYProgress, { damping: 50 });

  // Mengubah nilai scroll menjadi nilai posisi Y atau X untuk setiap lapisan
  // Setiap lapisan memiliki kecepatan pergerakan yang berbeda untuk menciptakan efek kedalaman
  const mountain3Y = useTransform(x, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(x, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0, 0.5], ["0%", "0%"]); // Lapisan depan (sedikit atau tidak bergerak)

  return (
    <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky (Langit) */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/assets/langit.jpg)",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
        />

        {/* Mountain Layer 3 (Gunung Belakang) */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/assets/Bulan.png)",
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: mountain3Y, // Bergerak vertikal
          }}
        />

        {/* Planets (Planet) */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/assets/Malam-2.png)",
            backgroundPosition: "top",
            backgroundSize: "cover",
            x: planetsX, // Bergerak horizontal
          }}
        />

        {/* Mountain Layer 2 (Gunung Tengah) */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/assets/Malam-3.png)",
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />

        {/* Mountain Layer 1 (Gunung Depan) */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/assets/Malam-1.png)",
            backgroundPosition: "top",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;
