import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Logo } from "@/components/logo"
import Link from "next/link"
import { Github, Mail, Twitter } from "lucide-react"

export default function AboutPage() {
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
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="rounded-full bg-primary/10 p-4">
            <Logo className="h-16 w-16" />
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold sm:text-4xl">
              About <span className="text-primary">CineScope</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Your ultimate destination for discovering and managing movies
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-primary/20 hover:shadow-md hover:shadow-primary/10 transition-all">
              <CardHeader>
                <CardTitle className="text-primary">Our Mission</CardTitle>
                <CardDescription>What drives us forward</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To provide movie enthusiasts with a comprehensive platform to discover, track, and share their
                  favorite films while building a vibrant community of cinema lovers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-md hover:shadow-primary/10 transition-all">
              <CardHeader>
                <CardTitle className="text-primary">Features</CardTitle>
                <CardDescription>What we offer</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 text-muted-foreground space-y-2">
                  <li>Extensive movie database</li>
                  <li>Personalized recommendations</li>
                  <li>User reviews and ratings</li>
                  <li>Watchlist management</li>
                  <li>Advanced search filters</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-md hover:shadow-primary/10 transition-all">
              <CardHeader>
                <CardTitle className="text-primary">Contact Us</CardTitle>
                <CardDescription>Get in touch</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-muted-foreground">contact@cinescope.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Twitter className="h-4 w-4" />
                  <span className="text-muted-foreground">@cinescope</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Github className="h-4 w-4" />
                  <span className="text-muted-foreground">github.com/cinescope</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground">
                CineScope was born from a passion for cinema and a desire to create a better way for movie lovers to
                discover and engage with films. What started as a simple movie tracking tool has grown into a
                comprehensive platform used by thousands of film enthusiasts worldwide.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Join Our Community</h2>
              <p className="text-muted-foreground">
                Become part of our growing community of movie lovers. Share your thoughts, discover new films, and
                connect with fellow enthusiasts.
              </p>
              <div className="flex gap-4">
                <Button>Sign Up Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

