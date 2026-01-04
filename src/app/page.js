"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 1. Organizza le tue foto per tema.
// Puoi aggiungere quante foto vuoi, basta assegnare la categoria corretta.
const photos = [
  { id: 1, src: '/images/foto1.jpg', alt: 'Ritratto 1', category: 'ritratti' },
  { id: 2, src: '/images/foto2.jpg', alt: 'Street 1', category: 'ritratti' },
  { id: 3, src: '/images/foto3.jpg', alt: 'Paesaggio 1', category: 'natura' },
  { id: 4, src: '/images/foto4.jpg', alt: 'Ritratto 2', category: 'strada' },
  { id: 5, src: '/images/foto5.jpg', alt: 'Street 2', category: 'strada' },
  { id: 6, src: '/images/foto6.jpg', alt: 'Paesaggio 2', category: 'strada' },
  { id: 7, src: '/images/foto7.jpg', alt: 'Paesaggio 3', category: 'strada' },
  { id: 8, src: '/images/foto8.jpg', alt: 'Paesaggio 2', category: 'strada' },
  { id: 9, src: '/images/conegliano1.jpg', alt: 'Conegliano 1', category: 'strada' },
  { id: 10, src: '/images/adorisio1.jpg', alt: 'Adorisio', category: 'strada' },
  { id: 11, src: '/images/bicicletta1.jpg', alt: 'Bicicletta 1', category: 'strada' },
  { id: 12, src: '/images/chitarra1.jpg', alt: 'Chitarra 1', category: 'dettagli' },
  { id: 13, src: '/images/gatto1.jpg', alt: 'Gatto 1', category: 'ritratti' },
  { id: 14, src: '/images/donnarossa.jpg', alt: 'donnarossa', category: 'strada' },
  { id: 15, src: '/images/ricky1.jpg', alt: 'Ricky 1', category: 'strada' },
];

// 2. Definiamo le categorie per la navigazione
const categories = [
  { id: 'all', label: 'Tutto' },
  { id: 'ritratti', label: 'Ritratti' },
  { id: 'strada', label: 'Strada' },
  { id: 'natura', label: 'Natura' },
  { id: 'dettagli', label: 'Dettagli' },

];

export default function Home() {
  const [index, setIndex] = useState(-1);
  const [filter, setFilter] = useState('all');

  const filteredPhotos = filter === 'all' 
    ? photos 
    : photos.filter(p => p.category === filter);

  return (
    <main className="min-h-screen p-8 md:p-16 lg:p-24 bg-white text-[#333]">
      {/* Header Minimalista */}
      <header className="mb-16 text-center">
        <h1 className="text-3xl font-extralight tracking-[0.3em] uppercase">
          Zanco Simone
        </h1>
        <p className="mt-4 text-gray-400 font-light tracking-[0.2em] text-[10px] uppercase">
          Visual Storyteller
        </p>
      </header>

      {/* Navigazione Filtri */}
      <nav className="flex flex-wrap justify-center gap-6 md:gap-12 mb-20">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`text-[10px] tracking-[0.25em] uppercase transition-all duration-500 relative pb-2 ${
              filter === cat.id ? "text-black" : "text-gray-300 hover:text-gray-500"
            }`}
          >
            {cat.label}
            {/* Sottolineatura animata per la categoria attiva */}
            {filter === cat.id && (
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black animate-in fade-in zoom-in duration-500"></span>
            )}
          </button>
        ))}
      </nav>

      {/* Griglia Masonry */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
        {filteredPhotos.map((photo, i) => (
          <div 
            key={photo.id} 
            className="break-inside-avoid cursor-zoom-in group relative"
            onClick={() => setIndex(i)}
          >
            <div className="overflow-hidden bg-gray-50">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={800}
                height={1200}
                className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-[1.02] group-hover:opacity-90"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={filteredPhotos.map(p => ({ src: p.src }))}
      />

      {/* Footer */}
      <footer className="mt-40 mb-10 text-center border-t border-gray-50 pt-20">
        <p className="text-[9px] tracking-[0.4em] text-gray-300 uppercase">
          Copyright © 2026 — Basato in Italia
        </p>
      </footer>
    </main>
  );
}