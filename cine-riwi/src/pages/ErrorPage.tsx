// src/pages/ErrorPage.tsx
import { Link } from 'react-router-dom';

interface ErrorPageProps {
  message?: string;
  onRetry?: () => void;
}

const ErrorPage = ({ message, onRetry }: ErrorPageProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-[#0f1319]">
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: 'var(--color-tertiary)' }}
      >
        <span className="text-2xl" style={{ color: 'var(--color-primary)' }}>⚠️</span>
      </div>
      <h1 
        className="text-3xl font-bold mb-2 text-white"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        ¡Ocurrió un error inesperado!
      </h1>
      <p 
        className="max-w-md mb-6 text-[#5F626A]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {message || 'Tuvimos un problema al procesar tu solicitud. Por favor intenta nuevamente.'}
      </p>
      <div className="flex gap-4">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-3 rounded-lg font-medium transition-colors"
            style={{
              backgroundColor: 'var(--color-secondary)',
              color: '#ffffff',
              fontFamily: 'var(--font-label)',
            }}
          >
            Reintentar
          </button>
        )}
        <Link
          to="/"
          className="px-6 py-3 rounded-lg font-medium border border-[#375082] transition-colors"
          style={{
            color: 'var(--color-primary)',
            fontFamily: 'var(--font-label)',
          }}
        >
          Ir al Inicio
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;