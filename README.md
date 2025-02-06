# 🛒 Palettes Express LLC | E-COMMERCE

## 🚀 Overview

This is a fully functional **eCommerce application** built with **Next.js**. It features a modern UI, authentication, product management, shopping cart, checkout, and payment integration.

## 🛠️ Features

- ⚡ **Next.js 14 (App Router)**
- 🎨 **Tailwind CSS** for modern styling
- 🔐 **Authentication** (NextAuth.js / Firebase / Custom)
- 🛍️ **Product management** (CRUD operations)
- 🛒 **Shopping cart & checkout**
- 💳 **Payment integration** (Stripe / PayPal)
- 📦 **Order tracking**
- 🌍 **SEO-friendly**
- 🚀 **Optimized images** using `next/image`
- 🔥 **Fast & scalable**

---

## 📦 Tech Stack

| Technology               | Usage                                    |
| ------------------------ | ---------------------------------------- |
| **Next.js**              | Server-side rendering, static generation |
| **React**                | Frontend UI components                   |
| **Tailwind CSS**         | Styling and responsive design            |
| **Prisma**               | ORM for database interaction             |
| **PostgreSQL / MongoDB** | Database                                 |
| **NextAuth.js**          | Authentication                           |
| **Stripe**               | Payment processing                       |
| **Zustand / Redux**      | State management                         |
| **Vercel / Docker**      | Deployment                               |

---

## 🔧 Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/dushimeemma/palettes-store.git
cd palettes-store
yarn install
```

### 2️⃣ Create a `.env.local` file

```sh
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret_key
NEXT_PUBLIC_STRIPE_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 3️⃣ Run the development server

```sh
yarn dev
```

### 🌟 Build & Deployment

```sh
yarn build
yarn start
```

### 🌍 Deploy on Vercel

- Push your code to GitHub.
- Go to Vercel and import your repository.
- Configure environment variables.
- Deploy 🚀.

### 🐳 Docker Setup

```sh
docker-compose build && docker-compose up -d
```

### 👥 Contributors

- [Emmanuel Dushime](https://github.com/dushimeemma) - Lead Developer
