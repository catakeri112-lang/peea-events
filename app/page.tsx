import Services from "./components/Services";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <main className="relative text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 py-5 bg-black/20 backdrop-blur-xl border-b border-white/10">

        <h2 className="text-2xl tracking-[6px] font-light">
          Peea Events
        </h2>

        <div className="hidden md:flex gap-10 text-sm uppercase tracking-[3px]">
          <a className="hover:opacity-70 transition" href="#home">Acasă</a>
          <a className="hover:opacity-70 transition" href="#services">Servicii</a>
          <a className="hover:opacity-70 transition" href="#gallery">Galerie</a>
          <a className="hover:opacity-70 transition" href="#contact">Contact</a>
        </div>

        <button className="border border-white/60 px-6 py-3 rounded-full text-sm uppercase tracking-[2px] hover:bg-white hover:text-black transition duration-300">
          Cere Ofertă
        </button>

      </nav>

      {/* HERO */}
      <div className="relative h-screen overflow-hidden scroll-mt-32" id="home">

        <div
          className="absolute top-0 left-0 w-full h-full bg-cover scale-110"
          style={{
            backgroundImage: "url('/hero.jpg')",
            backgroundPosition: "center bottom",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <section className="relative z-10 h-full flex items-center justify-center text-center px-6">

          <div className="max-w-5xl animate-fade-in space-y-6">

            <p className="uppercase tracking-[10px] text-sm text-gray-200">
              Elegant Events & Premium Experiences
            </p>

            <h1 className="text-6xl md:text-8xl font-semibold leading-tight">
              Peea Events
            </h1>

            <p className="text-lg md:text-2xl text-gray-300">
              Transformăm nunți, aniversări și evenimente speciale
              în experiențe memorabile
            </p>

            <div className="flex gap-4 justify-center pt-4">

              <button className="bg-white text-black px-8 py-4 rounded-full hover:scale-105 transition">
                Cere Ofertă
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
                Vezi Galerie
              </button>

            </div>

          </div>

        </section>

      </div>

      {/* SERVICES */}
      <div id="services" className="scroll-mt-32">
        <Services />
      </div>

      {/* GALLERY */}
      <div id="gallery" className="scroll-mt-32">
        <Gallery />
      </div>

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-32 bg-black text-white py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h2 className="text-5xl font-semibold mb-16">
            Contact
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border border-white/10 rounded-[30px] p-10">
              <h3 className="text-2xl mb-4">Rezervări</h3>
              <p className="text-gray-300">0762 386 387</p>
            </div>

            <div className="border border-white/10 rounded-[30px] p-10">
              <h3 className="text-2xl mb-4">Administrare</h3>
              <p className="text-gray-300">0762 680 264</p>
            </div>

            <div className="md:col-span-2 border border-white/10 rounded-[30px] p-10">
              <h3 className="text-2xl mb-4">Email</h3>
              <p className="text-gray-300">Office@Peea-Events.ro</p>

              <h3 className="text-2xl mt-8 mb-4">Facebook</h3>
              <a
                href="https://www.facebook.com/profile.php?id=61588928992028"
                target="_blank"
                className="text-gray-300 underline hover:text-white transition"
              >
                Peea Events Facebook
              </a>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}