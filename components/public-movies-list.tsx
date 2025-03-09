"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Skeleton } from "@/components/ui/skeleton"
import { movies, getAllGenres, getAllYears } from "@/lib/data"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function PublicMoviesList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [genreFilter, setGenreFilter] = useState<string>("all")
  const [yearFilter, setYearFilter] = useState<string>("all")
  const [ratingFilter, setRatingFilter] = useState<string>("all")
  const [isLoading, setIsLoading] = useState(true)
  const [visibleMovies, setVisibleMovies] = useState(8)
  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const genres = getAllGenres()
  const years = getAllYears()

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Update active filters when filters change
  useEffect(() => {
    const newActiveFilters = []
    if (genreFilter !== "all") newActiveFilters.push(`Genre: ${genreFilter}`)
    if (yearFilter !== "all") newActiveFilters.push(`Year: ${yearFilter}`)
    if (ratingFilter !== "all") newActiveFilters.push(`Rating: ${ratingFilter}`)
    setActiveFilters(newActiveFilters)
  }, [genreFilter, yearFilter, ratingFilter])

  // Reset a specific filter
  const resetFilter = (filterType: string) => {
    if (filterType.startsWith("Genre")) setGenreFilter("all")
    else if (filterType.startsWith("Year")) setYearFilter("all")
    else if (filterType.startsWith("Rating")) setRatingFilter("all")
  }

  // Reset all filters
  const resetAllFilters = () => {
    setGenreFilter("all")
    setYearFilter("all")
    setRatingFilter("all")
    setSearchQuery("")
  }

  // Filter movies
  const filteredMovies = movies
    .filter(
      (movie) =>
        movie.status === "published" &&
        (searchQuery === "" ||
          movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          movie.director.toLowerCase().includes(searchQuery.toLowerCase())) &&
        (genreFilter === "all" || movie.genre.includes(genreFilter)) &&
        (yearFilter === "all" || movie.year.toString() === yearFilter) &&
        (ratingFilter === "all" ||
          (ratingFilter === "9+" && movie.rating >= 9) ||
          (ratingFilter === "8+" && movie.rating >= 8) ||
          (ratingFilter === "7+" && movie.rating >= 7) ||
          (ratingFilter === "6+" && movie.rating >= 6)),
    )
    .slice(0, visibleMovies)

  const loadMore = () => {
    setVisibleMovies((prev) => prev + 8)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-6">
      {/* Enhanced Search and Filter Section */}
      <div className="rounded-lg border border-primary/20 bg-card p-4 shadow-sm">
        <div className="flex flex-col gap-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary/70" />
            <Input
              placeholder="Search movies by title or director..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 border-primary/20 focus-visible:ring-primary"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full p-0 text-primary/70 hover:text-primary"
                onClick={() => setSearchQuery("")}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap items-center gap-2">
            <Select value={genreFilter} onValueChange={setGenreFilter}>
              <SelectTrigger className="h-9 w-[150px]">
                <SelectValue placeholder="Genre" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Genres</SelectItem>
                {genres.map((genre) => (
                  <SelectItem key={genre} value={genre}>
                    {genre}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="h-9 w-[150px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Years</SelectItem>
                {years.map((year) => (
                  <SelectItem key={year} value={year.toString()}>
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="h-9 w-[150px]">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="9+">9+ Stars</SelectItem>
                <SelectItem value="8+">8+ Stars</SelectItem>
                <SelectItem value="7+">7+ Stars</SelectItem>
                <SelectItem value="6+">6+ Stars</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="sm" className="h-9 gap-1">
                  <Filter className="h-4 w-4" />
                  <span>More Filters</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Runtime</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        Under 90 min
                      </Button>
                      <Button variant="outline" size="sm">
                        90-120 min
                      </Button>
                      <Button variant="outline" size="sm">
                        120-150 min
                      </Button>
                      <Button variant="outline" size="sm">
                        Over 150 min
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Sort By</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">
                        Newest First
                      </Button>
                      <Button variant="outline" size="sm">
                        Oldest First
                      </Button>
                      <Button variant="outline" size="sm">
                        Highest Rated
                      </Button>
                      <Button variant="outline" size="sm">
                        Most Popular
                      </Button>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            {activeFilters.length > 0 && (
              <Button variant="ghost" size="sm" onClick={resetAllFilters} className="ml-auto">
                Clear All
              </Button>
            )}
          </div>

          {/* Active Filters */}
          {activeFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {activeFilters.map((filter) => (
                <Badge key={filter} variant="secondary" className="flex items-center gap-1 px-3 py-1">
                  {filter}
                  <Button variant="ghost" size="icon" className="h-4 w-4 p-0 ml-1" onClick={() => resetFilter(filter)}>
                    <X className="h-3 w-3" />
                  </Button>
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      {!isLoading && (
        <div className="text-sm text-muted-foreground">
          Showing {filteredMovies.length} of {movies.filter((m) => m.status === "published").length} movies
        </div>
      )}

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array(8)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="overflow-hidden rounded-lg">
                <Skeleton className="aspect-[2/3] w-full" />
                <div className="p-4 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="flex gap-2 pt-2">
                    <Skeleton className="h-6 w-12 rounded-full" />
                    <Skeleton className="h-6 w-12 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredMovies.map((movie) => (
            <motion.div key={movie.id} variants={item} className="movie-card-hover">
              <Link href={`/movies/${movie.id}`}>
                <Card className="overflow-hidden border-primary/20 hover:border-primary/50 transition-colors">
                  <div className="aspect-[2/3] w-full overflow-hidden">
                    <img
                      src={movie.poster || "/placeholder.svg"}
                      alt={movie.title}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold line-clamp-1">{movie.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {movie.year} • {movie.runtime} min
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {movie.genre.slice(0, 2).map((genre) => (
                        <Badge key={genre} variant="outline" className="border-primary/30 bg-primary/5 text-xs">
                          {genre}
                        </Badge>
                      ))}
                      {movie.genre.length > 2 && (
                        <Badge variant="outline" className="text-xs">
                          +{movie.genre.length - 2}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-primary">{movie.rating}/10</span>
                    </div>
                    <Button variant="ghost" size="sm" className="hover:text-primary">
                      Details
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}

      {filteredMovies.length === 0 && !isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <p className="text-lg font-medium">No movies found</p>
          <p className="text-muted-foreground">Try adjusting your filters</p>
          <Button onClick={resetAllFilters} variant="outline" className="mt-4">
            Reset Filters
          </Button>
        </div>
      )}

      {filteredMovies.length < movies.filter((m) => m.status === "published").length && filteredMovies.length > 0 && (
        <div className="flex justify-center pt-6">
          <Button onClick={loadMore} variant="outline">
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}

