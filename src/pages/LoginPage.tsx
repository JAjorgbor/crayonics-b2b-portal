import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Lock, Mail } from "lucide-react"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    
    if (!email || !password) {
      setError("Please fill in all fields.")
      return
    }

    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      if (email === "test@example.com" && password === "password") {
        alert("Login successful!")
      } else {
        setError("Invalid email or password.")
      }
    }, 1500)
  }

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Left Side: Login Form */}
      <div className="flex w-full flex-col justify-center p-8 md:w-1/2 lg:p-12">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
              Your School Name Here
            </h2>
          </div>
          
          <Card className="border-0 shadow-none bg-transparent">
            <CardHeader className="p-0 pb-6 text-center md:text-left">
              <CardTitle className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                AI-Resilience Program Dashboard
              </CardTitle>
              <CardDescription className="text-base text-slate-600 dark:text-slate-400 mt-2">
                Partner School Admin Access
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 dark:text-slate-300">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="admin@school.edu"
                      className="pl-10 h-11 border-slate-200 focus-visible:ring-indigo-600 dark:border-slate-700 dark:bg-slate-800"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-slate-700 dark:text-slate-300">Password</Label>
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:underline dark:text-indigo-400">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 h-11 border-slate-200 focus-visible:ring-indigo-600 dark:border-slate-700 dark:bg-slate-800"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                    />
                  </div>
                </div>

                {error && (
                  <div className="text-sm text-red-500 font-medium animate-in fade-in-0 slide-in-from-top-1">
                    {error}
                  </div>
                )}

                <Button 
                  type="submit" 
                  className="w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200/50 dark:shadow-indigo-900/50 transition-all duration-300 transform active:scale-95"
                  disabled={loading || !email || !password}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 p-0 pt-6">
              <div className="relative w-full">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-200 dark:border-slate-700" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-slate-50 px-2 text-slate-500 dark:bg-slate-900">
                    Need help?
                  </span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800">
                Request access from TIS
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Right Side: Decorative/Abstract */}
      <div className="hidden h-screen w-1/2 bg-slate-100 md:block dark:bg-slate-800 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 h-[500px] w-[500px] rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/30"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-[500px] w-[500px] rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/30"></div>
        
        {/* Dashboard Preview / Illustration Placeholder */}
        <div className="relative flex h-full items-center justify-center p-20">
             <div className="relative aspect-square w-full max-w-lg rounded-2xl bg-white/40 p-1 shadow-2xl backdrop-blur-xl border border-white/20 dark:bg-black/20 dark:border-white/10">
                <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4 p-6">
                        <div className="w-16 h-16 bg-white/50 rounded-2xl mx-auto flex items-center justify-center shadow-lg backdrop-blur-sm">
                            <div className="w-8 h-8 rounded-lg bg-indigo-500"></div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Secure Analytics</h3>
                        <p className="text-slate-600 dark:text-slate-300">Monitor student improvements and program effectiveness in real-time.</p>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </div>
  )
}
