import { Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-4">
      <div className="container mx-auto px-4 text-center flex items-center justify-center">
        Made with <Heart className="mx-1 inline-block" size={16} /> by Sreejith
      </div>
    </footer>
  )
}

export default Footer
