'use client';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-9999 bg-black flex flex-col items-center justify-center gap-6 text-white">
      <div className="loader"></div>
    </div>
  );
}
