import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Music, Mic, GraduationCap, Disc, Video, PartyPopper } from "lucide-react";

export default function GiantImpactWebsite() {
  return (
    <div className="bg-black text-white font-sans">
      {/* Header / Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img 
              src="https://i.ibb.co/LXB6r2N7/Logo-Giant-Impact-Entertainment-1-1.png" 
              alt="Giant Impact Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold tracking-wide">Giant Impact</span>
          </div>
          <nav className="hidden md:flex gap-8 text-gray-300 text-sm uppercase tracking-wide">
            <a href="#studio" className="hover:text-white">Studio</a>
            <a href="#podcast" className="hover:text-white">Podcast</a>
            <a href="#academy" className="hover:text-white">Academy</a>
            <a href="#records" className="hover:text-white">Records</a>
            <a href="#media" className="hover:text-white">Media</a>
            <a href="#sessions" className="hover:text-white">Sessions</a>
          </nav>
        </div>
      </header>

      <div className="p-6 bg-purple-600 text-white rounded-xl">Tailwind Working</div>


      {/* Hero Section */}
             <section className="relative h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black">
        <img
          src="https://i.ibb.co/LXB6r2N7/Logo-Giant-Impact-Entertainment-1-1.png"
          alt="Giant Impact Logo"
          className="mb-8 w-40 h-40 md:w-56 md:h-56 object-contain mx-auto"
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-wide"
        >
          GIANT IMPACT ENTERTAINMENT
        </motion.h1>
       
        <p className="mt-4 text-lg md:text-2xl text-gray-300">MUSIC · CULTURE · TALENT</p>
        <div className="mt-8 flex gap-4">
          <Button className="rounded-2xl px-6 py-3 text-lg">Book Studio</Button>
          <Button className="rounded-2xl px-6 py-3 text-lg">Join Academy</Button>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 md:px-20 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-300 leading-relaxed">
          Giant Impact Entertainment is a new-age creative powerhouse in Bangkok – blending music, media, and culture into one ecosystem. We empower artists, podcasters, brands, and fans through our six divisions: Studio, Podcast, Academy, Records, Media, and Sessions.
        </p>
      </section>

      {/* Divisions */}
      <section className="grid md:grid-cols-3 gap-8 px-6 md:px-20 pb-20">
        {divisions.map((d, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            id={d.id}
          >
            <Card className="bg-gray-900 border-gray-800 rounded-2xl shadow-xl h-full">
              <CardContent className="p-6 flex flex-col items-start">
                <d.icon className="h-10 w-10 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{d.title}</h3>
                <p className="text-gray-400 mb-4">{d.description}</p>
                <ul className="text-sm text-gray-300 space-y-1 mb-6">
                  {d.services.map((s, j) => (
                    <li key={j}>• {s}</li>
                  ))}
                </ul>
                <Button className="rounded-xl w-full">{d.cta}</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Community */}
      <section className="bg-gray-950 py-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Join the Movement</h2>
        <p className="max-w-3xl mx-auto text-gray-400 mb-8">
          Fans are part of the journey. From exclusive livestreams to VIP access, Giant Impact brings culture closer to you.
        </p>
        <Button size="lg" className="rounded-2xl px-8 py-4 text-lg">Become a Superfan</Button>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-10 text-center text-gray-500 text-sm">
        <p>📍 Bangkok, Thailand · 📧 info@giantimpact.co</p>
        <p className="mt-2">© 2025 Giant Impact Entertainment</p>
      </footer>
    </div>
  );
}

const divisions = [
  {
    id: "studio",
    title: "GIANT IMPACT STUDIO",
    description: "Recording, mixing, mastering & artist development bundles.",
    services: ["10-Hour Pass (Engineer / DIY)", "Monthly Memberships", "Development Bundles"],
    cta: "Book a Session",
    icon: Music,
  },
  {
    id: "podcast",
    title: "GIANT IMPACT PODCAST",
    description: "Professional podcast recording, video production & distribution.",
    services: ["Multi-Camera Recording", "Editing & Publishing", "Corporate Packages"],
    cta: "Start Your Podcast",
    icon: Mic,
  },
  {
    id: "academy",
    title: "GIANT IMPACT ACADEMY",
    description: "DJ training from beginner to pro with official certification.",
    services: ["Beginner / Intermediate / Pro Courses", "Private Lessons", "Online Academy"],
    cta: "Join the Academy",
    icon: GraduationCap,
  },
  {
    id: "records",
    title: "GIANT IMPACT RECORDS",
    description: "Artist services and signed roster with revenue-sharing deals.",
    services: ["Mixing / Mastering", "Distribution & Marketing", "Label Splits"],
    cta: "Submit Your Demo",
    icon: Disc,
  },
  {
    id: "media",
    title: "GIANT IMPACT MEDIA",
    description: "Full-service media hub: livestreams, video, campaigns & fan engagement.",
    services: ["Music Video Production", "Short-Form Content", "Fan Experiences"],
    cta: "Create with Us",
    icon: Video,
  },
  {
    id: "sessions",
    title: "GIANT IMPACT SESSIONS",
    description: "Events, rooftop parties, showcases & cultural activations.",
    services: ["Rooftop Events", "Club Partnerships", "Sponsor Activations"],
    cta: "Join the Next Session",
    icon: PartyPopper,
  },
];
