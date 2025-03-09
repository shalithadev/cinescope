"use client"

import { useState } from "react"
import { Bell, Check, Globe, Lock, Palette, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function SettingsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSaveSettings = () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Settings saved",
        description: "Your settings have been saved successfully.",
      })
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">Manage your application settings and preferences.</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <span className="hidden sm:inline">General</span>
          </TabsTrigger>
          <TabsTrigger value="appearance" className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span className="hidden sm:inline">Appearance</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Security</span>
          </TabsTrigger>
          <TabsTrigger value="advanced" className="flex items-center gap-2">
            <Lock className="h-4 w-4" />
            <span className="hidden sm:inline">Advanced</span>
          </TabsTrigger>
        </TabsList>

        {/* General Settings */}
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure general application settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="site-name">Site Name</Label>
                <Input id="site-name" defaultValue="CineScope" />
                <p className="text-sm text-muted-foreground">
                  This is the name that will be displayed in the browser tab and throughout the application.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="site-description">Site Description</Label>
                <Textarea
                  id="site-description"
                  defaultValue="A comprehensive movie management platform."
                  className="min-h-[100px]"
                />
                <p className="text-sm text-muted-foreground">This description will be used for SEO purposes.</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="language">Default Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger id="language">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
                  <p className="text-sm text-muted-foreground">Put the site in maintenance mode.</p>
                </div>
                <Switch id="maintenance-mode" />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings} disabled={isSubmitting} className="ml-auto">
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>Customize the look and feel of your application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Theme Mode</Label>
                <RadioGroup defaultValue="system" className="flex flex-col space-y-1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light">Light</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark">Dark</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="theme-system" />
                    <Label htmlFor="theme-system">System</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Primary Color</Label>
                <div className="grid grid-cols-6 gap-2">
                  {["blue", "green", "red", "purple", "orange", "pink"].map((color) => (
                    <div
                      key={color}
                      className={`h-10 rounded-md cursor-pointer border-2 ${
                        color === "blue" ? "border-primary" : "border-transparent"
                      }`}
                      style={{
                        backgroundColor:
                          color === "blue"
                            ? "hsl(221.2, 83.2%, 53.3%)"
                            : color === "green"
                              ? "hsl(142.1, 76.2%, 36.3%)"
                              : color === "red"
                                ? "hsl(346.8, 77.2%, 49.8%)"
                                : color === "purple"
                                  ? "hsl(262.1, 83.3%, 57.8%)"
                                  : color === "orange"
                                    ? "hsl(24.6, 95%, 53.1%)"
                                    : "hsl(316.6, 73.3%, 52.5%)",
                      }}
                    >
                      {color === "blue" && (
                        <div className="flex h-full items-center justify-center">
                          <Check className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="font-size">Font Size</Label>
                <Select defaultValue="medium">
                  <SelectTrigger id="font-size">
                    <SelectValue placeholder="Select font size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="animations">Animations</Label>
                  <p className="text-sm text-muted-foreground">Enable animations throughout the application.</p>
                </div>
                <Switch id="animations" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings} disabled={isSubmitting} className="ml-auto">
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Email Notifications</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-new-movie">New Movie Added</Label>
                    <p className="text-sm text-muted-foreground">Receive an email when a new movie is added.</p>
                  </div>
                  <Switch id="email-new-movie" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-new-review">New Review</Label>
                    <p className="text-sm text-muted-foreground">Receive an email when a new review is submitted.</p>
                  </div>
                  <Switch id="email-new-review" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-new-user">New User Registration</Label>
                    <p className="text-sm text-muted-foreground">Receive an email when a new user registers.</p>
                  </div>
                  <Switch id="email-new-user" />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Push Notifications</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-enabled">Enable Push Notifications</Label>
                    <p className="text-sm text-muted-foreground">Allow the application to send push notifications.</p>
                  </div>
                  <Switch id="push-enabled" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-new-movie">New Movie Added</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive a push notification when a new movie is added.
                    </p>
                  </div>
                  <Switch id="push-new-movie" defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-new-review">New Review</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive a push notification when a new review is submitted.
                    </p>
                  </div>
                  <Switch id="push-new-review" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings} disabled={isSubmitting} className="ml-auto">
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Security Settings */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Configure security settings for your application.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                <Input id="session-timeout" type="number" defaultValue="30" min="5" max="120" />
                <p className="text-sm text-muted-foreground">
                  The amount of time a user can be inactive before being logged out.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="login-attempts">Maximum Login Attempts</Label>
                <Input id="login-attempts" type="number" defaultValue="5" min="1" max="10" />
                <p className="text-sm text-muted-foreground">
                  The number of failed login attempts before an account is locked.
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="two-factor">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">
                    Require two-factor authentication for all admin users.
                  </p>
                </div>
                <Switch id="two-factor" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="force-password-change">Force Password Change</Label>
                  <p className="text-sm text-muted-foreground">Force users to change their password every 90 days.</p>
                </div>
                <Switch id="force-password-change" />
              </div>

              <div className="space-y-2">
                <Label>Password Requirements</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Switch id="password-uppercase" defaultChecked />
                    <Label htmlFor="password-uppercase">Require uppercase letters</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="password-numbers" defaultChecked />
                    <Label htmlFor="password-numbers">Require numbers</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="password-symbols" defaultChecked />
                    <Label htmlFor="password-symbols">Require symbols</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="password-min-length" defaultChecked />
                    <Label htmlFor="password-min-length">Minimum length: 8 characters</Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings} disabled={isSubmitting} className="ml-auto">
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Advanced Settings */}
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
              <CardDescription>Configure advanced application settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="cache-duration">Cache Duration (minutes)</Label>
                <Input id="cache-duration" type="number" defaultValue="60" min="5" max="1440" />
                <p className="text-sm text-muted-foreground">
                  How long to cache data before refreshing from the database.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pagination-limit">Pagination Limit</Label>
                <Select defaultValue="20">
                  <SelectTrigger id="pagination-limit">
                    <SelectValue placeholder="Select pagination limit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10 items per page</SelectItem>
                    <SelectItem value="20">20 items per page</SelectItem>
                    <SelectItem value="50">50 items per page</SelectItem>
                    <SelectItem value="100">100 items per page</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="debug-mode">Debug Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable detailed error messages and logging.</p>
                </div>
                <Switch id="debug-mode" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="api-access">API Access</Label>
                  <p className="text-sm text-muted-foreground">Allow external applications to access the API.</p>
                </div>
                <Switch id="api-access" defaultChecked />
              </div>

              <div className="space-y-2">
                <Label htmlFor="backup-frequency">Automatic Backup Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger id="backup-frequency">
                    <SelectValue placeholder="Select backup frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hourly">Hourly</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleSaveSettings} disabled={isSubmitting} className="ml-auto">
                {isSubmitting ? "Saving..." : "Save Changes"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

