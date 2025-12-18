import { twMerge } from "tailwind-merge";
import Marquee from "../components/Marquee";
import { reviews } from "../constants";

// Membagi data review menjadi dua baris untuk efek marquee
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

// Komponen ReviewCard: Menampilkan satu kartu testimoni
const ReviewCard = ({ img, name, username, body }) => {
    return (
        <figure
            className={twMerge(
                "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                {/* Foto Profil */}
                <img
                    className="rounded-full bg-white/10"
                    width="32"
                    height="32"
                    alt=""
                    src={img}
                />
                <div className="flex flex-col">
                    {/* Nama Pengulas */}
                    <figcaption className="text-sm font-medium text-white">
                        {name}
                    </figcaption>
                    {/* Username Pengulas */}
                    <p className="text-xs font-medium text-white/40">{username}</p>
                </div>
            </div>
            {/* Isi Testimoni */}
            <blockquote className="mt-2 text-sm">{body}</blockquote>
        </figure>
    );
};

// Komponen Testimonial: Bagian utama yang menampilkan semua testimoni
export default function Testimonial() {
    return (
        <div className="items-start mt-25 md:mt-35 c-space">
            <h2 className="text-heading">Hear From My Clients</h2>

            {/* Container Marquee */}
            <div className="relative flex flex-col items-center justify-center w-full mt-12 overflow-hidden">

                {/* Baris Pertama (Gerak ke kiri) */}
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Baris Kedua (Gerak ke kanan / reverse) */}
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                {/* Efek Gradasi di Kiri dan Kanan untuk transisi halus */}
                <div className="absolute inset-y-0 left-0 w-1/4 pointer-events-none bg-gradient-to-r from-primary"></div>
                <div className="absolute inset-y-0 right-0 w-1/4 pointer-events-none bg-gradient-to-l from-primary"></div>
            </div>
        </div>
    );
}
