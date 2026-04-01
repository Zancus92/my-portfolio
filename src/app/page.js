"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
    { id: 1, src: '/images/foto1.webp', alt: 'Una vecchia storia', category: 'ritratti' },
    { id: 2, src: '/images/foto2.webp', alt: 'Odore di mare', category: 'ritratti' },
    { id: 3, src: '/images/foto3.webp', alt: 'Nei monti', category: 'natura' },
    { id: 4, src: '/images/foto4.webp', alt: 'Stoccolma', category: 'strada' },
    { id: 5, src: '/images/foto5.webp', alt: 'Old classics', category: 'strada' },
    { id: 6, src: '/images/foto6.webp', alt: 'Street Art', category: 'strada' },
    { id: 12, src: '/images/chitarra1.webp', alt: 'Vibrazioni', category: 'dettagli' },
    { id: 7, src: '/images/foto7.webp', alt: 'Paesaggio 3', category: 'strada' },
    { id: 8, src: '/images/foto8.webp', alt: 'Paesaggio 2', category: 'strada' },
    { id: 9, src: '/images/conegliano1.webp', alt: 'Conegliano 1', category: 'strada' },
    { id: 10, src: '/images/adorisio1.webp', alt: 'Adorisio', category: 'strada' },
    { id: 11, src: '/images/bicicletta1.webp', alt: 'Bicicletta 1', category: 'strada' },
    { id: 13, src: '/images/gatto1.webp', alt: 'Gatto 1', category: 'ritratti' },
    { id: 14, src: '/images/donnarossa.webp', alt: 'donnarossa', category: 'strada' },
    { id: 15, src: '/images/ricky1.webp', alt: 'Ricky 1', category: 'strada' },
    // ... aggiungi le altre qui
];

const categories = [
    { id: 'all', label: 'Archivio' },
    { id: 'ritratti', label: 'Persone' },
    { id: 'strada', label: 'Street photography' },
    { id: 'natura', label: 'Natura' },
    { id: 'dettagli', label: 'Frammenti' },
];

export default function Home() {
    const [index, setIndex] = useState(-1);
    const [filter, setFilter] = useState('all');

    const filteredPhotos = filter === 'all'
        ? photos
        : photos.filter(p => p.category === filter);

    return (
        <main className="min-h-screen px-6 py-12 md:px-12 lg:px-20">
            {/* Header Evoluto */}
            <header className="mb-24 flex flex-col items-center justify-center space-y-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-thin tracking-[0.4em] uppercase">
                        Zanco Simone
                    </h1>
                    <div className="h-px w-12 bg-white/20 mx-auto mt-6 mb-4"></div>
                    <p className="text-[10px] text-gray-500 font-light tracking-[0.5em] uppercase">
                        Photography & Visual Narratives
                    </p>
                </motion.div>
            </header>

            {/* Navigazione Minimalista e Dinamica */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-16 border-b border-white/5 pb-8">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className={`text-[10px] tracking-[0.2em] uppercase transition-colors relative group ${
                            filter === cat.id ? "text-white" : "text-gray-500 hover:text-white"
                        }`}
                    >
                        {cat.label}
                        {filter === cat.id && (
                            <motion.div
                                layoutId="underline"
                                className="absolute -bottom-[33px] left-0 right-0 h-[2px] bg-white z-10"
                            />
                        )}
                    </button>
                ))}
            </nav>

            {/* Griglia Masonry con Animazione Layout */}
            <motion.div
                layout
                className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
            >
                <AnimatePresence mode="popLayout">
                    {filteredPhotos.map((photo, i) => (
                        <motion.div
                            layout
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className="break-inside-avoid group relative cursor-none"
                            onClick={() => setIndex(i)}
                        >
                            <div className="relative overflow-hidden bg-zinc-900 aspect-auto transition-all duration-700 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]">
                                <Image
                                    src={photo.src}
                                    alt={photo.alt}
                                    width={800}
                                    height={1200}
                                    priority={i < 6}
                                    className="w-full h-auto object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />

                                {/* Overlay Informativo al passaggio */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                                    <p className="text-[10px] tracking-widest uppercase mb-1">{photo.category}</p>
                                    <p className="text-xs font-light italic text-gray-300">{photo.alt}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            <Lightbox
                index={index}
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={filteredPhotos.map(p => ({ src: p.src }))}
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .95)" } }}
            />

            <footer className="mt-32 mb-12 flex flex-col items-center">
                <div className="h-px w-full bg-white/5 mb-12"></div>
                <p className="text-[8px] tracking-[0.5em] text-gray-600 uppercase">
                    © 2026 Zanco Simone — Estetica del Silenzio
                </p>
            </footer>
        </main>
    );
}