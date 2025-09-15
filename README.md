# AI Studio - Image Generation Application

🌐 **Live Demo**: [https://ai-image-generator-abid.vercel.app/](https://ai-image-generator-abid.vercel.app/)

AI Studio is a modern web application built with React and Vite that enables users to generate, manage, and save AI-generated images. The application features a clean, intuitive interface with real-time image generation capabilities.

## Features

- **AI Image Generation**: Create unique images using advanced AI models
- **Image Management**: Save, view, and organize generated images
- **Customizable Settings**: Adjust generation parameters through the settings panel
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **User Preferences**: Personalized experience with name customization

## Tech Stack

- **Frontend**: React with Vite
- **Styling**: TailwindCSS
- **State Management**: React Context API
- **Deployment**: Vercel

## Project Structure

```
src/
├── Components/      # Reusable UI components
├── Context/         # React Context definitions
├── Hooks/           # Custom React hooks
├── Pages/           # Main application pages
├── Provider/        # Context providers
├── Reducer/         # State management reducers
├── utils/           # Utility functions
└── assets/          # Static assets
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`

## Key Components

- **Header**: Main navigation and application title
- **SearchInput**: Interface for image generation prompts
- **SettingsPanel**: Configuration for image generation parameters
- **SavedImages**: Gallery view of saved generations
- **ResultAsImage**: Display component for generated images

## Development

- Built with React + Vite for optimal development experience
- Features Hot Module Replacement (HMR) for rapid development
- Includes ESLint configuration for code quality
- Supports TypeScript integration for type safety

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
