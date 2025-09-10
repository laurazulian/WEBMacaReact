import React, { useState, useEffect } from "react";
// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import teamPhoto from '../Fotos/2nosotras.png';
import Recurso1 from '../Fotos/Recurso1.png';
import Recurso2 from '../Fotos/Recurso2.png';
import Recurso3 from '../Fotos/Recurso3.png';
import Recurso4 from '../Fotos/Recurso4.gif';
import LogoMaca from '../Fotos/LOGOMACA.png';
import Recurso5 from '../Fotos/Recurso5.png';
import Estrategia from '../Fotos/1Estrategia.png';
import Identidad from '../Fotos/2Identidad.png';
import Redes from '../Fotos/3Redes.png';
import Web from '../Fotos/4Web.png';
import Diseno from "../Fotos/6Diseno.png";

import Contenido from '../Fotos/5Contenido.png';
import imgLu from "../Fotos/LU_QUEVEDO_CERAMICA.png";
import imgParamitas from "../Fotos/PARAMITAS.png";
import imgUrutrek from "../Fotos/URUTREK.png";
import img3dmazz from "../Fotos/3DMAZZ.png";

export default function MacaLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

 const vipClients = [
  {
    name: "Lu Quevedo Cerámica",
    username: "lucilaquevedoceramica_",
    image: imgLu, // ruta local o URL externa
    testimonial: "Trabajar con el equipo de Las Maca es una experiencia muy enriquecedora. Valoro su visión creativa, su dedicación y su compromiso por hacer crecer mi emprendimiento. Las elijo y súper recomiendo :)"
  },
  {
    name: "Paramitas Uspallata",
    username: "paramitas.uspallata",
    image: imgParamitas,
    testimonial: "Profesionalismo y creatividad en cada proyecto. Superaron mis expectativas completamente."
  },
  {
    name: "Urutrek",
    username: "urutrek",
    image: imgUrutrek,
    testimonial: "El mejor equipo para desarrollo web. Resultados que realmente impulsan el negocio."
  },
  {
    name: "3dmazz",
    username: "3dmazz",
    image: img3dmazz,
    testimonial: "Innovación y tecnología de primera. Mi proyecto web quedó espectacular."
  }
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vipClients.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [vipClients.length]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMenuClick = () => {
    setIsMenuOpen(false);
  };

const servicesData = [
  {
    title: "Estrategia y plan de comunicación",
    icon: <img src={Estrategia} alt="Estrategia" className="w-12 h-12" />,
    description: "Tu marca con rumbo claro. Te ayudamos a ordenar ideas, definir tu voz y armar un plan para que tu comunicación tenga coherencia y resultados.",
    color: "bg-gradient-to-br from-estrategia to-estrategia/80"
  },
  {
    title: "Identidad de Marca",
    icon: <img src={Identidad} alt="Identidad de Marca" className="w-12 h-12" />,
    description: "No es solo un logo. Es quien sos. Creamos marcas con personalidad: desde el nombre hasta cómo se expresa en todos los canales.",
    color: "bg-gradient-to-br from-identidad to-identidad/80"
  },
  {
    title: "Redes Sociales",
    icon: <img src={Redes} alt="Redes Sociales" className="w-12 h-12" />,
    description: "Presencia constante, sin improvisar. Planificamos, diseñamos y gestionamos todo lo que tu marca necesita en redes.",
    color: "bg-gradient-to-br from-redes to-redes/80"
  },
  {
    title: "Sitios Web",
    icon: <img src={Web} alt="Sitios Web" className="w-12 h-12" />,
    description: "Tu lugar en internet, bien hecho. Diseñamos webs pensadas para vender, informar o conectar. Claras, modernas y fáciles de usar.",
    color: "bg-gradient-to-br from-sitios to-sitios/80"
  },
  {
    title: "Contenido & Eventos",
    icon: <img src={Contenido} alt="Contenido y Eventos" className="w-12 h-12" />,
    description: "Lo que hacés, en formato visual. Generamos contenido audiovisual que muestra lo mejor de tu marca y acompañamos eventos desde la estética hasta la cobertura.",
    color: "bg-gradient-to-br from-contenido to-contenido/80"
  },
  {
    title: "Diseño Gráfico",
    icon: <img src={Diseno} alt="Diseño Gráfico" className="w-12 h-12" />,
    description: "Tu marca en todos los formatos. Diseñamos piezas gráficas que acompañan tu identidad en cada punto de contacto: online, físico y en eventos.",
    color: "bg-gradient-to-br from-diseño to-diseño/80"
  },
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
      <header className="fixed top-0 left-0 w-full bg-[#0000FF] text-white z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <img src={LogoMaca} alt="MACA Logo" className="h-8 md:h-10 object-contain" />
          <div className="hidden md:block bg-white rounded-full px-6 py-2 shadow-md">
            <ul className="flex gap-6 text-sm">
              <li><a href="#inicio" className="text-[#0000FF] hover:underline transition-all">Inicio</a></li>
              <li><a href="#servicios" className="text-[#0000FF] hover:underline transition-all">Servicios</a></li>
              <li><a href="#planes" className="text-[#0000FF] hover:underline transition-all">Planes</a></li>
              <li><a href="#equipo" className="text-[#0000FF] hover:underline transition-all">Equipo</a></li>
              <li><a href="#contacto" className="text-[#0000FF] hover:underline transition-all">Contacto</a></li>
              <li><a href="https://behance.net/maca" target="_blank" rel="noopener noreferrer" className="text-[#0000FF] hover:underline transition-all">Behance</a></li>
            </ul>
          </div>
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
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="px-4 py-2 space-y-2 text-sm">
              <li><a href="#inicio" className="block py-2 text-[#0000FF] hover:underline" onClick={handleMenuClick}>Inicio</a></li>
              <li><a href="#servicios" className="block py-2 text-[#0000FF] hover:underline" onClick={handleMenuClick}>Servicios</a></li>
              <li><a href="#planes" className="block py-2 text-[#0000FF] hover:underline" onClick={handleMenuClick}>Planes</a></li>
              <li><a href="#equipo" className="block py-2 text-[#0000FF] hover:underline" onClick={handleMenuClick}>Equipo</a></li>
              <li><a href="#contacto" className="block py-2 text-[#0000FF] hover:underline" onClick={handleMenuClick}>Contacto</a></li>
              <li><a href="https://behance.net/maca" target="_blank" rel="noopener noreferrer" className="block py-2 text-[#0000FF] hover:underline" onClick={handleMenuClick}>Behance</a></li>
            </ul>
          </div>
        )}
      </header>

      <div className="h-16"></div>

      {/* Hero Section - Espacio reducido */}
      {/* Hero Section - Con GIF */}
      <section id="inicio" className="bg-[#0000FF] p-6 py-12 flex items-center justify-center text-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="md:col-span-2 bg-black rounded-3xl shadow-2xl flex flex-col justify-center relative overflow-hidden min-h-[300px] md:min-h-[320px]">
              <img
                src={Recurso4}
                alt="MACA Marketing y Comunicación con Actitud"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[180px] flex items-center justify-center">
            <img
              src={Recurso5}
              alt="MACA Marketing y Comunicación con Actitud"
              className="w-full h-full object-cover rounded-3xl"
            />

            {/* Overlay opcional para oscurecer la foto y dar más contraste al texto */}
            <div className="absolute inset-0 bg-black/30"></div>

            <h3 className="absolute top-12 w-full text-[#FF4824] font-extrabold text-2xl md:text-3xl text-center">
              <span>Nuestros </span>
              <br />
              <span>Trabajos</span>
            </h3>
          </div>


            <div className="bg-cover bg-center rounded-3xl p-6 shadow-2xl flex items-end relative overflow-hidden h-[160px] md:h-[180px]" style={{ backgroundImage: `url(${Recurso1})` }}>
              <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
              <h3 className="font-bold text-4xl text-white z-10">Redes</h3>
            </div>
            <div className="bg-cover bg-center rounded-3xl p-6 shadow-2xl flex items-end relative overflow-hidden h-[160px] md:h-[180px]" style={{ backgroundImage: `url(${Recurso2})` }}>
              <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
              <h3 className="font-bold text-4xl text-white z-10">Diseño</h3>
            </div>
            <div className="bg-cover bg-center rounded-5xl p-6 shadow-2xl flex items-end relative overflow-hidden h-[160px] md:h-[180px]" style={{ backgroundImage: `url(${Recurso3})` }}>
              <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
              <h3 className="font-bold text-4xl text-white z-10">Web</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Carrusel en móvil, Grid en desktop con Tooltip */}
      <section id="servicios" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3700ff] mb-4">¿Qué podemos hacer por tu marca?</h2>
              <p className="font-poppins font-normal text-lg md:text-xl text-[#2b0057] text-center">
            Servicios para que tu proyecto crezca con{" "}
            <span className="font-semibold italic">Identidad</span>,{" "}
            <span className="font-semibold italic">Claridad</span> y{" "}
            <span className="font-semibold italic">Actitud</span>.
          </p>

        </div>

          {isMobile ? (
            // Carrusel para dispositivos móviles (descripción visible directamente)
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.2}
              centeredSlides={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              className="pb-10"
            >
              {servicesData.map((service, idx) => (
                <SwiperSlide key={idx} className="h-full">
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
            // Grid normal para desktop con funcionalidad de pop-up (tooltip)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, idx) => (
                // Añadimos 'group' y 'relative' al contenedor de cada tarjeta
                <div key={idx} className="group cursor-pointer relative">
                  <div className={`${service.color} rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col justify-center items-center text-center hover:scale-[1.02] border-2 border-pink-300 overflow-hidden`}>
                    {/* Contenido visible siempre (icono y título) */}
                    <div className="flex flex-col items-center gap-4 mb-4">
                      <div className="text-5xl group-hover:rotate-3 transition-transform duration-300">{service.icon}</div>
                      <h3 className="font-extrabold text-xl md:text-2xl text-[#3700ff] mb-0 leading-tight">{service.title}</h3>
                    </div>

                    {/* Pop-up (Tooltip) de la descripción */}
                    <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl
                                    flex items-center justify-center p-6 text-center
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                    pointer-events-none group-hover:pointer-events-auto z-10
                                    border-2 border-pink-300"> {/* Mismo borde para el pop-up */}
                      <p className="text-gray-700 text-base">{service.description}</p>
                    </div>
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
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.1}
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
                  <PlanCard {...plan} customBorderClass="border-2 border-pink-300" />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
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
           {/*  <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Nuestro Equipo Apasionado</h2>
            <p className="text-lg text-gray-600">Conocé a las mentes creativas detrás de MACA que harán realidad tus ideas.</p>*/}
          </div>

          <div className="max-w-6xl mx-auto text-center bg-gray-50 p-8 rounded-3xl shadow-xl border border-pink-400">
            <img src={teamPhoto} alt="Equipo MACA" className="w-full rounded-md shadow-md mb-6 object-cover" style={{ maxHeight: '500px' }} />
            <h3 className="text-3xl font-extrabold text-[#3700ff] mb-4">MACA somos Lau, Cami y Vale</h3>
            <p className="text-gray-700 text-lg">
              <strong>Tres miradas distintas unidas por una misma idea: que la comunicación puede transformar marcas y abrir caminos.</strong>
              {/* <br />
              Cami convierte conceptos en diseño, para que cada detalle tenga sentido y emoción.
              <br />
              Lau combina programación y comunicación, creando experiencias digitales que funcionan y dejan huella.
              <br />
              Vale conecta desde redes y video, llevando mensajes que inspiran y generan cercanía real.
              <br />*/}
              <br />
              Creemos en la fuerza de las ideas bien contadas. Por eso trabajamos juntas: para que tu marca tenga voz, identidad y futuro.
            </p>

          </div>
        </div>
      </section>

      {/* Clientes VIP Grid - Carrusel en móvil, Grid en desktop */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 px-6" id="clientes">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Nuestros Clientes</h2>
            <p className="text-lg text-gray-600">Proyectos y marcas con quienes trabajamos.</p>
          </div>

          {isMobile ? (
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.1}
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
                  <div className="bg-white p-6 rounded-3xl shadow-lg border-2 border-pink-300 h-full">
                    <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-md">
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
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
                    <p className="text-gray-600 text-base text-center italic">
                      "{client.testimonial}"
                    </p>
                  </div>
                </SwiperSlide>
              ))}

            </Swiper>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vipClients.map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-3xl shadow-lg border-b-4 border-l-4 border-transparent hover:border-pink-500 transition-all duration-300 transform hover:scale-105">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-md">
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-20 h-20 ${client.bgColor || 'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'} rounded-full flex items-center justify-center text-3xl font-bold text-white`}>
                        {client.initial}
                      </div>
                    )}
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
              href="https://wa.me/549261XXXXXXX" // Reemplaza con tu número de WhatsApp real, incluyendo el código de país. Ejemplo: +54 9 261 XXXXXXX
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