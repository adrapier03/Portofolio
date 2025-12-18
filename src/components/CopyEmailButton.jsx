import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

// Komponen CopyEmailButton: Tombol untuk menyalin alamat email ke clipboard
const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "admin@adrnode.com"; // Ganti dengan email Anda yang sebenarnya

  // Fungsi untuk menyalin teks ke clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    // Mengembalikan status tombol setelah 2 detik
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ y: -5 }} // Efek naik saat hover
      whileTap={{ scale: 1.05 }} // Efek tekan
      className="relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {copied ? (
          // Tampilan saat email berhasil disalin
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img src="assets/copy-done.svg" className="w-5" alt="copy Icon" />
            Email has Copied
          </motion.p>
        ) : (
          // Tampilan default tombol
          <motion.p
            className="flex items-center justify-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img src="assets/copy.svg" className="w-5" alt="copy icon" />
            Copy Email Address
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
