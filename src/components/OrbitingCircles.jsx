import { twMerge } from "tailwind-merge";
import React from "react";

// Komponen OrbitingCircles: Membuat efek elemen yang berputar mengelilingi pusat (orbit)
export function OrbitingCircles({
  className,
  children,
  reverse, // Membalik arah putaran
  duration = 20, // Durasi satu putaran penuh (detik)
  radius = 160, // Jari-jari orbit
  path = true, // Menampilkan garis lintasan orbit
  iconSize = 30, // Ukuran ikon yang berputar
  speed = 1, // Kecepatan putaran
  ...props
}) {
  const calculatedDuration = duration / speed;
  return (
    <>
      {/* Menggambar garis lintasan orbit jika path=true */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="absolute inset-0 pointer-events-none size-full"
        >
          <circle
            className="stroke-1 stroke-white/10"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      {/* Menganimasikan setiap anak elemen (children) agar berputar */}
      {React.Children.map(children, (child, index) => {
        // Menghitung sudut awal agar elemen tersebar merata
        const angle = (360 / React.Children.count(children)) * index;
        return (
          <div
            style={{
              "--duration": calculatedDuration,
              "--radius": radius,
              "--angle": angle,
              "--icon-size": `${iconSize}px`,
            }}
            className={twMerge(
              `absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full ${reverse ? "[animation-direction:reverse]" : ""
              }`,
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
