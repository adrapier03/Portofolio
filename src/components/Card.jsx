import { motion } from "motion/react";

// Komponen Card: Menampilkan kartu yang bisa di-drag (geser)
const Card = ({ style, text, image, containerRef }) => {
  // Jika ada gambar dan tidak ada teks, tampilkan sebagai gambar
  return image && !text ? (
    <motion.img
      className="absolute w-15 cursor-grab"
      src={image}
      style={style}
      whileHover={{ scale: 1.05 }} // Efek zoom saat hover
      drag // Mengaktifkan fitur drag
      dragConstraints={containerRef} // Membatasi area drag sesuai container
      dragElastic={1} // Elastisitas saat ditarik
    />
  ) : (
    // Jika ada teks, tampilkan sebagai kartu teks
    <motion.div
      className="absolute px-1 py-4 text-xl text-center rounded-full ring ring-gray-700 font-extralight bg-storm w-[12rem] cursor-grab"
      style={style}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default Card;
