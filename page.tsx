'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [participantes, setParticipantes] = useState(1247);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    // Simular incremento de participantes
    const interval = setInterval(() => {
      setParticipantes(prev => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700" />
      
      {/* Mapa de Guerrero desvanecido en el fondo */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/assets/guerrero-map.png"
          alt="Mapa de Guerrero"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Partículas decorativas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-5xl w-full text-center">
          {/* Logo/Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="inline-block mb-8"
          >
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border-2 border-white/30">
              <span className="text-white text-sm font-semibold uppercase tracking-wider">
                Guerrero 2025 🗺️
              </span>
            </div>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight"
          >
            ¿Dónde Estás en el
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Mapa Político
            </span>
            <br />
            de Guerrero?
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Descubre tu perfil político único en solo <span className="font-bold text-yellow-300">2 minutos</span>
            <br />
            <span className="text-lg text-white/70">
              Una experiencia interactiva tipo "Spotify Wrapped" para política
            </span>
          </motion.p>

          {/* Contador de participantes */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
            transition={{ delay: 0.6 }}
            className="mb-10"
          >
            <div className="inline-block bg-white/20 backdrop-blur-lg rounded-2xl px-8 py-4 border border-white/30">
              <div className="flex items-center gap-3">
                <span className="text-4xl">🔥</span>
                <div className="text-left">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                    {participantes.toLocaleString()}
                  </div>
                  <div className="text-sm text-white/80">
                    guerrerenses ya lo descubrieron
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <Link href="/encuesta">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 text-gray-900 px-12 py-5 rounded-full text-2xl font-black hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 inline-flex items-center gap-3"
              >
                <span>Descubre Tu Perfil</span>
                <span className="text-3xl">→</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-white font-bold text-lg mb-2">
                Rápido y Divertido
              </h3>
              <p className="text-white/70 text-sm">
                Solo 10 preguntas interactivas. No es aburrido, lo prometo.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-white font-bold text-lg mb-2">
                Resultado Visual
              </h3>
              <p className="text-white/70 text-sm">
                Imagen personalizada lista para compartir en redes sociales.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🔐</div>
              <h3 className="text-white font-bold text-lg mb-2">
                100% Anónimo
              </h3>
              <p className="text-white/70 text-sm">
                Tus respuestas son privadas. Sin registro, sin spam.
              </p>
            </div>
          </motion.div>

          {/* Nota informativa */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 1.2 }}
            className="mt-12 text-white/60 text-sm max-w-2xl mx-auto"
          >
            <p>
              Este es un proyecto ciudadano independiente, sin afiliación partidista.
              Los resultados son orientativos y no representan posiciones electorales.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-0 w-full py-6 text-center text-white/50 text-sm"
      >
        <p>#MiPerfilPolíticoGuerrero</p>
      </motion.footer>
    </main>
  );
}
