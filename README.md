# Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and shadcn/ui components. Features a clean dark mode interface and smooth animations.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Clone and Setup

1. Clone the repository:
```bash
git clone https://github.com/iamakchavan/chetanfolio.git
cd chetanfolio/project
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🌐 Deploying to Netlify

### Method 1: Deploy with Netlify CLI

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
# or
yarn build
```

3. Deploy to Netlify:
```bash
netlify deploy
```

### Method 2: Deploy via Netlify Website

1. Push your code to GitHub (if you've made any changes)

2. Go to [Netlify](https://www.netlify.com/) and sign in

3. Click "New site from Git"

4. Choose GitHub and select your repository

5. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `project/.next`
   - Node version: 18 (or your preferred version)

6. Click "Deploy site"

### Environment Variables
No environment variables are required for basic deployment.

## 🛠️ Built With
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## 📝 Notes
- The site uses dark mode by default
- Fully responsive design for all screen sizes
- Built with modern React practices and TypeScript

## 🤝 Contributing
Feel free to fork this repository and submit pull requests for any improvements.

## 📄 License
This project is open source and available under the MIT License.
