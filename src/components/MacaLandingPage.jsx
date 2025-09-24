import React, { useState, useEffect } from "react";
// Importaciones de Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from "framer-motion";

import teamPhoto from '../Fotos/nosotras.png';
import Recurso1 from '../Fotos/Recurso1.png';
import Recurso2 from '../Fotos/Recurso2.png';
import Recurso3 from '../Fotos/Recurso3.png';
import Recurso4 from '../Fotos/Recurso4.gif';
import LogoMaca from '../Fotos/LOGOMACA.png';
import Recurso5 from '../Fotos/Recurso5.png';
import Recurso6 from '../Fotos/Recurso6.gif';
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
import portadaWeb from "../Fotos/portadaWeb.png";

export default function MacaLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

 const vipClients = [
  {
    name: "Lu Quevedo Cerámica",
    username: "lucilaquevedoceramica__",
    image: imgLu, // ruta local o URL externa
    testimonial: "Trabajar con el equipo de Las Maca es una experiencia muy enriquecedora. Valoro su visión creativa, su dedicación y su compromiso por hacer crecer mi emprendimiento. Las elijo y súper recomiendo :)"
  },
  {
    name: "Paramitas Uspallata",
    username: "paramitas.uspallata",
    image: imgParamitas,
    testimonial: "Confiar en MACA fue un gran acierto. Supieron captar la esencia de Paramitas y transformarla en una marca con identidad y presencia real en redes. Nos sentimos acompañados en todo momento, con profesionalismo y mucha calidez."
  },
  {
    name: "Urutrek",
    username: "urutrek",
    image: imgUrutrek,
    testimonial: "Su compromiso con cada detalle, desde la corrección de textos hasta la calidad audiovisual, demuestran su profesionalismo. Estamos realmente muy conformes y agradecidos con el trabajo que las tres realizan."
  },
  {
    name: "3dmazz",
    username: "3dmazz",
    image: img3dmazz,
    testimonial: "Las Macas me han ayudado a recuperar el amor por crear contenido. Se prenden a cada idea loca que proponemos y ¡hasta traen ideas aún más locas! Si estás estancado o querés empezar a crear contenido para un crecimiento orgánico y constante, nada mejor que estas genias."
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
    title: "Estrategia & Comunicación",
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
    title: "Redes LOW",
    borderColor: "border-pink-400",
    bgColor:"bg-[#ffd1a4]",
    items: [
      <p className="font-bold italic">
        Ideal para quienes quieren estar presentes en redes de forma simple y constante.
      </p>,
      <strong>Planificación y publicación:</strong>,
      "4 videos dinámicos.",
      "3 carruseles.",
      "2 posteos estáticos con fotos.",
      "10 a 20 historias.",
      <>
        <strong>Publicidad digital:</strong> 1 campaña de Meta Ads para ampliar tu alcance y atraer más clientes.
      </>
    ]
  },
  {
    title: "Redes A lo MACA",
    borderColor: "border-pink-400",
    bgColor:"bg-[#9bdadd]",
    items: [
      <p className="font-bold italic">
        Para empezar a jugar en otra liga. Pensado para marcas que quieren hacer ruido y crecer en comunidad.
      </p>,
      <strong>Planificación y publicación:</strong>,
      <strong>Moderación de comentarios</strong>,
      "8 videos dinámicos",
      "6 carruseles",
      "4 posteos estáticos con fotos",
      "20 a 30 historias.",
      <>
        <strong>Publicidad digital:</strong> 3 campañas de Meta Ads para ampliar tu alcance y atraer más clientes.
      </>
    ]
  },
  {
    title: "Identidad",
    borderColor: "border-pink-400",
    bgColor:"bg-[#ffccf4]",
    items: [
      <p className="font-bold italic">
        Una base sólida que toda marca necesita antes de salir a mostrarse.
      </p>,
      <strong>Plan de comunicación + desarrollo de marca</strong>,
      "Análisis de la competencia",
      "Auditoría de redes",
      "Definición de objetivos",
      "Estrategia digital",
      "Manual de marca",
      "Pilares de contenido"
    ]
  },
  {
    title: "Full MACA",
    borderColor: "border-pink-400",
    bgColor:"bg-[#edffab]",
    badge: "Recomendado",
    items: [
      <p className="font-bold italic">
        Una base sólida que toda marca necesita antes de salir a mostrarse.
      </p>,
      <strong>
        Plan de comunicación + desarrollo de marca + Landing + Redes sociales
      </strong>,
      "Todo lo del plan Identidad + Desarrollo de página web para dar un salto profesional.",
      "15% off por 3 meses en el plan de redes que elijas."
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
              {/*<li><a href="https://behance.net/maca" target="_blank" rel="noopener noreferrer" className="text-[#0000FF] hover:underline transition-all">Behance</a></li>*/}
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
              {/*<li><a href="https://behance.net/maca" target="_blank" rel="noopener noreferrer" className="block py-2 text-[#0000FF] hover:underline" onClick={handleMenuClick}>Behance</a></li>*/}
            </ul>
          </div>
        )}
      </header>

      <div className="h-16"></div>

      
      {/* Hero Section - Con GIF */}
<section
  id="inicio"
  className="bg-[#0000FF] p-6 py-12 flex items-center justify-center text-center"
>
  <div className="max-w-7xl mx-auto w-full">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* Bloque grande con cambio Recurso4 ↔ Recurso6 */}
      <div className="md:col-span-2 bg-black rounded-3xl shadow-2xl flex flex-col justify-center relative overflow-hidden min-h-[300px] md:min-h-[320px]">
        {/* Mobile: Recurso6 */}
        <img
          src={Recurso6}
          alt="MACA Marketing y Comunicación con Actitud"
          className="w-full h-full object-cover rounded-3xl md:hidden"
        />
        {/* Desktop: Recurso4 */}
        <img
          src={Recurso4}
          alt="MACA Marketing y Comunicación con Actitud"
          className="w-full h-full object-cover rounded-3xl hidden md:block"
        />
      </div>

      {/* Bloque lateral con Recurso5 */}
      {/* <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[180px] flex items-center justify-center">
        <img
          src={Recurso5}
          alt="MACA Marketing y Comunicación con Actitud"
          className="w-full h-full object-cover rounded-3xl"
        />
        <div className="absolute inset-0 bg-black/30"></div>
       <h3 className="absolute top-12 w-full text-[#FF4824] font-bold text-2xl md:text-3xl text-center">
        <a href="#clientes">
          <span>Nuestros </span>
          <br />
          <span>Trabajos</span>
        </a>
      </h3>

      </div> */}

  <motion.div
      className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[180px] flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }} // pequeño zoom del bloque
    >
      <motion.img
        src={Recurso5}
        alt="MACA Marketing y Comunicación con Actitud"
        className="w-full h-full object-cover rounded-3xl"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }} // zoom extra al hover
      />
      <motion.div
        className="absolute inset-0 bg-black/30"
        whileHover={{ backgroundColor: "rgba(0,0,0,0.5)" }} // se oscurece más
        transition={{ duration: 0.3 }}
      />
      <motion.h3
        className="absolute top-12 w-full text-[#FF4824] font-bold text-2xl md:text-3xl text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }} // texto más grande
      >
        <a href="#clientes">
          <span>Nuestros </span>
          <br />
          <span>Trabajos</span>
        </a>
      </motion.h3>
    </motion.div>
    </div>

   {/*  {/* Cards de abajo */}
    {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
      <a href="#planes" className="block">
        <div
          className="bg-cover bg-center rounded-3xl p-6 shadow-2xl flex items-end relative overflow-hidden h-[160px] md:h-[180px]"
          style={{ backgroundImage: `url(${Recurso1})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
          <h3 className="font-bold text-4xl text-white z-10">Redes</h3>
        </div>
      </a>

      <a href="#planes" className="block">
        <div
          className="bg-cover bg-center rounded-3xl p-6 shadow-2xl flex items-end relative overflow-hidden h-[160px] md:h-[180px]"
          style={{ backgroundImage: `url(${Recurso2})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
          <h3 className="font-bold text-4xl text-white z-10">Diseño</h3>
        </div>
      </a>

      <a href="#planes" className="block">
        <div
          className="bg-cover bg-center rounded-3xl p-6 shadow-2xl flex items-end relative overflow-hidden h-[160px] md:h-[180px]"
          style={{ backgroundImage: `url(${Recurso3})` }}
        >
          <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
          <h3 className="font-bold text-4xl text-white z-10">Web</h3>
        </div>
      </a>
    </div> */} 

{/* Cards de abajo
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
  {[
    { img: Recurso1, title: "Redes" },
    { img: Recurso2, title: "Diseño" },
    { img: Recurso3, title: "Web" },
  ].map((card, idx) => (
    <motion.a
      key={idx}
      href="#planes"
      className="block"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="bg-cover bg-center rounded-3xl p-6 shadow-2xl flex items-end relative overflow-hidden h-[160px] md:h-[180px]"
        style={{ backgroundImage: `url(${card.img})` }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black opacity-40 rounded-3xl"></div>
        <h3 className="font-bold text-4xl text-white z-10">{card.title}</h3>
      </motion.div>
    </motion.a>
  ))}
</div> */}

{/* Cards de abajo con más dinamismo */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
  {[
    { img: Recurso1, title: "Redes", description: "Gestión completa de redes sociales", color: "from-purple-600 to-pink-600" },
    { img: Recurso2, title: "Diseño", description: "Identidad visual memorable", color: "from-blue-600 to-cyan-500" },
    { img: Recurso3, title: "Web", description: "Desarrollo web profesional", color: "from-emerald-600 to-teal-500" },
  ].map((card, idx) => (
    <motion.a
      key={idx}
      href="#planes"
      className="block group"
      whileHover={{ scale: 1.02, y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <motion.div
        className="relative rounded-3xl shadow-xl overflow-hidden h-[200px] md:h-[220px] cursor-pointer"
        initial={{ opacity: 0, y: 60, rotateX: 15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: idx * 0.15,
          type: "spring",
          stiffness: 100 
        }}
        viewport={{ once: true }}
        style={{ 
          backgroundImage: `url(${card.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay gradiente animado */}
        <motion.div 
          className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-60 mix-blend-multiply`}
          whileHover={{ opacity: 0.75 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Overlay oscuro base */}
        <div className="absolute inset-0 bg-black opacity-30" />
        
        {/* Efectos de luz */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute top-4 right-4 w-20 h-20 bg-white opacity-10 rounded-full blur-xl" />
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-white opacity-5 rounded-full blur-lg" />
        </motion.div>
        
        {/* Contenido */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end items-start">
          <motion.div
            className="transform transition-transform duration-300 group-hover:-translate-y-2"
          >
            {/* Título con animación de letras */}
            <motion.h3 
              className="font-bold text-4xl md:text-3xl lg:text-4xl text-white mb-2 drop-shadow-lg overflow-hidden"
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: idx * 0.2 + 0.3
                  }
                },
                hover: {
                  scale: 1.05,
                  transition: {
                    type: "spring",
                    stiffness: 400,
                    staggerChildren: 0.03,
                    delayChildren: 0
                  }
                }
              }}
              viewport={{ once: true }}
            >
              {card.title.split('').map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  className="inline-block"
                  variants={{
                    hidden: { 
                      opacity: 0, 
                      y: 50,
                      rotateX: 90
                    },
                    visible: { 
                      opacity: 1, 
                      y: 0,
                      rotateX: 0,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 12
                      }
                    },
                    hover: {
                      y: -8,
                      rotateY: 15,
                      color: "#fbbf24",
                      textShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10
                      }
                    }
                  }}
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h3>
            
            {/* Descripción con efecto de escritura */}
            <motion.div
              className="overflow-hidden"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { delay: idx * 0.2 + 0.8 }
                }
              }}
              viewport={{ once: true }}
            >
              <motion.p
                className="text-white/90 text-sm md:text-base font-medium opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 0 },
                  hover: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.02,
                      delayChildren: 0.1
                    }
                  }
                }}
              >
                {card.description.split('').map((char, charIdx) => (
                  <motion.span
                    key={charIdx}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 0 },
                      hover: {
                        opacity: 1,
                        y: [-2, 0],
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }
                      }
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>

            {/* Línea decorativa animada */}
            <motion.div
              className="w-0 h-0.5 bg-gradient-to-r from-white/60 to-transparent mt-3 group-hover:w-20 transition-all duration-500 ease-out"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: idx * 0.2 + 1.2, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>
          
          {/* Indicador de hover */}
          <motion.div
            className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.div>
        </div>
        
        {/* Borde brillante en hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-white/0 group-hover:border-white/30 transition-all duration-300"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
        />
      </motion.div>
    </motion.a>
  ))}
</div>

  </div>
</section>


      {/* Services Section - Carrusel en móvil, Grid en desktop con Tooltip */}
<section id="servicios" className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 px-6">
  <div className="max-w-7xl mx-auto">
    {/* Título y subtítulo */}
    <div className="text-center mb-12">
      <motion.h2
        className="text-4xl font-bold text-[#3700ff] mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        ¿Qué podemos hacer por tu marca?
      </motion.h2>

      <motion.p
        className="font-poppins font-normal text-lg md:text-xl text-[#2b0057] text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.12 }}
      >
        Servicios para que tu proyecto crezca con{" "}
        <span className="font-semibold italic">Identidad</span>,{" "}
        <span className="font-semibold italic">Claridad</span> y{" "}
        <span className="font-semibold italic">Actitud</span>.
      </motion.p>
    </div>

    {isMobile ? (
      // Carrusel para móviles
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        centeredSlides={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="pb-10"
      >
        {servicesData.map((service, idx) => (
          <SwiperSlide key={idx} className="h-full">
            <motion.div
              className={`${service.color} rounded-3xl shadow-lg p-6 h-full flex flex-col justify-between border-2 border-pink-300 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-5xl transition-transform duration-300 hover:scale-110">{service.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-xl text-[#3700ff] mb-2 leading-tight transition-colors duration-300 hover:text-purple-600">{service.title}</h3>
                </div>
              </div>
              <p className="text-sm text-gray-700 opacity-90 transition-opacity duration-300 hover:opacity-100">{service.description}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    ) : (
      // Grid para desktop con hover mejorado
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ visible: { transition: { staggerChildren: 0.18 } } }}
      >
        {servicesData.map((service, idx) => (
          <motion.div
            key={idx}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
            }}
          >
            <div className="group cursor-pointer relative h-full">
              <motion.div
                className={`${service.color} rounded-3xl shadow-lg p-6 h-full flex flex-col justify-center items-center text-center border-2 border-pink-300 overflow-hidden relative`}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  rotateY: 3,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }}
              >
                {/* Efecto de brillo que aparece en hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  initial={{ translateX: "-100%" }}
                  whileHover={{ 
                    translateX: "100%",
                    transition: { 
                      duration: 0.6, 
                      ease: "easeInOut" 
                    }
                  }}
                />

                <div className="flex flex-col items-center gap-4 mb-4 relative z-10">
                  <motion.div 
                    className="text-5xl"
                    // Movimiento constante del ícono
                    animate={{
                      rotate: [0, 8, 0, -8, 0],
                      scale: [1, 1.1, 1],
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 4 + idx * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ 
                      scale: 1.3,
                      rotate: 15,
                      y: -8
                    }}
                    // Transición suave entre estados
                    style={{
                      transition: "all 0.3s ease"
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="font-bold text-xl md:text-2xl text-[#3700ff] mb-0 leading-tight"
                    whileHover={{
                      color: "#7c3aed",
                      y: -3,
                      textShadow: "0 0 20px rgba(124, 58, 237, 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                </div>
                
                {/* Tooltip con el texto de descripción */}
                <div
                  className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl
                             flex items-center justify-center p-6 text-center
                             opacity-0 group-hover:opacity-100 transition-all duration-500
                             pointer-events-none group-hover:pointer-events-auto z-10
                             border-2 border-pink-300 transform group-hover:scale-105"
                >
                  <p className="text-gray-700 text-base leading-relaxed">{service.description}</p>
                </div>

                {/* Border glow en hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-transparent"
                  whileHover={{
                    borderColor: "rgba(124, 58, 237, 0.5)",
                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Partículas que aparecen en hover */}
                <motion.div
                  className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0"
                  whileHover={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                    y: [-10, -20, -30]
                  }}
                  transition={{ 
                    duration: 1,
                    ease: "easeOut"
                  }}
                />
                
                <motion.div
                  className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-0"
                  whileHover={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    x: [-5, -15, -25],
                    y: [5, -5, -15]
                  }}
                  transition={{ 
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.1
                  }}
                />

                <motion.div
                  className="absolute top-1/2 left-4 w-1 h-1 bg-blue-400 rounded-full opacity-0"
                  whileHover={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    x: [-8, -16, -24],
                    y: [0, 8, 16]
                  }}
                  transition={{ 
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.2
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    )}
  </div>
</section>


      {/* Plans Section - Carrusel en móvil, Grid en desktop */}
      <section id="planes" className="py-20 bg-[#f3eaff] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3700ff] mb-4">Nuestros planes a medida</h2>
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
{/* Team Section - Dynamic text, subtle effects */}
<section id="equipo" className="py-20 bg-white px-6">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-12">
     {/*  <h2 className="text-4xl font-extrabold text-[#3700ff] mb-4">Nuestro Equipo Apasionado</h2>
      <p className="text-lg text-gray-600">Conocé a las mentes creativas detrás de MACA que harán realidad tus ideas.</p>*/}
    </div>
    
   <motion.div 
  className="max-w-6xl mx-auto text-center bg-gray-50 p-8 rounded-3xl shadow-xl border border-pink-400 relative overflow-hidden"
  initial={{ opacity: 0, y: 50, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ 
    duration: 0.8, 
    type: "spring", 
    stiffness: 100 
  }}
>
  {/* Efectos de fondo decorativos (loop infinito, OK) */}
  <motion.div
    className="absolute top-0 left-0 w-full h-full pointer-events-none"
  >
    <motion.div
      className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-30 blur-xl"
      animate={{
        x: [0, 10, 0, -10, 0],
        y: [0, -5, 0, 5, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    
    <motion.div
      className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-lg"
      animate={{
        x: [0, -8, 0, 8, 0],
        y: [0, 8, 0, -8, 0],
        scale: [1, 0.8, 1],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  </motion.div>

  {/* Imagen del equipo: aparición solo una vez */}
  <motion.div
    className="relative mb-6 overflow-hidden rounded-md"
    initial={{ opacity: 0, scale: 1.1 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, delay: 0.2 }}
    whileHover={{ scale: 1.02 }}
  >
    <img 
      src={teamPhoto} 
      alt="Equipo MACA" 
      className="w-full rounded-md shadow-md object-cover" 
      style={{ maxHeight: '500px', boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
  </motion.div>

  {/* Título animado letra por letra: aparición una sola vez */}
  <motion.h3 
  className="text-3xl font-bold text-[#3700ff] mb-4 overflow-hidden text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 }
    }
  }}
  style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
>
  {"MACA somos Lau, Cami y Vale".split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="inline-flex mr-1">
      {word.split('').map((char, charIndex) => (
        <motion.span
          key={charIndex}
          className="inline-block"
          variants={{
            hidden: { opacity: 0, y: 30, rotateX: 90 },
            visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 200, damping: 12 } }
          }}
        >
          {char}
        </motion.span>
      ))}
      &nbsp; {/* espacio entre palabras */}
    </span>
  ))}
</motion.h3>


  {/* Párrafo: aparición solo una vez */}
  <motion.div
    className="text-gray-700 text-lg leading-relaxed"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ delay: 0.8, duration: 0.8 }}
  >
    <motion.div
      className="relative mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <strong className="text-gray-800">
        Tres miradas distintas unidas por una misma idea: que la comunicación puede transformar marcas y abrir caminos.
      </strong>
      <motion.div
        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "100%", opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 1 }}
      />
    </motion.div>

    <motion.div
      className="text-gray-700"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.4, duration: 0.6 }}
    >
      Creemos en la fuerza de las ideas bien contadas. Por eso trabajamos juntas: para que tu marca tenga voz, identidad y futuro.
    </motion.div>
  </motion.div>

  {/* Indicadores decorativos infinitos OK */}
  <motion.div
    className="absolute top-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-30"
    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  />
  <motion.div
    className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-pink-400 rounded-full opacity-25"
    animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.4, 0.25] }}
    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
  />
</motion.div>

  </div>
</section>



      {/* Clientes VIP Grid - Carrusel en móvil, Grid en desktop */}
      <section className="py-20 bg-gradient-to-r from-purple-100 to-pink-100 px-6" id="clientes">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#3700ff] mb-4">Nuestros clientes</h2>
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
                    <h3 className="text-xl font-bold text-[#3700ff] mb-2 text-center">
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

                  <h3 className="text-xl font-bold text-[#3700ff] mb-2 text-center">
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
                href="mailto:maca.equipo@gmail.com"
                className="inline-block bg-white text-[#3700ff] px-10 py-5 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                PEDÍ TU PRESUPUESTO
              </a>

            <a
              href="https://wa.me/5492634357935" // Reemplaza con tu número de WhatsApp real, incluyendo el código de país. Ejemplo: +54 9 261 XXXXXXX
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

function PlanCard({ title, items, borderColor, bgColor, badge = null, customBorderClass = "" }) {
  return (
    <div
      className={`${bgColor} p-6 rounded-3xl shadow-lg border ${borderColor} relative hover:transform hover:scale-105 transition-all duration-300 flex flex-col justify-between ${customBorderClass}`}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
          {badge}
        </div>
      )}

      <h3 className="text-2xl font-bold text-[#3700ff] mb-4 italic text-center">
        {title}
      </h3>

      <ul className="text-sm text-gray-700 space-y-3 flex-grow">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 mr-2 flex-shrink-0">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 text-center">
        <button
          onClick={() => window.open("https://wa.me/5492634357935", "_blank")}
          className="bg-[#0000ff] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-purple-700 transition-colors shadow-md"
        >
          + Info
        </button>
      </div>
    </div>
  );
}
