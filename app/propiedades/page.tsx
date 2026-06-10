"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Property } from '../../src/domain/models/Property';

// === DATOS DE PRUEBA (MOCK DATA) ===
const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Penthouse Exclusivo con Terraza',
    description: 'Impresionante penthouse con acabados de lujo, vista panorámica de 360 grados, ascensor privado y domótica integrada en todos los ambientes.',
    price: 450000,
    location: 'Altamira, Caracas',
    bedrooms: 4,
    bathrooms: 5,
    area: 320,
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    features: ['Piscina Privada', 'Ascensor Directo', 'Planta Eléctrica']
  },
  {
    id: '2',
    title: 'Quinta de Lujo Clásica',
    description: 'Majestuosa propiedad rodeada de áreas verdes. Cuenta con pisos de mármol, techos de doble altura, biblioteca y una cocina de chef completamente equipada.',
    price: 850000,
    location: 'Valle Arriba, Caracas',
    bedrooms: 5,
    bathrooms: 6,
    area: 650,
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    features: ['Jardín Amplio', 'Cine en Casa', 'Seguridad 24/7']
  },
  {
    id: '3',
    title: 'Apartamento Concepto Abierto',
    description: 'Moderno apartamento a estrenar en torre exclusiva. Diseño minimalista, ventanales de piso a techo y amenidades tipo resort en el edificio.',
    price: 320000,
    location: 'Las Mercedes, Caracas',
    bedrooms: 3,
    bathrooms: 3,
    area: 180,
    imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
    features: ['Gimnasio', 'Área Coworking', 'Pisos de Madera']
  }
];

export default function PropiedadesPage() {
  // Estados para controlar el modal y el formulario
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });

  // Funciones para abrir/cerrar el modal
  const openModal = (property: Property) => setSelectedProperty(property);
  const closeModal = () => setSelectedProperty(null);

  // Función estandarizada y segura para emojis en WhatsApp
  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProperty) return;

    const whatsappNumber = "584269070412"; 
    
    const message = `Hola Enfoque Inmobiliario 🏢.\n\nSoy *${formData.name}*.\nMi número es: ${formData.phone}.\n\nMe interesa agendar una cita para la propiedad:\n🏠 *${selectedProperty.title}* (${selectedProperty.location}).\n💵 Precio: $${selectedProperty.price.toLocaleString()}.\n\nMe gustaría visitarla el día: ${formData.date}.\n\n¡Quedo atento(a)!`;

    // Usamos api.whatsapp.com en lugar de wa.me para proteger los emojis
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    
    closeModal(); 
  };

  return (
    <main className="min-h-screen bg-gray-50 font-sans pb-20">
      
      {/* HEADER: Adaptado para Mobile First (columna en móviles, fila en escritorio) */}
      <header className="bg-purple-950 text-white py-10 px-6 md:px-12 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-0">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight text-yellow-400">Propiedades Exclusivas</h1>
            <p className="text-purple-200 mt-2 text-base md:text-lg">Encuentra el hogar de tus sueños en nuestro catálogo premium.</p>
          </div>
          
          {/* Navegación ultra rápida con el componente Link de Next.js */}
          <Link href="/" className="px-6 py-2.5 border-2 border-purple-400 rounded-full hover:bg-purple-800 transition font-medium w-full md:w-auto">
            ← Volver al Inicio
          </Link>
        </div>
      </header>

      {/* GRID DE PROPIEDADES: Mobile First (1 columna en móvil, 2 en tablet, 3 en PC) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-10 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {mockProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(100,0,200,0.1)] transition-all duration-300 transform hover:-translate-y-2 group flex flex-col">
              
              {/* Imagen de la propiedad */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden">
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-purple-950 text-yellow-400 font-black px-4 py-1.5 rounded-full shadow-lg text-sm md:text-base">
                  ${property.price.toLocaleString()}
                </div>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-purple-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-2">{property.location}</p>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 leading-tight">{property.title}</h3>
                
                {/* Iconos de características */}
                <div className="flex justify-between md:justify-start md:gap-4 mb-6 text-gray-600 text-sm font-semibold border-b border-gray-100 pb-6">
                  <span className="flex items-center gap-1.5">🛏️ {property.bedrooms} <span className="hidden md:inline">Hab</span></span>
                  <span className="flex items-center gap-1.5">🚿 {property.bathrooms} <span className="hidden md:inline">Bañ</span></span>
                  <span className="flex items-center gap-1.5">📏 {property.area} <span className="hidden md:inline">m²</span></span>
                </div>

                {/* Botón de Acción Principal (Empujado hacia abajo con mt-auto) */}
                <button 
                  onClick={() => openModal(property)}
                  className="mt-auto w-full bg-purple-100 text-purple-700 hover:bg-purple-600 hover:text-white font-bold py-3.5 md:py-4 rounded-xl transition duration-300 flex items-center justify-center gap-2"
                >
                  Agendar Cita <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* MODAL / POPUP PARA AGENDAR CITA (Optimizado para Móvil) */}
      {/* ========================================= */}
      {selectedProperty && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 bg-purple-950/70 backdrop-blur-md">
          
          {/* Contenedor del Modal (En móvil sale desde abajo, en PC está centrado) */}
          <div className="bg-white w-full md:max-w-md rounded-t-3xl md:rounded-3xl overflow-hidden shadow-2xl animate-in slide-in-from-bottom-10 md:zoom-in duration-300">
            
            {/* Cabecera del Modal */}
            <div className="bg-purple-950 p-6 text-white relative">
              <button 
                onClick={closeModal} 
                className="absolute top-5 right-5 text-purple-300 hover:text-white bg-purple-800/50 rounded-full p-1.5 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
              <h2 className="text-2xl font-black text-yellow-400">Agendar Visita</h2>
              <p className="text-sm text-purple-200 mt-1 pr-8 truncate">{selectedProperty.title}</p>
            </div>

            {/* Formulario */}
            <form onSubmit={handleWhatsAppSubmit} className="p-6 space-y-4 md:space-y-5 max-h-[70vh] overflow-y-auto">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Nombre Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3.5 md:py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition text-gray-800"
                  placeholder="Ej: Carlos Pérez"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Teléfono (WhatsApp)</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3.5 md:py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition text-gray-800"
                  placeholder="Ej: 0412 123 4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Día de preferencia</label>
                <input 
                  type="date" 
                  required
                  className="w-full px-4 py-3.5 md:py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition text-gray-800"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              {/* Botones del Modal */}
              <div className="pt-4 flex flex-col-reverse md:flex-row gap-3">
                <button 
                  type="button" 
                  onClick={closeModal}
                  className="w-full md:w-1/3 bg-gray-100 text-gray-600 font-bold py-4 md:py-3.5 rounded-xl hover:bg-gray-200 transition"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="w-full md:w-2/3 bg-[#25D366] text-white font-bold py-4 md:py-3.5 rounded-xl hover:bg-[#20b858] transition shadow-lg shadow-green-500/30 flex justify-center items-center gap-2"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Enviar a WhatsApp
                </button>
              </div>
            </form>

          </div>
        </div>
      )}
    </main>
  );
}