import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Film, Users, MessageSquare, Eye, TrendingUp, Clock, ArrowRight } from "lucide-react"
import { movies, users, reviews } from "@/lib/data"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const pendingReviews = reviews.filter((review) => review.status === "pending").length

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome to the CineScope admin dashboard.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Movies</CardTitle>
            <Film className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{movies.length}</div>
            <p className="text-xs text-muted-foreground">
              {movies.filter((movie) => movie.status === "published").length} published
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">
              {users.filter((user) => user.status === "active").length} active users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
            <MessageSquare className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{pendingReviews}</div>
            <p className="text-xs text-muted-foreground">
              {reviews.filter((review) => review.status === "approved").length} approved reviews
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85.4K</div>
            <p className="text-xs text-muted-foreground">+12.5% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and shortcuts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center gap-4 rounded-md border border-primary/20 p-4 hover:bg-primary/5 transition-colors">
                <div className="rounded-full bg-primary/10 p-2">
                  <Film className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Add New Movie</h3>
                  <p className="text-sm text-muted-foreground">Create a new movie entry</p>
                </div>
                <Link href="/admin/movies">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-md border border-primary/20 p-4 hover:bg-primary/5 transition-colors">
                <div className="rounded-full bg-primary/10 p-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Moderate Reviews</h3>
                  <p className="text-sm text-muted-foreground">{pendingReviews} reviews pending</p>
                </div>
                <Link href="/admin/reviews">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-md border border-primary/20 p-4 hover:bg-primary/5 transition-colors">
                <div className="rounded-full bg-primary/10 p-2">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Manage Users</h3>
                  <p className="text-sm text-muted-foreground">{users.length} users total</p>
                </div>
                <Link href="/admin/users">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-4 rounded-md border border-primary/20 p-4 hover:bg-primary/5 transition-colors">
                <div className="rounded-full bg-primary/10 p-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">View Analytics</h3>
                  <p className="text-sm text-muted-foreground">Platform performance metrics</p>
                </div>
                <Link href="/admin/analytics">
                  <Button variant="outline" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">New movie added</p>
                  <p className="text-xs text-muted-foreground">10 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">User role updated</p>
                  <p className="text-xs text-muted-foreground">30 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">New review submitted</p>
                  <p className="text-xs text-muted-foreground">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">User registered</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recent-movies" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent-movies">Recent Movies</TabsTrigger>
          <TabsTrigger value="recent-users">Recent Users</TabsTrigger>
          <TabsTrigger value="recent-reviews">Recent Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="recent-movies" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {movies.slice(0, 6).map((movie) => (
              <Card key={movie.id} className="overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={movie.poster || "/placeholder.svg"}
                    alt={movie.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="line-clamp-1">{movie.title}</CardTitle>
                  <CardDescription>
                    {movie.year} • {movie.genre.join(", ")}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex justify-between">
                    <span className="text-sm">Rating: {movie.rating}/10</span>
                    <Link href={`/admin/movies/${movie.id}`} className="text-sm text-primary hover:underline">
                      View Details
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-end">
            <Link href="/admin/movies" className="text-sm text-primary hover:underline">
              View All Movies →
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="recent-users" className="space-y-4">
          <div className="rounded-md border">
            <div className="p-4">
              <h3 className="text-lg font-medium">Recent Users</h3>
              <p className="text-sm text-muted-foreground">Recently registered users on the platform.</p>
            </div>
            <div className="divide-y">
              {users.slice(0, 5).map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-muted-foreground">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        user.role === "admin"
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                          : user.role === "moderator"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {user.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 text-right">
              <Link href="/admin/users" className="text-sm text-primary hover:underline">
                View All Users →
              </Link>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="recent-reviews" className="space-y-4">
          <div className="rounded-md border">
            <div className="p-4">
              <h3 className="text-lg font-medium">Recent Reviews</h3>
              <p className="text-sm text-muted-foreground">Latest reviews submitted by users.</p>
            </div>
            <div className="divide-y">
              {reviews.slice(0, 5).map((review) => {
                const movie = movies.find((m) => m.id === review.movieId)
                return (
                  <div key={review.id} className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={review.userAvatar} alt={review.userName} />
                          <AvatarFallback>{review.userName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{review.userName}</span>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          review.status === "approved"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : review.status === "pending"
                              ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {review.status}
                      </span>
                    </div>
                    <p className="text-sm mb-1">
                      <span className="font-medium">Movie:</span> {movie?.title}
                    </p>
                    <p className="text-sm mb-2">
                      <span className="font-medium">Rating:</span> {review.rating}/10
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{review.comment}</p>
                  </div>
                )
              })}
            </div>
            <div className="p-4 text-right">
              <Link href="/admin/reviews" className="text-sm text-primary hover:underline">
                View All Reviews →
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

