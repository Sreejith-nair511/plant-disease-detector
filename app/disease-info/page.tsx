"use client"

import { useState } from "react"
import { diseases } from "../data/diseases"
import { Search } from "lucide-react"

export default function DiseaseInfo() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredDiseases = diseases.filter(
    (disease) =>
      disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.symptoms.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.causes.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Common Plant Diseases</h1>
      <div className="card mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search diseases, symptoms, or causes..."
            className="input pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        {searchTerm && (
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Found {filteredDiseases.length} disease(s) matching "{searchTerm}"
          </p>
        )}
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filteredDiseases.length > 0 ? (
          filteredDiseases.map((disease, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl font-bold mb-2 text-green-700 dark:text-green-400">{disease.name}</h2>
              <div className="space-y-2">
                <p className="text-sm">
                  <strong className="text-red-600 dark:text-red-400">Symptoms:</strong> {disease.symptoms}
                </p>
                <p className="text-sm">
                  <strong className="text-orange-600 dark:text-orange-400">Causes:</strong> {disease.causes}
                </p>
                <p className="text-sm">
                  <strong className="text-blue-600 dark:text-blue-400">Treatment:</strong> {disease.treatment}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No diseases found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
