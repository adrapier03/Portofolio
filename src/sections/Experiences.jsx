import { Timeline } from "../components/Timeline";
import { experiences } from "../constants";

// Komponen Experiences: Menampilkan riwayat pengalaman kerja atau pendidikan
const Experiences = () => {
  return (
    <div className="w-full">
      {/* 
        Menggunakan komponen Timeline untuk memvisualisasikan data pengalaman.
        Data 'experiences' diambil dari file constants dan dikirim sebagai props 'data'.
      */}
      <Timeline data={experiences} />
    </div>
  );
};

export default Experiences;
