import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bienvenue sur Nukleo Hub 3
        </h1>
        <p className="text-center text-lg mb-12 text-gray-600 dark:text-gray-400">
          Monorepo Turborepo avec Next.js 16
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card
            title="Next.js 16"
            description="Framework React avec App Router"
          />
          <Card
            title="Turborepo"
            description="Monorepo haute performance"
          />
          <Card
            title="Tailwind CSS"
            description="Styling utilitaire moderne"
          />
        </div>

        <div className="flex justify-center gap-4">
          <Button variant="primary">Commencer</Button>
          <Button variant="secondary">Documentation</Button>
        </div>
      </div>
    </main>
  );
}

