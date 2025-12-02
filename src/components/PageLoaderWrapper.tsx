"use client";
import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function PageLoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // show loader for 1.2s

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return <>{children}</>;
}
