import React, { useState, useEffect } from "react";

export default function MacaLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

const vipClients = [
  {
    name: "Lu Quevedo Cerámica",
    username: "lucilaquevedoceramica_",
    initial: "L",
    bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    testimonial: "Increíble trabajo en el desarrollo de mi tienda online. La atención al detalle es excepcional."
  },
  {
    name: "Paramitas Uspallata",
    username: "paramitas.uspallata",
    initial: "P",
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-500",
    testimonial: "Profesionalismo y creatividad en cada proyecto. Superaron mis expectativas completamente."
  },
  {
    name: "Urutrek",
    username: "urutrek",
    initial: "U",
    bgColor: "bg-gradient-to-r from-green-500 to-blue-500",
    testimonial: "El mejor equipo para desarrollo web. Resultados que realmente impulsan el negocio."
  },
  {
    name: "3dmazz",
    username: "3dmazz",
    initial: "3",
    bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
    testimonial: "Innovación y tecnología de primera. Mi proyecto web quedó espectacular."
  }
];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vipClients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [vipClients.length]);

  // Close mobile menu when clicking on link
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-[#3700ff] text-white shadow-lg z-50">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="font-bold text-xl">MACA</span>
          <ul className="hidden md:flex gap-6 text-sm">
            <li><a href="#inicio" className="hover:underline transition-all">Inicio</a></li>
            <li><a href="#servicios" className="hover:underline transition-all">Servicios</a></li>
            <li><a href="#planes" className="hover:underline transition-all">Planes</a></li>
            <li><a href="#equipo" className="hover:underline transition-all">Equipo</a></li>
            <li><a href="#contacto" className="hover:underline transition-all">Contacto</a></li>
          </ul>
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#3700ff] border-t border-purple-400">
            <ul className="px-4 py-2 space-y-2 text-sm">
              <li><a href="#inicio" className="block py-2 hover:underline" onClick={handleMenuClick}>Inicio</a></li>
              <li><a href="#servicios" className="block py-2 hover:underline" onClick={handleMenuClick}>Servicios</a></li>
              <li><a href="#planes" className="block py-2 hover:underline" onClick={handleMenuClick}>Planes</a></li>
              <li><a href="#equipo" className="block py-2 hover:underline" onClick={handleMenuClick}>Equipo</a></li>
              <li><a href="#contacto" className="block py-2 hover:underline" onClick={handleMenuClick}>Contacto</a></li>
            </ul>
          </div>
        )}
      </header>

      <div className="h-16"></div>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen bg-gradient-to-br from-[#3700ff] to-[#5e3dff] flex flex-col items-center justify-center text-center px-4 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-pink-400 opacity-10 rounded-full animate-bounce"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="block text-pink-400 animate-fade-in">Los contenidos</span>
            <span className="block animate-fade-in delay-200">al <span className="bg-white text-[#3700ff] px-3 py-1 rounded font-bold">servicio</span></span>
            <span className="block text-white animate-fade-in delay-400">de la <span className="text-blue-300">estrategia</span></span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl animate-fade-in delay-600">
            La actitud y el impulso que necesita tu marca para crecer
          </p>
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold text-lg inline-block mb-4 animate-pulse">
            Primera reunión, auditoría o asesoría GRATIS
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-[#3700ff] mb-8">Somos MACA y hacemos ¡DE TODO!</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Desde la estrategia hasta la ejecución, acompañamos tu marca con soluciones personalizadas y creativas.
          </p>
        </div>
      </section>

     <section id="servicios" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 px-6 overflow-visible">
  <div className="max-w-5xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Servicios</h2>
    <p className="text-lg text-gray-600">
      Soluciones integrales para potenciar tu presencia digital
    </p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left font-bold text-black max-w-6xl mx-auto overflow-visible relative z-0">
    {[
      {
        title: "Análisis y desarrollo de estrategias",
        color: "bg-purple-200",
        icon: "📊",
        description:
          "Evaluamos tu presencia digital actual. Estudiamos el perfil de la competencia. Identificamos oportunidades. Definimos objetivos y estrategia.",
      },
      {
        title: "Optimización de perfil en redes",
        color: "bg-pink-300",
        icon: "📱",
        description:
          "Organizamos tu feed, bio, links e historias destacadas. Alineamos tu perfil con tu estética.",
      },
      {
        title: "Creación de contenido para redes",
        color: "bg-lime-300",
        icon: "🖼️",
        description:
          "Planificación mensual, diseño de post e historias, producción de videos, copys, publicación y gestión de mensajes.",
      },
      {
        title: "Rediseño de identidad visual",
        color: "bg-orange-400",
        icon: "🎨",
        description:
          "Evaluamos tu marca y proponemos mejoras visuales con paleta, tipografías y piezas gráficas estandarizadas.",
      },
      {
        title: "Landing page",
        color: "bg-blue-200",
        icon: "💻",
        description:
          "Diseño y programación de una web simple conectada a tus redes y medios de contacto.",
      },
      {
        title: "Diseño gráfico y merch",
        color: "bg-yellow-300",
        icon: "🛍️",
        description:
          "Diseñamos piezas corporativas, packaging y productos con identidad profesional para tu marca.",
      },
    ].map((service, idx) => (
      <div key={idx} className="relative group cursor-pointer overflow-visible z-10">
        {/* Tooltip arriba de la tarjeta */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-full w-72 bg-white text-[#2552A3] text-sm p-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-50 pointer-events-none">
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rotate-45 shadow-md z-[-1]"></div>
          {service.description}
        </div>

        {/* Tarjeta principal */}
        <div className={`rounded-xl shadow hover:shadow-lg transition flex flex-col items-center text-center p-6 h-full ${service.color}`}>
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="font-bold text-lg text-[#2552A3]">{service.title}</h3>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Plans Section */}

        {/* Plans Section */}
      <section id="planes" className="py-20 bg-[#f3eaff] px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Planes</h2>
          <p className="text-lg text-gray-600 mb-8">Elegí el plan que mejor se adapte a tus necesidades</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <PlanCard 
            title="LOW" 
            borderColor="border-blue-400" 
            items={[
              "Estrategia digital",
              "Gestión de redes",
              "1 sesión de fotos",
              "3 videos",
              "3 diseños",
              "15 historias",
              "*Sin moderación"
            ]} 
          />
          <PlanCard 
            title="A lo Maca" 
            borderColor="border-pink-400" 
            popular={true}
            items={[
              "Estrategia completa",
              "Gestión de redes",
              "1 sesión de fotos",  
              "6 videos",
              "6 diseños",
              "30 historias",
              "Incluye moderación"
            ]} 
          />
          <PlanCard 
            title="Evento" 
            borderColor="border-yellow-400" 
            items={[
              "1 flyer + historia",
              "3 videos",
              "30 fotos iPhone",
              "Cobertura en tiempo real",
              "*Sin viáticos"
            ]} 
          />
          <PlanCard 
            title="Identidad" 
            borderColor="border-purple-500" 
            items={[
              "Desarrollo de identidad visual",
              "Landing page",
              "Kit redes",
              "Estrategia digital y producción de contenido",
              "*No incluye hosting/dominio"
            ]} 
          />
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Nuestro Equipo</h2>
          <p className="text-lg text-gray-600">Conocé a las personas detrás de MACA</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <TeamMember 
            name="MACA 1"
            role="Creativa de alto vuelo"
            bgColor="bg-pink-200"
          />
          <TeamMember 
            name="MACA 2" 
            role="Estratega y ejecutora"
            bgColor="bg-purple-200"
          />
          <TeamMember 
            name="MACA 3"
            role="Comunicación y contenido"
            bgColor="bg-blue-200"
          />
        </div>
      </section>

      {/* Clientes VIP Carousel */}
<section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 px-6" id="clientes">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-extrabold text-[#3700ff] mb-8">Clientes VIP</h2>
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {vipClients.map((client, index) => (
          <div
            key={index}
            className="min-w-full px-4"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-xl mx-auto">
              <div className={`w-20 h-20 ${client.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white`}>
                {client.initial}
              </div>
              <h3 className="text-xl font-bold text-[#3700ff] mb-2">
                <a
                  href={`https://instagram.com/${client.username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-600 transition-colors duration-300 hover:underline"
                >
                  {client.name}
                </a>
              </h3>
              <p className="text-gray-600 italic">"{client.testimonial}"</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation buttons - DENTRO del contenedor relative */}
      <button
        onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : vipClients.length - 1)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Previous testimonial"
      >
        ←
      </button>
      <button
        onClick={() => setCurrentSlide((currentSlide + 1) % vipClients.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        aria-label="Next testimonial"
      >
        →
      </button>
    </div>
    
    {/* Dots indicator - FUERA del contenedor overflow-hidden pero DENTRO del contenedor principal */}
    <div className="flex justify-center gap-4 mt-6">
      {vipClients.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-[#3700ff]' : 'bg-gray-300'}`}
          aria-label={`Go to testimonial ${index + 1}`}
        ></button>
      ))}
    </div>
  </div>
</section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-[#3700ff] text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Querés dar el primer paso?</h2>
          <p className="text-xl mb-8 text-gray-200">
            Contáctanos y descubrí cómo podemos potenciar tu marca
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a 
              href="mailto:info@maca.com" 
              className="inline-block bg-white text-[#3700ff] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              PEDÍ TU PRESUPUESTO
            </a>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-600 transition-all transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-400">© 2025 MACA. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ title, bgColor, icon }) {
  return (
    <div className={`${bgColor} p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer`}>
      <div className="text-3xl mb-3">{icon}</div>
      <div className="font-bold text-gray-800">{title}</div>
    </div>
  );
}

function PlanCard({ title, price, priceSubtitle, items, borderColor, popular = false }) {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-lg border-l-8 ${borderColor} relative hover:transform hover:scale-105 transition-all duration-300`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold">
          Más Popular
        </div>
      )}
      <h3 className="text-2xl font-extrabold text-[#3700ff] mb-2 italic">{title}</h3>
      <div className="mb-4">
        <div className="text-lg font-bold text-gray-800">{price}</div>
        {priceSubtitle && <div className="text-sm text-gray-600">{priceSubtitle}</div>}
      </div>
      <ul className="text-sm text-gray-700 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamMember({ name, role, bgColor }) {
  return (
    <div className="text-center">
      <div className={`w-32 h-32 ${bgColor} rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-gray-700`}>
        {name.split(' ')[1]}
      </div>
      <h3 className="text-xl font-bold text-[#3700ff] mb-2">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}