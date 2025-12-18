import { OrbitingCircles } from "./OrbitingCircles";

// Komponen Frameworks: Menampilkan ikon-ikon teknologi yang berputar mengelilingi pusat
export function Frameworks() {
  // Daftar nama file ikon skill yang akan ditampilkan
  const skills = [
    "git",
    "javascript",
    "react",
    "tailwindcss",
    "vitejs",
    "wordpress",
    "aztec",
    "btc",
    "eth",
    "sol",
    "0G",
    "apt",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* Lingkaran orbit dalam (iconSize lebih besar) */}
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Lingkaran orbit luar (radius lebih besar, arah putar terbalik) */}
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

// Komponen helper untuk menampilkan gambar ikon
const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
