import { Loader } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-green-50 dark:bg-gray-900">
      <div className="text-4xl font-bold text-green-600 dark:text-green-400 animate-pulse flex items-center">
        <Loader className="animate-spin mr-2" />
        Plant Doctor
      </div>
    </div>
  )
}
