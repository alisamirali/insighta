import { AppCard } from "./_common/app-card";
import { Header } from "./_common/header";
import { Hero } from "./_common/hero";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        <Hero />
        <AppCard />
      </div>
    </div>
  );
}
