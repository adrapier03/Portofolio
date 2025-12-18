import { mySocials } from "../constants";

// Komponen Footer: Bagian kaki halaman yang menampilkan tautan sosial, kebijakan, dan hak cipta
const Footer = () => {
  return (
    // Container utama dengan flexbox untuk tata letak responsif
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      {/* Garis pemisah horizontal dengan efek gradasi */}
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Bagian Tautan Hukum (Terms & Privacy) */}
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      {/* Bagian Ikon Media Sosial */}
      <div className="flex gap-3">
        {/* Melakukan mapping data 'mySocials' untuk menampilkan ikon sosial media secara dinamis */}
        {mySocials.map((social, index) => (
          <a href={social.href} key={index}>
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </a>
        ))}
      </div>

      {/* Bagian Hak Cipta */}
      <p>© 2025 ADR. All rights reserved.</p>
    </section>
  );
};

export default Footer;
