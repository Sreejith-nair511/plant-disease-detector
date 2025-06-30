"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { diseases } from "./data/diseases"
import { Upload, Loader } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"

const DynamicChart = dynamic(() => import("./components/GrowthFactorsChart"), { ssr: false })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [detectedDisease, setDetectedDisease] = useState<(typeof diseases)[0] | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedImage(event.target?.result as string)
        const randomDisease = diseases[Math.floor(Math.random() * diseases.length)]
        setDetectedDisease(randomDisease)
      }
      reader.readAsDataURL(file)
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-green-50 dark:bg-gray-900">
        <div className="text-4xl font-bold text-green-600 dark:text-green-400 animate-pulse flex items-center">
          <Loader className="animate-spin mr-2" />
          Plant Doctor
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Plant Disease Detector</h1>
      <div className="card mb-8">
        <label className="block mb-4 cursor-pointer">
          <span className="btn flex items-center justify-center">
            <Upload className="mr-2" />
            Upload Plant Image
          </span>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
        </label>
        {selectedImage && (
          <div className="mb-4 max-h-96 overflow-hidden">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Uploaded plant"
              width={400}
              height={300}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        )}
        {detectedDisease && (
          <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-2">{detectedDisease.name}</h2>
            <p className="mb-2">
              <strong>Symptoms:</strong> {detectedDisease.symptoms}
            </p>
            <p className="mb-2">
              <strong>Causes:</strong> {detectedDisease.causes}
            </p>
            <p>
              <strong>Treatment:</strong> {detectedDisease.treatment}
            </p>
          </div>
        )}
      </div>
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Factors Affecting Plant Growth</h2>
        <div className="h-64 md:h-96 overflow-x-auto">
          <DynamicChart />
        </div>
      </div>
      <div className="card">
        <h2 className="text-2xl font-bold mb-4">Useful Resources</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link
              href="https://agricoop.nic.in/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ministry of Agriculture & Farmers Welfare, Government of India
            </Link>
          </li>
          <li>
            <Link
              href="https://icar.gov.in/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indian Council of Agricultural Research (ICAR)
            </Link>
          </li>
          <li>
            <Link
              href="https://farmer.gov.in/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Farmers Portal, Government of India
            </Link>
          </li>
          <li>
            <Link
              href="https://www.iffco.in/en"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indian Farmers Fertiliser Cooperative Limited (IFFCO)
            </Link>
          </li>
          <li>
            <Link
              href="https://www.indiaseeds.com/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              National Seeds Corporation Ltd.
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
