# DACINC Assignment – Next.js App

This is a **Next.js full-stack application** that implements authentication, a user dashboard, and an analytics dashboard using external APIs.

## 🚀 Features

* **Login Page**: Users can log in with email & password using [Reqres API](https://reqres.in/).
* **Dashboard**: Displays a personalized welcome screen with logout functionality.
* **Analytics Dashboard**:

  * Pie chart showing **Completed vs Pending Tasks**.
  * Bar chart showing **Number of Todos per User** using [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos).
* **Protected Routes**: Dashboard requires authentication.
* **Persistent Auth**: JWT-like token stored in `localStorage`.
* **Responsive UI** with TailwindCSS & modern styling.

---

## 🖼️ Screenshots

### 🔑 Login Page

![Login](/img/login.png)

### 🏠 Dashboard

![Dashboard](/img/dashboard.png)

### 📊 Analytics Dashboard

![Analytics](/img/analytics.png)

---

## 🛠️ Tech Stack

* **Frontend**: Next.js 15, React 19, TailwindCSS 4
* **Charts**: Recharts
* **API Requests**: Axios
* **UI Enhancements**: React Hot Toast, React Icons

---

## ⚙️ Installation & Setup

Clone the repo:

```bash
git clone https://github.com/your-username/dacinc-assignment.git
cd dacinc-assignment
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run development server:

```bash
npm run dev
```

App will run at **[http://localhost:3000](http://localhost:3000)**.

---

## 🔐 Authentication

* Uses **Reqres API** for login.
* Successful login stores token in `localStorage` → redirects to `/dashboard`.
* Logout clears token and redirects to login page.

---

## 📊 Analytics

* Fetches todos from JSONPlaceholder API.
* Visualizes data with:

  * **Pie Chart** → Task Completion Ratio.
  * **Bar Chart** → Todos per User.

---

## 📂 Project Structure

```
src/
 ├── api/              # Axios client & API methods
 ├── app/              # Next.js app router pages
 │   ├── login/        # Login page
 │   ├── dashboard/    # Dashboard page
 │   └── analytics/    # Analytics page
 └── components/       # Reusable components
```

---

## 🚀 Deployment

Easily deploy with [Vercel](https://vercel.com/):

```bash
vercel deploy
```

---

## 👨‍💻 Author

**Abhishek Yadav**

* Portfolio: [devabhishekyadav.in](https://www.devabhishekyadav.in/)
* GitHub: [Abhishek09yadav](https://github.com/Abhishek09yadav)
* LinkedIn: [abhishek-yadav007](https://www.linkedin.com/in/abhishek-yadav007)

---

✨ A clean Next.js app demonstrating **authentication, protected routes, and analytics dashboards**.

---

