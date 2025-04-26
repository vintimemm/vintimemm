'use client';
import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-900 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold mb-2">VintimeMM</h1>
          <p className="text-lg text-neutral-400">
            Váš obchod s vintage hodinkami – stará elegancia, nadčasový štýl.
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Naše hodinky</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-800 p-4 rounded-xl shadow">
              <div className="aspect-square bg-neutral-700 rounded mb-2"></div>
              <h3 className="font-medium">Omega 30T2</h3>
              <p className="text-sm text-neutral-400">Manuálny ťah, 1940s</p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-xl shadow">
              <div className="aspect-square bg-neutral-700 rounded mb-2"></div>
              <h3 className="font-medium">Technos Sky Diver</h3>
              <p className="text-sm text-neutral-400">Automat, diver style</p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-xl shadow">
              <div className="aspect-square bg-neutral-700 rounded mb-2"></div>
              <h3 className="font-medium">IWC cal. 67</h3>
              <p className="text-sm text-neutral-400">Vreckové hodinky, klasika</p>
            </div>
          </div>
        </section>

        <footer className="border-t border-neutral-700 pt-6">
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p className="text-neutral-400 text-sm">
            Máte záujem o niektorý model? Kontaktujte nás na <a href="mailto:vintimemm@example.com" className="underline">vintimemm@example.com</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
