import { useEffect, useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors flex flex-col gap-72">
      <header className="flex items-center justify-between p-6 border-b border-gray-300 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <img src="/Logo.svg" alt="Netlab Logo" className="h-10" />
          <h1 className="text-xl font-bold">
            <span className="bg-black text-white px-2 py-1 rounded">Network</span>{" "}
            Laboratory
          </h1>
        </div>
        <nav className="space-x-6 font-semibold hidden md:flex">
          <a href="#" className="hover:underline">Home</a>
          <a href="#sbd" className="hover:underline">SBD</a>
          <a href="#dmj" className="hover:underline">DMJ</a>
          <a href="#os" className="hover:underline">OS</a>
          <a href="#netlab" className="hover:underline">Netlab</a>
        </nav>
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 dark:bg-gray-600 transition-all relative">
              <div
                className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  darkMode ? "translate-x-5" : ""
                }`}
              ></div>
            </div>
          </label>
        </div>
      </header>

      {/* Home Section */}
      <div className="flex flex-col items-center justify-center w-full px-6 py-16 text-center" id="home">
       <img src="/Logo.svg" className="w-60 h-78 mb-6" alt="Netlab Logo" />
         <h2 className="text-4xl font-bold mb-4">Selamat datang di NETLAB Web!!</h2>
      </div>

      {/* SBD Section */}
      <div className="flex w-full justify-center" id="sbd">
        <img src="/SBDLogo.svg" className="w-60 h-78" />
        <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            NETLAB <span className="bg-black text-white px-2 py-1 rounded">SBD</span>
          </h2>
          <div className="max-w-4xl p-6 border border-black dark:border-white rounded-lg text-left">
            <p className="mb-4">
              Sistem Basis Data (SBD) merupakan salah satu komponen penting dalam pengelolaan data
              secara efisien dan terstruktur. Dengan SBD, data dapat disimpan, diakses, dan
              dimanipulasi dengan cepat dan aman.
            </p>
            <p>
              Di Netlab, kami menggunakan pendekatan praktikal dan interaktif untuk memahami
              konsep-konsep basis data mulai dari ERD, SQL, hingga transaksi ACID. Mari belajar
              bersama!
            </p>
          </div>
        </main>
      </div>

      {/* OS Section */}
      <div className="flex w-full justify-center" id="os">
        <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            NETLAB <span className="bg-black text-white px-2 py-1 rounded">OS</span>
          </h2>
          <div className="max-w-4xl p-6 border border-black dark:border-white rounded-lg text-left">
            <p className="mb-4">
              Sistem Operasi (OS) adalah perangkat lunak inti yang mengatur sumber daya perangkat
              keras dan perangkat lunak komputer. OS memungkinkan komunikasi antara pengguna dan
              sistem.
            </p>
            <p>
              Di Netlab, kamu akan belajar proses, memori, file system, hingga sistem multitasking
              dan interrupt. Disertai praktikum nyata agar lebih paham dunia OS!
            </p>
          </div>
        </main>
        <img src="/OSLogo.svg" className="w-60 h-78" />
      </div>

      {/* DMJ Section */}
      <div className="flex w-full justify-center" id="dmj">
        <img src="/SBDLogo.svg" className="w-60 h-78" />
        <main className="flex flex-col items-center justify-center px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-4">
            NETLAB <span className="bg-black text-white px-2 py-1 rounded">DMJ</span>
          </h2>
          <div className="max-w-4xl p-6 border border-black dark:border-white rounded-lg text-left">
            <p className="mb-4">
              Dasar Manajemen Jaringan (DMJ) mengenalkan kamu pada dunia jaringan komputer mulai dari
              konsep dasar topologi, perangkat jaringan, hingga manajemen koneksi.
            </p>
            <p>
              Praktikum mencakup konfigurasi router & switch, subnetting, hingga penerapan dasar
              protokol TCP/IP. Cocok banget buat kamu yang ingin paham dunia networking secara
              mendalam!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
