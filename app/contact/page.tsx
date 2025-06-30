import { Send } from "lucide-react"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="card">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">
              Name
            </label>
            <input type="text" id="name" name="name" className="input" required />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input type="email" id="email" name="email" className="input" required />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2">
              Message
            </label>
            <textarea id="message" name="message" rows={4} className="input" required></textarea>
          </div>
          <button type="submit" className="btn flex items-center justify-center w-full">
            <Send className="mr-2" />
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
