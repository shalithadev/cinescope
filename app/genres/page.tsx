import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getAllGenres, movies } from "@/lib/data"
import Link from "next/link"
import { Logo } from "@/components/logo"

export default function GenresPage() {
  const genres = getAllGenres()

  // Count movies per genre
  const genreCounts = genres.map((genre) => ({
    name: genre,
    count: movies.filter((movie) => movie.genre.includes(genre)).length,
    movies: movies.filter((movie) => movie.genre.includes(genre)).slice(0, 4),
  }))

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Logo />
              <span className="hidden font-bold sm:inline-block">CineScope</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container py-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">Genres</h1>
            <p className="text-xl text-primary/90">Explore movies by genre</p>
          </div>
        </div>

        <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
          {genreCounts.map((genre) => (
            <Card key={genre.name} className="flex flex-col hover:shadow-md hover:shadow-primary/20 transition-all">
              <CardHeader className="border-b border-primary/10">
                <CardTitle className="text-primary">{genre.name}</CardTitle>
                <CardDescription>{genre.count} movies</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 pt-4">
                <div className="grid grid-cols-2 gap-2">
                  {genre.movies.map((movie) => (
                    <Link key={movie.id} href={`/movies/${movie.id}`} className="overflow-hidden rounded-md">
                      <img
                        src={movie.poster || "/placeholder.svg"}
                        alt={movie.title}
                        className="aspect-[2/3] h-auto w-full object-cover transition-all hover:scale-105"
                        width={200}
                        height={300}
                      />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

