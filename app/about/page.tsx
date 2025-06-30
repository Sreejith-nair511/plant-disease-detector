import { Leaf, Zap, Shield } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Plant Doctor</h1>
      <div className="card mb-8">
        <p className="mb-4">
          Plant Doctor is a simulated plant disease detection app designed to help gardeners and plant enthusiasts
          identify common plant diseases quickly and easily.
        </p>
        <p className="mb-4">
          By uploading an image of a plant leaf, users receive information about a randomly selected plant disease,
          including its symptoms, causes, and treatments.
        </p>
        <p className="mb-4">
          This educational tool aims to raise awareness about common plant diseases and promote better plant care
          practices.
        </p>
        <p>
          For more information on agriculture and plant health, visit the{" "}
          <Link
            href="https://agricoop.nic.in/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ministry of Agriculture & Farmers Welfare, Government of India
          </Link>
          .
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="card text-center">
          <Leaf className="mx-auto mb-4 text-green-600" size={48} />
          <h2 className="text-xl font-bold mb-2">Plant Health</h2>
          <p>Learn about various plant diseases and how to identify them.</p>
        </div>
        <div className="card text-center">
          <Zap className="mx-auto mb-4 text-yellow-500" size={48} />
          <h2 className="text-xl font-bold mb-2">Quick Detection</h2>
          <p>Get instant feedback on potential plant diseases.</p>
        </div>
        <div className="card text-center">
          <Shield className="mx-auto mb-4 text-blue-500" size={48} />
          <h2 className="text-xl font-bold mb-2">Preventive Care</h2>
          <p>Discover treatments and preventive measures for plant diseases.</p>
        </div>
      </div>
    </div>
  )
}
