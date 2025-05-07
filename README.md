
# RentFlow

**RentFlow** is a modern web application for real estate rental and tenant management. It allows property owners to manage rental listings, tenant interactions, rent payments, and contracts, while providing tenants with an easy way to find and communicate about properties.

This project is a **fork of [Property Plus](https://github.com/SonamRinzinGurung/Real-Estate-Rental-and-Tenant-Management-System)** by [Sonam Rinzin Gurung](https://github.com/SonamRinzinGurung).
**Credit and thanks** to the original author for the base implementation. This fork includes additional changes and improvements maintained by [@arya2004](https://github.com/arya2004).

---


## ✨ Features

* Post and manage rental properties
* Search and filter properties by criteria
* View detailed property listings
* Secure JWT authentication (owner and tenant roles)
* Built-in real-time chat between owners and tenants
* Email communication between owners and tenants
* Digital property contract creation
* Tenant management system
* Rent payment tracking and logging

---

## 🚀 Tech Stack

* **Frontend**: React.js, Vite
* **Backend**: Node.js, Express.js
* **Database**: MongoDB
* **Media Storage**: Cloudinary
* **Email**: Gmail + Ethereal for testing
* **Authentication**: JWT (Access & Refresh tokens)

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js
* npm
* MongoDB (local or cloud)
* Cloudinary account
* Gmail account (or use Ethereal for test emails)

### 1. Clone the Repository

```bash
git clone https://github.com/arya2004/rentflow.git
cd rentflow
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client
npm install
```

### 4. Configure Environment Variables

#### In `server/.env`

```env
MONGO_URI=<your_mongo_uri>
ACCESS_TOKEN_SECRET_OWNER=<your_access_token_secret_owner>
ACCESS_TOKEN_SECRET_TENANT=<your_access_token_secret_tenant>
REFRESH_TOKEN_SECRET_OWNER=<your_refresh_token_secret_owner>
REFRESH_TOKEN_SECRET_TENANT=<your_refresh_token_secret_tenant>
ACCESS_LIFETIME=15m
REFRESH_LIFETIME=7d
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
RESET_PASSWORD_KEY=<your_reset_password_key>
EMAIL_VERIFICATION_KEY=<your_email_verification_key>
CLIENT_URL=http://localhost:3000
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=<your_gmail_address>
EMAIL_PASS=<your_gmail_app_password>
```

#### In `client/.env.local`

```env
VITE_APP_BASE_URL=http://localhost:3000
VITE_APP_API_URL=http://localhost:5000/api
VITE_APP_API_HOST=http://localhost:5000
```

### 5. Run the Application

#### Start Backend

```bash
cd server
npm start
```

#### Start Frontend (in a new terminal)

```bash
cd client
npm start
```

---

## 👤 Author

* Fork maintained by [@arya2004](https://github.com/arya2004)
* Original Author: [Sonam Rinzin Gurung](https://github.com/SonamRinzinGurung)

---

## 📄 License

This project is open-source. Please review the original license in the source repository if you plan to distribute it.
