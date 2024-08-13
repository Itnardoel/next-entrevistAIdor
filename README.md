# Interview Simulation App (entrevistAIdor)

Welcome to the Interview Simulation App (entrevistAIdor)! This application leverages artificial intelligence (AI) through the Gemini API and is built using Next.js. It is designed to help users practice and improve their interview skills by simulating real interview scenarios.

## Features

- **AI-Powered Interview Simulation:** Utilizes the Gemini API to generate realistic interview questions and provide feedback.
- **Web Speech API Integration:** Enables voice interaction by allowing users to speak their answers and receive spoken responses from the AI.

## Inspiration

This project is based on an idea from [Goncy](https://github.com/goncy). I would like to acknowledge and thank Goncy for the inspiration behind this concept.

## Deployment

The application is deployed on Vercel and can be accessed via the following link:

- [EntrevistAIdor](https://next-entrevist-a-idor.vercel.app/)

## Getting Started

To get started with the Interview Simulation App, follow these instructions:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).
- **NPM or Yarn**: Package managers to install dependencies. NPM comes with Node.js, but you can also use Yarn.

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/interview-simulation-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd interview-simulation-app
    ```

3. **Install dependencies:**

    Using NPM:

    ```bash
    npm install
    ```

    Or using Yarn:

    ```bash
    yarn install
    ```

4. **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add your Gemini API key:

    ```env
    GEMINI_API_KEY=your_gemini_api_key
    ```

5. **Run the development server:**

    Using NPM:

    ```bash
    npm run dev
    ```

    Or using Yarn:

    ```bash
    yarn dev
    ```

    The application will be available at `http://localhost:3000`.

## Acknowledgements

Special thanks to [Goncy](https://github.com/goncy) for the original idea that inspired this project.
