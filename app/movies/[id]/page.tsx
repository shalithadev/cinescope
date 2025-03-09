"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import { Skeleton } from "@/components/ui/skeleton"
import { getMovieById, getReviewsForMovie } from "@/lib/data"

export default function MovieDetailsPage() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const movie = getMovieById(id as string)
  const reviews = getReviewsForMovie(id as string)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setReviewText("")
      setRating(0)
      alert("Review submitted successfully! It will be visible after moderation.")
    }, 1000)
  }

  if (!movie && !isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-2xl font-bold">Movie not found</h1>
          <p className="text-muted-foreground">The movie you're looking for doesn't exist.</p>
          <Link href="/" className="mt-4">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {isLoading ? (
        <div className="w-full">
          <Skeleton className="aspect-21/9 w-full" />
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row md:gap-8">
              <Skeleton className="h-[400px] w-[300px] rounded-lg" />
              <div className="mt-6 flex-1 space-y-4 md:mt-0">
                <Skeleton className="h-10 w-3/4" />
                <Skeleton className="h-6 w-1/2" />
                <div className="flex gap-2 py-2">
                  <Skeleton className="h-8 w-16 rounded-full" />
                  <Skeleton className="h-8 w-16 rounded-full" />
                  <Skeleton className="h-8 w-16 rounded-full" />
                </div>
                <Skeleton className="h-32 w-full" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        movie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div
              className="relative h-[50vh] w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${movie.backdrop})`,
                backgroundPosition: "center 20%",
              }}
            >
              <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
              <div className="container relative mx-auto flex h-full items-end px-4 pb-8">
                <Link href="/" className="absolute left-4 top-4">
                  <Button variant="outline" size="icon" className="rounded-full bg-background/50 backdrop-blur-xs">
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col md:flex-row md:gap-8">
                <div className="relative -mt-32 overflow-hidden rounded-lg border md:w-[300px]">
                  <img
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-6 flex-1 space-y-4 md:mt-0">
                  <h1 className="text-3xl font-bold">
                    {movie.title} <span className="text-muted-foreground">({movie.year})</span>
                  </h1>

                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center">
                      <Star className="mr-1 h-5 w-5 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium">{movie.rating}/10</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{movie.runtime} min</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
                      <span>{new Date(movie.releaseDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {movie.genre.map((genre) => (
                      <Badge key={genre} variant="secondary">
                        {genre}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">Overview</h2>
                    <p className="mt-2 text-muted-foreground">{movie.overview}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold">Director</h2>
                    <p className="mt-2 text-muted-foreground">{movie.director}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold">Reviews</h2>

                <div className="mt-6 space-y-6">
                  {reviews.length > 0 ? (
                    reviews.map((review) => (
                      <Card key={review.id}>
                        <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                          <Avatar>
                            <AvatarImage src={review.userAvatar} alt={review.userName} />
                            <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">{review.userName}</CardTitle>
                            <div className="flex items-center">
                              <Star className="mr-1 h-4 w-4 fill-yellow-500 text-yellow-500" />
                              <span className="text-sm">{review.rating}/10</span>
                              <span className="mx-2 text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">
                                {new Date(review.createdAt).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </CardContent>
                      </Card>
                    ))
                  ) : (
                    <p className="text-center text-muted-foreground">No reviews yet. Be the first to review!</p>
                  )}
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold">Write a Review</h3>
                  <form onSubmit={handleSubmitReview} className="mt-4 space-y-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <span className="mr-2">Rating:</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                            <button key={star} type="button" onClick={() => setRating(star)} className="p-1">
                              <Star
                                className={`h-5 w-5 ${
                                  star <= rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Textarea
                      placeholder="Share your thoughts about the movie..."
                      value={reviewText}
                      onChange={(e) => setReviewText(e.target.value)}
                      className="min-h-[120px]"
                    />
                    <Button type="submit" disabled={isSubmitting || rating === 0 || !reviewText.trim()}>
                      {isSubmitting ? "Submitting..." : "Submit Review"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        )
      )}
    </div>
  )
}

