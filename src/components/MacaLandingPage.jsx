import React, { useState, useEffect } from "react";
// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Para las flechas de navegación si las usas

export default function MacaLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false); // Nuevo estado para detectar móvil

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

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      // Tailwind's 'md' breakpoint is 768px. Below this, we consider it mobile.
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile(); // Check on initial load
    window.addEventListener('resize', checkMobile); // Add listener for window resize
    return () => window.removeEventListener('resize', checkMobile); // Clean up listener
  }, []);

  // Close mobile menu when clicking on link
  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

  const servicesData = [
    {
      title: "Análisis y Desarrollo de Estrategias",
      color: "bg-gradient-to-br from-purple-200 to-purple-300",
      icon: "📊",
      description: "Evaluamos tu presencia digital actual, analizamos a la competencia, identificamos oportunidades clave y definimos una estrategia sólida.",
      span: "lg:col-span-2"
    },
    {
      title: "Optimización de Perfil en Redes",
      color: "bg-gradient-to-br from-pink-300 to-pink-400",
      icon: "✨",
      description: "Renovamos tu feed, bio, links e historias destacadas, asegurando que tu perfil resuene con la estética de tu marca y atraiga a tu audiencia."
    },
    {
      title: "Creación de Contenido de Alto Impacto",
      color: "bg-gradient-to-br from-lime-300 to-green-400",
      icon: "📸",
      description: "Desde la planificación mensual hasta el diseño de posts e historias, producción de videos atractivos, copys persuasivos, publicación y gestión de mensajes."
    },
    {
      title: "Rediseño de Identidad Visual Potente",
      color: "bg-gradient-to-br from-orange-400 to-red-400",
      icon: "🖌️",
      description: "Analizamos tu marca y proponemos mejoras visuales que incluyen una paleta de colores coherente, tipografías distintivas y piezas gráficas estandarizadas."
    },
    {
      title: "Diseño y Programación de Landing Page",
      color: "bg-gradient-to-br from-blue-200 to-blue-300",
      icon: "🌐",
      description: "Creamos y programamos una landing page simple pero efectiva, perfectamente conectada con tus redes sociales y medios de contacto para maximizar conversiones."
    },
    {
      title: "Diseño Gráfico y Merchandising Exclusivo",
      color: "bg-gradient-to-br from-yellow-300 to-yellow-400",
      icon: "🎁",
      description: "Diseñamos piezas corporativas impactantes, packaging innovador y productos con una identidad profesional que elevan la percepción de tu marca."
    }
  ];

  const plansData = [
    {
      title: "PLAN LOW",
      borderColor: "border-blue-400",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      items: [
        "Estrategia digital básica",
        "Gestión de redes (contenido)",
        "1 sesión de fotos",
        "3 videos de reel",
        "3 diseños gráficos",
        "15 historias creativas",
        "*Sin moderación de comentarios"
      ]
    },
    {
      title: "A LO MACA",
      borderColor: "border-pink-400",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      popular: true,
      items: [
        "Estrategia completa y avanzada",
        "Gestión de redes integral",
        "1 sesión de fotos profesional",
        "6 videos de reel/TikTok",
        "6 diseños gráficos premium",
        "30 historias dinámicas",
        "¡Incluye moderación de comentarios!"
      ]
    },
    {
      title: "PLAN EVENTO",
      borderColor: "border-yellow-400",
      bgColor: "bg-gradient-to-br from-yellow-50 to-yellow-100",
      items: [
        "1 flyer promocional + historia",
        "3 videos cortos del evento",
        "30 fotos capturadas con iPhone",
        "Cobertura del evento en tiempo real",
        "*No incluye viáticos de traslado"
      ]
    },
    {
      title: "PLAN IDENTIDAD",
      borderColor: "border-purple-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      items: [
        "Desarrollo de identidad visual completa",
        "Diseño y desarrollo de Landing Page",
        "Kit de redes sociales profesional",
        "Estrategia digital inicial",
        "Producción de contenido de marca",
        "*No incluye hosting ni dominio"
      ]
    }
  ];

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
            <li><a href="https://behance.net/maca" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Behance</a></li>
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
              <li><a href="https://behance.net/maca" target="_blank" rel="noopener noreferrer" className="block py-2 hover:underline" onClick={handleMenuClick}>Behance</a></li>
            </ul>
          </div>
        )}
      </header>

      <div className="h-16"></div>

      {/* Hero Section - Grid Style */}
      {/* CAMBIO: Fondo del Hero al mismo azul del header */}
      <section id="inicio" className="min-h-screen bg-[#3700ff] p-6 pt-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Main Title Card - Spans 2 columns, dynamic text sizes */}
            {/* BORDE ROSA EN HERO: border-2 border-pink-300 */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-2xl flex flex-col justify-center relative overflow-hidden transform hover:scale-[1.01] transition-transform duration-300 border-2 border-pink-300">
                <div className="absolute -top-10 -left-10 w-48 h-48 bg-[#3700ff] opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-pink-500 opacity-10 rounded-full blur-2xl"></div>

                <div className="text-center z-10">
                    <h1 className="text-[#3700ff] font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 leading-tight">
                        Marketing y Comunicación
                    </h1>
                    <div className="text-pink-500 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">
                        con Actitud
                    </div>
                    <p className="text-gray-600 text-lg sm:text-xl md:text-2xl">
                        Somos <span className="font-bold text-[#3700ff]">MACA</span> ¡y hacemos <span className="font-bold text-pink-500">DE TODO!</span>
                    </p>
                </div>
            </div>

            {/* Call to Action Card - More prominent "GRATIS" with dynamic styling */}
            {/* BORDE ROSA EN HERO: border-2 border-pink-300 */}
            <div className="bg-yellow-400 rounded-3xl p-6 shadow-2xl flex flex-col justify-center items-center text-center relative overflow-hidden transform hover:scale-[1.02] transition-transform duration-300 border-2 border-pink-300">
                <div className="absolute -top-5 -right-5 w-20 h-20 bg-white rounded-full opacity-30"></div>
                <div className="absolute -bottom-5 -left-5 w-28 h-28 bg-white rounded-full opacity-30"></div>
                <div className="text-[#3700ff] font-bold text-xl md:text-2xl mb-4 z-10">
                    Primera reunión, auditoría o asesoría
                </div>
                <div className="bg-[#3700ff] text-white px-8 py-4 rounded-full font-extrabold text-2xl md:text-3xl animate-pulse shadow-xl z-10">
                    ¡GRATIS!
                </div>
            </div>

            {/* Services Preview Cards - Larger icons, bolder titles */}
            {/* BORDE ROSA EN HERO: border-2 border-pink-300 */}
            <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-3xl p-6 shadow-2xl text-white flex flex-col justify-between transform hover:scale-[1.03] transition-transform duration-300 border-2 border-pink-300">
              <div className="text-6xl mb-4 transform group-hover:rotate-6 transition-transform duration-300">📱</div>
              <div>
                <h3 className="font-bold text-xl md:text-2xl mb-2">Redes Sociales</h3>
                <p className="text-sm opacity-90">Gestión completa de tu presencia digital</p>
              </div>
            </div>

            {/* BORDE ROSA EN HERO: border-2 border-pink-300 */}
            <div className="bg-gradient-to-br from-green-400 to-blue-400 rounded-3xl p-6 shadow-2xl text-white flex flex-col justify-between transform hover:scale-[1.03] transition-transform duration-300 border-2 border-pink-300">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🎨</div>
              <div>
                <h3 className="font-bold text-xl md:text-2xl mb-2">Diseño Gráfico</h3>
                <p className="text-sm opacity-90">Identidad visual que conecta con tu audiencia</p>
              </div>
            </div>

            {/* BORDE ROSA EN HERO: border-2 border-pink-300 */}
            <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-3xl p-6 shadow-2xl text-white flex flex-col justify-between transform hover:scale-[1.03] transition-transform duration-300 border-2 border-pink-300">
              <div className="text-6xl mb-4 transform group-hover:-translate-y-1 transition-transform duration-300">💻</div>
              <div>
                <h3 className="font-bold text-xl md:text-2xl mb-2">Desarrollo Web</h3>
                <p className="text-sm opacity-90">Sitios web que convierten visitantes en clientes</p>
              </div>
            </div>

            {/* Stats or Features - More dynamic layout and numbers */}
            {/* BORDE ROSA EN HERO: border-2 border-pink-300 */}
            <div className="lg:col-span-2 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl p-6 shadow-2xl grid grid-cols-1 sm:grid-cols-3 gap-4 items-center justify-around border-2 border-pink-300">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-[#3700ff] animate-fade-in">50+</div>
                <div className="text-base text-gray-600">Proyectos exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-[#3700ff] animate-fade-in delay-100">100%</div>
                <div className="text-base text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-extrabold text-[#3700ff] animate-fade-in delay-200">24/7</div>
                <div className="text-base text-gray-600">Soporte y asesoría</div>
              </div>
            </div>

            {/* Contact Preview - More inviting and direct, with icon animation */}
            {/* BORDE ROSA EN HERO: border-2 border-pink-300 */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl p-6 shadow-2xl text-white flex flex-col justify-center items-center text-center transform hover:scale-[1.02] transition-transform duration-300 border-2 border-pink-300">
              <div className="text-6xl mb-4 animate-bounce-slow">👋</div>
              <h3 className="font-bold text-xl md:text-2xl mb-4">¡Listo para despegar tu marca?</h3>
              <a href="#contacto" className="bg-white text-[#3700ff] px-6 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors transform hover:scale-105">
                ¡Contactanos Ahora!
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section - Carrusel en móvil, Grid en desktop */}
      <section id="servicios" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-gray-600">
              Soluciones integrales para potenciar tu presencia digital con un enfoque creativo.
            </p>
          </div>

          {isMobile ? (
            // Carrusel para dispositivos móviles
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2} // Muestra una tarjeta y un poco de la siguiente
              centeredSlides={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="pb-10" // Padding bottom for pagination dots
            >
              {servicesData.map((service, idx) => (
                <SwiperSlide key={idx} className="h-full">
                  {/* APLICANDO BORDE ROSA AQUÍ */}
                  <div className={`${service.color} rounded-3xl shadow-lg p-6 h-full flex flex-col justify-between border-2 border-pink-300`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-extrabold text-xl text-[#3700ff] mb-2 leading-tight">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 opacity-90">{service.description}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // Grid normal para desktop
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, idx) => (
                <div key={idx} className={`${service.span || ''} group cursor-pointer`}>
                  {/* APLICANDO BORDE ROSA AQUÍ */}
                  <div className={`${service.color} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col justify-between hover:scale-[1.02] border-2 border-pink-300`}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl group-hover:rotate-3 transition-transform duration-300">{service.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-extrabold text-xl md:text-2xl text-[#3700ff] mb-2 leading-tight">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 opacity-90">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Plans Section - Carrusel en móvil, Grid en desktop */}
      <section id="planes" className="py-20 bg-[#f3eaff] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Nuestros Planes a Medida</h2>
            <p className="text-lg text-gray-600 mb-8">Elegí la opción perfecta que impulsa tu negocio al siguiente nivel.</p>
          </div>

          {isMobile ? (
            // Carrusel para dispositivos móviles
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.1} // Muestra una tarjeta y un poco de la siguiente
              centeredSlides={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              className="pb-10"
            >
              {plansData.map((plan, idx) => (
                <SwiperSlide key={idx} className="h-full">
                  {/* PlanCard ya tiene un borde, le añadimos el rosa más grueso */}
                  <PlanCard {...plan} customBorderClass="border-2 border-pink-300" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // Grid normal para desktop
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plansData.map((plan, idx) => (
                <PlanCard key={idx} {...plan} customBorderClass="border-2 border-pink-300" />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Team Section - Dynamic text, subtle effects */}
      <section id="equipo" className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Nuestro Equipo Apasionado</h2>
            <p className="text-lg text-gray-600">Conocé a las mentes creativas detrás de MACA que harán realidad tus ideas.</p>
          </div>

          <div className="max-w-2xl mx-auto text-center bg-gray-50 p-8 rounded-3xl shadow-xl border-t-8 border-pink-400">
            <div className="w-64 h-64 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl font-extrabold text-white shadow-2xl animate-spin-slow-reverse">
              MACA
            </div>
            <h3 className="text-3xl font-extrabold text-[#3700ff] mb-4">Las Mentes Detrás de tu Éxito</h3>
            <p className="text-gray-700 text-lg">
              Somos un trío dinámico de mentes creativas, expertas en marketing, comunicación y diseño.
              Trabajamos en perfecta armonía para transformar tus ideas en resultados tangibles y espectaculares.
            </p>
          </div>
        </div>
      </section>

      {/* Clientes VIP Grid - Carrusel en móvil, Grid en desktop */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 px-6" id="clientes">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Nuestros Clientes VIP</h2>
            <p className="text-lg text-gray-600">Marcas increíbles que ya confían en el poder de MACA.</p>
          </div>

          {isMobile ? (
            // Carrusel para dispositivos móviles
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.1} // Muestra una tarjeta y un poco de la siguiente
              centeredSlides={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 6000,
                disableOnInteraction: false,
              }}
              className="pb-10"
            >
              {vipClients.map((client, index) => (
                <SwiperSlide key={index} className="h-full">
                  {/* APLICANDO BORDE ROSA AQUÍ */}
                  <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-pink-300 h-full"> {/* h-full for consistent height */}
                    <div className={`w-20 h-20 ${client.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white shadow-md`}>
                      {client.initial}
                    </div>
                    <h3 className="text-xl font-extrabold text-[#3700ff] mb-2 text-center">
                      <a
                        href={`https://instagram.com/${client.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-purple-600 transition-colors duration-300 hover:underline"
                      >
                        {client.name}
                      </a>
                    </h3>
                    <p className="text-gray-600 text-base text-center italic">"{client.testimonial}"</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            // Grid normal para desktop
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vipClients.map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-3xl shadow-lg border-b-4 border-l-4 border-transparent hover:border-pink-500 transition-all duration-300 transform hover:scale-105">
                  {/* APLICANDO BORDE ROSA AQUÍ - Se combina con el hover existente */}
                  <div className={`w-20 h-20 ${client.bgColor} rounded-full mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white shadow-md border-2 border-pink-300`}>
                    {client.initial}
                  </div>
                  <h3 className="text-xl font-extrabold text-[#3700ff] mb-2 text-center">
                    <a
                      href={`https://instagram.com/${client.username}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-purple-600 transition-colors duration-300 hover:underline"
                    >
                      {client.name}
                    </a>
                  </h3>
                  <p className="text-gray-600 text-base text-center italic">"{client.testimonial}"</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Section - More impactful call to action */}
      <section id="contacto" className="py-20 bg-[#3700ff] text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">¿Listo para transformar tu marca?</h2>
          <p className="text-xl sm:text-2xl mb-8 text-gray-200">
            Contáctanos hoy mismo y descubrí cómo podemos impulsar tu presencia digital y alcanzar tus metas.
          </p>
          <div className="space-y-6 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <a
              href="mailto:info@maca.com"
              className="inline-block bg-white text-[#3700ff] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              PEDÍ TU PRESUPUESTO
            </a>
            <a
              href="https://wa.me/1234567890" // Placeholder WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-500 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <i className="fab fa-whatsapp mr-2"></i> WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-400 text-sm">© 2025 MACA. Todos los derechos reservados. | Desarrollado con ❤️ por MACA</p>
        </div>
      </footer>
    </div>
  );
}

function PlanCard({ title, items, borderColor, bgColor, popular = false, customBorderClass = "" }) {
  return (
    // APLICANDO BORDE ROSA MÁS GRUESO AQUÍ: border-2
    <div className={`${bgColor} p-6 rounded-3xl shadow-lg border-l-8 ${borderColor} relative hover:transform hover:scale-105 transition-all duration-300 flex flex-col justify-between ${customBorderClass}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
          ¡Más Popular!
        </div>
      )}
      <h3 className="text-2xl font-extrabold text-[#3700ff] mb-4 italic text-center">{title}</h3>
      <ul className="text-sm text-gray-700 space-y-3 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-center">
        <button className="bg-[#3700ff] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-purple-700 transition-colors shadow-md">
          Elegir Plan
        </button>
      </div>
    </div>
  );
}