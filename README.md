
# Quote Generator

A simple and elegant web application to generate random motivational quotes, built with **Next.js**, **React**, **Tailwind CSS**, and **shadcn/ui**.

## ✨ Features

- 🎯 Random quote generation
- 🌙 Light/Dark theme toggle
- 📱 Fully responsive UI
- 🔔 Toast notifications for feedback

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) – React framework for production
- [React](https://react.dev/) – UI library
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) – UI components built with Radix UI and Tailwind
- [lucide-react](https://lucide.dev/) – Icon library
- [next-themes](https://github.com/pacocoursey/next-themes) – Theme toggling for Next.js apps
- [react-hot-toast](https://react-hot-toast.com/) – Beautiful, customizable toast notifications

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (v18 or above)
- pnpm (recommended for package management)

### 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rajputrizwan/Nexium_Muhammad_Rizwan_Assign1.git
   cd Nexium_Muhammad_Rizwan_Assign1
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### 🧪 Development

Run the development server:

```bash
pnpm dev
```

Then visit: [http://localhost:3000](http://localhost:3000)

### 🏗️ Build

To build the project for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

### 🧹 Linting

Run ESLint to check for code issues:

```bash
pnpm lint
```

## 🗂️ Project Structure

```
src/
├── app/                  # Next.js app routing
├── components/           # Custom UI components
│   ├── QuoteCard.tsx     # Quote generator logic and UI
│   └── theme-toggle.tsx  # Theme toggle switch
├── components/ui/        # shadcn/ui primitives (Button, Input, etc.)
public/                   # Static files and assets
```

## 🛠️ Customization

- 💬 **Update Quotes**: Modify quote data inside [`QuoteCard`](src/components/QuoteCard.tsx).
- 🎨 **Theme Configuration**: Adjust settings in [`ThemeProvider`](src/components/theme-provider.tsx).

## 🌐 Deployment

You can view the live app here: **[https://nexium-muhammad-rizwan-quote-genera.vercel.app/](https://nexium-muhammad-rizwan-quote-genera.vercel.app/)**

## 📄 License

This project is built for **educational purposes only**.
