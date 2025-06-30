import { Loader } from "lucide-react"

export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-center h-64">
        <div className="flex items-center space-x-2">
          <Loader className="animate-spin text-green-600" size={24} />
          <span className="text-lg">Loading disease information...</span>
        </div>
      </div>
    </div>
  )
}
