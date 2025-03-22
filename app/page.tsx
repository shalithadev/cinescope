import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { PublicMoviesList } from "@/components/public-movies-list";
import { Film, Play } from "lucide-react";
import { Logo } from "@/components/logo";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-primary/20 bg-background sticky top-0 z-50 w-full border-b">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-primary text-xl font-bold">CineScope</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <Link
              href="/"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Movies
            </Link>
            <Link
              href="/genres"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Genres
            </Link>
            <Link
              href="/about"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/admin"
              className="hover:text-primary text-sm font-medium transition-colors"
            >
              Admin
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        {/* Enhanced Hero Section with Cinematic Background */}
        <section className="relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="bg-linear-to-r absolute inset-0 z-10 from-black/70 via-black/50 to-black/70 dark:from-black/80 dark:via-black/60 dark:to-black/80"></div>
            {/* height=1080&width=1920 */}
            <div className="absolute inset-0 bg-[url('/images/hero-1.jpg?height=1080&width=1920')] bg-cover bg-center opacity-60 dark:opacity-40"></div>

            {/* Animated Film Strips */}
            <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
              <div className="absolute left-0 top-0 flex h-full w-full flex-col justify-between overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="backdrop-blur-xs flex h-16 items-center bg-black/20 dark:bg-white/10"
                    style={{
                      transform: `translateX(${i % 2 === 0 ? "-20%" : "20%"})`,
                    }}
                  >
                    {[...Array(10)].map((_, j) => (
                      <div key={j} className="mx-8">
                        <Film className="h-8 w-8 text-white/30 dark:text-white/20" />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="container relative z-20 px-4 py-32 md:py-40 lg:py-52">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="max-w-3xl space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
                  Discover Amazing Movies
                </h1>
                <p className="mx-auto max-w-[700px] text-lg text-white/80 drop-shadow-sm md:text-xl">
                  Explore our collection of the best movies from around the
                  world.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 gap-2"
                >
                  <Play className="h-4 w-4" />
                  Browse Movies
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-primary/10 backdrop-blur-xs border-primary/30 hover:bg-primary/20 text-white hover:text-white"
                >
                  Latest Releases
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container px-4 py-12 md:px-6">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">
                Featured Movies
              </h2>
              <p className="text-muted-foreground">
                Our selection of must-watch films
              </p>
            </div>
            <Button variant="outline">View All</Button>
          </div>

          <PublicMoviesList />
        </section>
      </main>
      <footer className="border-primary/20 bg-primary/5 border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex items-center gap-2">
            <Logo className="h-6 w-6" />
            <p className="text-muted-foreground text-center text-sm leading-loose md:text-left">
              © 2023 CineScope. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary text-sm underline-offset-4 transition-colors hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary text-sm underline-offset-4 transition-colors hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary text-sm underline-offset-4 transition-colors hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
