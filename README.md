# Modern E-Commerce Web Application 🛒

A full-stack, highly optimized e-commerce web application built with the latest **Next.js (App Router)**. This project demonstrates modern React architecture, separating data-fetching server components from interactive client components, and utilizes Server Actions for secure data mutations.

## 📖 About The Project

This application simulates a complete e-commerce experience. It consists of two main parts:
1. **Customer Storefront:** Allows users to browse products, filter by categories and prices, add items to their shopping cart, and simulate a checkout process. It also includes a fully functional user authentication system (register, login, profile management, and order history).
2. **Admin Dashboard:** A secure, restricted area for store administrators to manage products (CRUD operations), track sales, and view user details and incoming orders.

The app uses [FakeStoreAPI](https://fakestoreapi.com/) as its headless backend for mocking data.

## ✨ Key Features

### 🛍️ For Customers
* **Product Catalog:** Browse products with Server-Side Rendering (SSR) for lightning-fast initial loads and great SEO.
* **Advanced Filtering:** Filter products dynamically by category and price range.
* **Shopping Cart:** Add, remove, and update quantities of products in the cart using global Context API state.
* **User Authentication:** Secure login and registration flows.
* **User Dashboard:** Edit personal information, manage delivery addresses, and view order history.

### 🛡️ For Administrators
* **Secure Login:** Protected admin route using Next.js Middleware, HttpOnly Cookies, and Server Actions.
* **Product Management:** Add, update, and delete products directly from the dashboard.
* **Sales Reports:** View total sales and filter orders by specific date ranges.
* **User & Order Management:** Lazy-loaded accordions to view specific user details and order contents without overloading the server.

## 🛠️ Tech Stack & Architecture

* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Library:** [React 19](https://react.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Forms & Validation:** [Formik](https://formik.org/) & [Yup](https://github.com/jquense/yup)
* **Architecture Highlights:**
  * **Server Components (Smart):** Data fetching happens on the server close to the database/API, ensuring zero layout shift and minimal JS sent to the client.
  * **Client Components (Dumb):** Purely presentational components handling UI states and user interactions.
  * **Server Actions:** Securely handling form submissions and data mutations (like deleting products or logging in as admin) with automatic cache revalidation (`revalidatePath`).
  * **Parallel Data Fetching:** Utilizing `Promise.all` to fetch non-dependent data simultaneously, reducing TTFB (Time to First Byte).

## 🚀 How to Run the Project Locally

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` (or `yarn`/`pnpm`) installed.

### 1. Clone the repository
```bash
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name

```

### 2. Install dependencies

```bash
npm install
# or
yarn install

```

### 3. Set up Environment Variables

Create a `.env.local` file in the root directory of the project. You need to configure the base API URL and set up a secure password for the Admin Dashboard.

Add the following configuration to `.env.local`:

```env
# The base URL for the backend API
NEXT_PUBLIC_API_URL=[https://fakestoreapi.com](https://fakestoreapi.com)

# Password to access the /admin dashboard
ADMIN_PASSWORD=admin123

```

### 4. Start the Development Server

```bash
npm run dev
# or
yarn dev

```

### 5. Open the Application

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to view the customer storefront.
To access the Admin Dashboard, navigate to [http://localhost:3000/admin](https://www.google.com/search?q=http://localhost:3000/admin) and log in using the password defined in your `.env.local` file.

## 📂 Project Structure

* `/src/app`: Contains the Next.js App Router pages, layouts, and loading states.
* `/src/components`: Contains reusable UI components (divided into Admin, ShopPage, User, etc.).
* `/src/actions`: Next.js Server Actions for secure backend operations (e.g., `adminAuth.js`).
* `/src/utils`: Utility functions and the centralized `api.js` layer for all external fetches.
* `/src/context`: React Context providers for global state management (Auth, Cart).
* `/src/middleware.js`: Edge middleware protecting the `/admin` routes.
