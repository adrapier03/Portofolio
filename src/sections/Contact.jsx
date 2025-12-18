import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

// Komponen Contact: Menangani formulir kontak dan pengiriman email
const Contact = () => {
  // State untuk menyimpan data input formulir
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // State untuk status loading saat pengiriman
  const [isLoading, setIsLoading] = useState(false);
  // State untuk menampilkan notifikasi alert
  const [showAlert, setShowAlert] = useState(false);
  // State untuk tipe alert (sukses/gagal) dan pesan alert
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  // Fungsi untuk menangani perubahan input pada formulir
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fungsi helper untuk menampilkan alert selama 5 detik
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  // Fungsi utama untuk menangani submit formulir
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman
    setIsLoading(true);

    try {
      console.log("From submitted:", formData);
      // Mengirim email menggunakan layanan EmailJS
      await emailjs.send(
        "service_zbgotdo", // Service ID
        "template_djcme7p", // Template ID
        {
          name: formData.name, // Ubah dari from_name ke name agar sesuai template
          email: formData.email, // Ubah dari from_email ke email agar sesuai template
          to_name: "ADR",
          to_email: "rafitesnet@gmail.com",
          message: formData.message,
        },
        "POJ1H9TFdN9nT4STD" // Public Key
      );
      setIsLoading(false);
      // Reset formulir setelah sukses
      setFormData({ name: "", email: "", message: "" });
      showAlertMessage("success", "You message has been sent!");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      showAlertMessage("danger", "Somthing went wrong!");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing">
      {/* Efek partikel di latar belakang */}
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      {/* Menampilkan komponen Alert jika state showAlert true */}
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      {/* Container formulir */}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're loking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help
          </p>
        </div>

        {/* Formulir Kontak */}
        <form className="w-full" onSubmit={handleSubmit}>
          {/* Input Nama */}
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Enter your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input Email */}
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="Enter your email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Input Pesan */}
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Tombol Submit dengan indikator loading */}
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
