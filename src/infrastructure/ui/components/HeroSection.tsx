"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función estandarizada y segura para emojis en WhatsApp
  const handleGenericWhatsApp = () => {
    const whatsappNumber = "584269070412";
    const message = "Hola Enfoque Inmobiliario 🏢. Me gustaría agendar una cita para recibir asesoría personalizada sobre las propiedades disponibles.";
    
    // Usamos api.whatsapp.com en lugar de wa.me para proteger los emojis
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative w-full h-screen bg-gray-950 overflow-hidden font-sans">
      
      {/* IMÁGENES DE FONDO */}
      <div className="absolute inset-0 md:hidden z-0">
        <Image src="/inicio2.jpg" alt="Fondo Móvil" fill priority className="object-cover object-center" />
      </div>
      <div className="absolute inset-0 hidden md:block z-0">
        <Image src="/inicio.jpg" alt="Fondo" fill priority className="object-cover object-center md:object-right" />
      </div>
      
      {/* ACLARADO */}
      <div className="absolute inset-0 bg-white/5 z-10" />

      {/* HEADER / NAV (Desktop) */}
      <header className="absolute top-6 left-0 w-full z-20 px-6 md:px-12 flex justify-between items-start md:items-center">
        
        {/* Logo */}
        <div className="relative w-28 h-28 md:w-52 md:h-52 transform md:-translate-y-4 z-30">
          <Image src="/lg.png" alt="Logo" fill priority className="object-contain object-center" />
        </div>

        {/* NAVEGACIÓN CENTRAL */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-1.5 p-2 bg-white/80 backdrop-blur-xl border border-gray-100 rounded-full text-purple-950 text-xl font-bold tracking-tight z-20 shadow-2xl">
          <Link href="/" className="px-7 py-3 rounded-full hover:bg-purple-100 hover:text-purple-700 hover:scale-105 transition-all duration-300">Inicio</Link>
          <Link href="/propiedades" className="px-7 py-3 rounded-full hover:bg-purple-100 hover:text-purple-700 hover:scale-105 transition-all duration-300">Propiedades</Link>
          <Link href="/propiedades" className="px-7 py-3 rounded-full hover:bg-purple-100 hover:text-purple-700 hover:scale-105 transition-all duration-300">Proyectos</Link>
          <Link href="#" className="px-7 py-3 rounded-full hover:bg-purple-100 hover:text-purple-700 hover:scale-105 transition-all duration-300">Nosotros</Link>
          
          <div className="w-px h-10 bg-purple-100 mx-2"></div>

          {/* WhatsApp Desktop */}
          <button onClick={handleGenericWhatsApp} className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-7 py-3 rounded-full text-sm shadow-lg hover:scale-105 transition transform ml-1">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            Agendar Cita
          </button>
        </nav>

        {/* MENÚ HAMBURGUESA (Mobile) */}
        <button onClick={() => setIsMenuOpen(true)} className="md:hidden text-yellow-400 p-2.5 bg-white/10 rounded-xl backdrop-blur-sm z-30 ml-auto">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </header>

      {/* MENÚ LATERAL (Mobile) */}
      <div className={`fixed inset-y-0 left-0 w-72 bg-white/95 backdrop-blur-3xl border-r z-50 transform transition-transform duration-300 flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="p-6 flex justify-between items-center border-b bg-white">
          <div className="relative w-28 h-28"><Image src="/lg.png" alt="Logo" fill className="object-contain" /></div>
          <button onClick={() => setIsMenuOpen(false)} className="text-purple-900 p-2"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        <nav className="flex flex-col gap-2 p-4 text-lg font-bold">
          <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:bg-purple-50 p-4 rounded-xl flex gap-3 text-purple-950"><span className="text-purple-600">→</span> Inicio</Link>
          <Link href="/propiedades" onClick={() => setIsMenuOpen(false)} className="hover:bg-purple-50 p-4 rounded-xl flex gap-3 text-purple-950"><span className="text-purple-600">→</span> Comprar</Link>
          <Link href="/propiedades" onClick={() => setIsMenuOpen(false)} className="hover:bg-purple-50 p-4 rounded-xl flex gap-3 text-purple-950"><span className="text-purple-600">→</span> Alquilar</Link>
        </nav>
      </div>

      {isMenuOpen && <div className="fixed inset-0 bg-purple-950/40 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />}

      {/* WHATSAPP FLOTANTE (Mobile) */}
      <button onClick={handleGenericWhatsApp} className="md:hidden fixed bottom-28 right-6 z-40 bg-[#25D366] text-white p-4.5 rounded-full shadow-2xl border-2 border-green-400 hover:scale-110 transition">
        <svg className="w-9 h-9 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
      </button>

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 max-w-7xl h-full mx-auto px-6 md:px-12 flex flex-col justify-center pb-24 md:pb-0">
        <div className="max-w-2xl space-y-6 mt-24 md:mt-32 bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/50 shadow-2xl z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] text-purple-600">
            Encuentra tu <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-400 font-black drop-shadow-sm">Hogar Perfecto</span> <br />
            en Segundos
          </h1>
          <p className="text-purple-950 text-base md:text-xl font-semibold leading-relaxed tracking-tight">
            Compara las propiedades más exclusivas en tu zona. Recibe asesoría de élite y toma una decisión informada.
          </p>
          <div className="flex pt-2 relative z-30">
            <Link href="/propiedades" className="bg-purple-700 hover:bg-purple-600 text-white font-bold px-8 py-4 rounded-xl flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition w-full sm:w-auto">
              Ver Catálogo Exclusivo <span className="text-yellow-400 text-xl">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* NAVEGACIÓN BOTTOM (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-2xl border-t z-40 pb-safe">
        <div className="flex justify-around items-center h-20 text-purple-900">
          <Link href="/" className="flex flex-col items-center justify-center w-full h-full hover:bg-purple-50 transition">
            <svg className="w-6 h-6 mb-1.5 text-purple-700" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            <span className="text-[11px] font-bold tracking-wider">INICIO</span>
          </Link>
          <Link href="/propiedades" className="flex flex-col items-center justify-center w-full h-full hover:bg-purple-50 transition text-purple-400">
            <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="text-[11px] font-bold tracking-wider">BUSCAR</span>
          </Link>
          <Link href="/propiedades" className="flex flex-col items-center justify-center w-full h-full hover:bg-purple-50 transition text-purple-400">
            <svg className="w-6 h-6 mb-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            <span className="text-[11px] font-bold tracking-wider">FAVORITOS</span>
          </Link>
        </div>
      </nav>
    </section>
  );
};