import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

// Komponen Projects: Menampilkan daftar proyek pilihan
const Projects = () => {
    // Setup untuk animasi kursor mengikuti mouse
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Efek spring agar pergerakan preview gambar lebih halus
    const springX = useSpring(x, { damping: 10, stiffness: 50 });
    const springY = useSpring(y, { damping: 10, stiffness: 50 });

    // Handler saat mouse bergerak di area section
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20); // Offset X agar tidak menutupi kursor
        y.set(e.clientY + 20); // Offset Y
    };

    // State untuk menyimpan URL gambar preview yang sedang aktif
    const [preview, setPreview] = useState(null);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative c-space mt-20 md:mt-30"
        >
            <h2 className="text-heading">My Selected Projects</h2>

            {/* Garis pemisah dengan gradasi */}
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />

            {/* Mapping data proyek menjadi komponen Project */}
            {myProjects.map((project) => (
                <Project key={project.id} {...project} setPreview={setPreview} />
            ))}

            {/* Menampilkan gambar preview yang mengikuti kursor jika ada */}
            {preview && (
                <motion.img
                    className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                    src={preview}
                    style={{ x: springX, y: springY }} // Posisi mengikuti spring value
                />
            )}
        </section>
    );
};

export default Projects;
