import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

// Komponen Project: Menampilkan ringkasan satu proyek dalam daftar
const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview, // Fungsi untuk mengatur preview gambar di parent component
}) => {
  // State untuk mengontrol visibilitas modal detail proyek
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)} // Tampilkan preview saat hover
        onMouseLeave={() => setPreview(null)} // Sembunyikan preview saat mouse keluar
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="flex gap-5 mt-2 text-sand">
            {/* Menampilkan tags teknologi */}
            {tags.map((tag) => (
              <span key={tag.id}>{tag.name}</span>
            ))}
          </div>
        </div>
        {/* Tombol untuk membuka detail proyek */}
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      {/* Garis pemisah */}
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {/* Menampilkan modal ProjectDetails jika isHidden bernilai true */}
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
