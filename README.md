# 🌿 Plant Disease Detector

A modern, intelligent web application for identifying plant diseases using a **custom-trained AI model**. This tool empowers farmers, students, and agricultural researchers by detecting visual symptoms of plant illnesses and providing insights via a sleek, interactive UI.

Built with **Next.js (App Router)**, **TailwindCSS**, and **TypeScript**, the app combines frontend elegance with backend intelligence.

---

## 🚀 Features

- 🧠 **AI-Powered Detection**  
  Integrates a custom-trained machine learning model to analyze plant visuals and predict diseases with high accuracy.

- 📊 **Visual Analytics**  
  Showcases interactive charts and growth factor graphs for better understanding of plant health trends.

- 🌗 **Dark/Light Mode**  
  Supports dynamic theming for a pleasant UX.

- ⚡ **App Router (Next.js 14)**  
  Uses the latest file-based routing and server-side rendering for performance.

- 🎨 **TailwindCSS UI**  
  Clean, responsive design for mobile and desktop users.

- 🔌 **Modular Architecture**  
  Easily scalable to add new features, crops, or regional data.

---

## 🧠 How the AI Works

- The AI model is custom-trained on a curated dataset of plant leaf images (e.g., tomato, potato, grape).
- Model is integrated into the frontend/backend pipeline (can be hosted on TensorFlow.js, FastAPI, Flask, etc.).
- Real-time predictions or image uploads trigger the AI to classify disease type and confidence level.
- Outputs are visualized using charts and feedback cards.

> **Note:** The AI logic is modular and can be upgraded or replaced as needed.

---

## 📁 Project Structure

plant-disease-detector/
├── app/ # App Router structure
│ ├── about/ # About page
│ ├── contact/ # Contact page
│ ├── components/ # Reusable UI (Header, Footer, Charts)
│ └── layout.tsx # Root layout config
├── public/ # Static images and assets
├── styles/ # Global styles (globals.css)
├── model/ # (Optional) AI model scripts or endpoints
├── tailwind.config.ts # TailwindCSS theme config
├── package.json # Project scripts and dependencies
└── README.md # This file

---

## 🔧 Tech Stack

| Tech         | Role                          |
|--------------|-------------------------------|
| Next.js 14   | Fullstack React Framework     |
| TailwindCSS  | Utility-first CSS framework   |
| TypeScript   | Type-safe JavaScript          |
| AI Model     | Custom CNN / ML Model         |
| Charts       | Custom data visualization     |
| Deployment   | Easily deployable on Vercel   |

---

## 🛠️ Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/plant-disease-detector.git
   cd plant-disease-detector
Install Dependencies


pnpm install
Run the App

bash
Copy
Edit
pnpm dev
Visit: http://localhost:3000

🧪 Model Integration
for  hosting the AI model:

Make sure the backend (Flask/FastAPI/Node) is running on a known port.

Connect the frontend API calls to the model endpoint.

A normal example 

const res = await fetch("/api/predict", { method: "POST", body: image });
const result = await res.json();
Pro Tip: Use TensorFlow.js for full client-side inference if needed.


📄 License
This project is licensed under the MIT License.

Built with ❤️ for farmers and techies alike.
