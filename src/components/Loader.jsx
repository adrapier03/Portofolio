import { Html, useProgress } from "@react-three/drei";

// Komponen Loader: Menampilkan persentase loading saat aset 3D sedang dimuat
const Loader = () => {
  // useProgress hook dari drei memberikan informasi progress loading
  const { progress } = useProgress();
  return (
    // Html component memungkinkan rendering elemen HTML di dalam Canvas 3D
    <Html center className="text-xl font-normal text-center">
      {progress}% Loaded
    </Html>
  );
};

export default Loader;
