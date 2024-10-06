import { useState } from "react";
import { Calendar, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {
    console.log("Submitted email:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold">
                <span className="text-green-500">UW</span>Planr
              </Link>
            </div>
            <div className="hidden md:flex">
              <Button>
                <Link to="plan">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <section className="container mx-auto px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Plan Your Degree
            </h1>
            <p className="mb-8 text-xl text-gray-600">
              From course statistics and reviews to personalized
              recommendations, UWPlanr is the ultimate course planner.
            </p>
            <Button className="px-4 py-3">
              <Link to="/plan">Get Started</Link>
            </Button>
          </div>
          <div className="order-first md:order-last">
            <img
              src="/hero.png"
              alt="UWPlanr"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Why Choose <span className="text-green-500">UW</span>Planr?
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex justify-center text-green-500">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Efficient Planning</h3>
              <p className="text-gray-600">
                Plan your entire academic journey in minutes, not hours.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex justify-center text-green-500">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">
                Plethora of Information
              </h3>
              <p className="text-gray-600">
                Get detailed statistics and information about courses and
                degrees.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <div className="mb-4 flex justify-center text-green-500">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Efficient Planning</h3>
              <p className="text-gray-600">
                Plan your entire academic journey in minutes, not hours.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Stay Updated</h2>
          <p className="mb-8 text-xl text-gray-600">
            Subscribe to our mailing list for the latest UWPlanr updates and
            tips
          </p>
          <div
            className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" onClick={handleSubmit}>Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
