// src/app/loading.js
export default function GlobalLoading() {
      return (
            <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
                  <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-xl font-semibold text-gray-700">Ładowanie danych...</p>
                  </div>
            </div>
      );
}
