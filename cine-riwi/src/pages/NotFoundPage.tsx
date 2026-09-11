// src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#0f1319]">
      <h1 
        className="text-8xl font-bold mb-2"
        style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}
      >
        404
      </h1>
      <h2 
        className="text-2xl font-semibold mb-4 text-gray-200"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Película no encontrada
      </h2>
      <p 
        className="max-w-md mb-8 text-[#5F626A]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        La página o proyección que estás buscando no existe o ha sido movida a otra sala.
      </p>
      <Link
        to="/"
        className="px-6 py-3 rounded-lg font-medium transition-colors duration-200"
        style={{
          backgroundColor: 'var(--color-primary)',
          color: '#ffffff',
          fontFamily: 'var(--font-label)',
        }}
      >
        Volver a la cartelera
      </Link>
    </div>
  );
};

export default NotFoundPage;