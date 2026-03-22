import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="w-full bg-muted py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Easy to use and privacy-friendly{" "}
          <span className="text-primary">Google Analytics alternative</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto">
          Insighta is powerful, intuitive and lightweight analytics. No cookies
          just insights.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg">Get Started</Button>

          <Button variant="outline" size="lg" asChild>
            <Link href="#">Live demo</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
