# URLs__Shortener: A Modern URL Shortener
URLs__Shortener is a simple and efficient URL shortener built using React, Vite, and Firebase. It allows users to create short links for long URLs, making them easier to share and manage.

## Features

**Shorten URLs**: Quickly generate short links for long URLs.
**Secure**: Firebase authentication ensures secure access to link management.

## Getting Started

**Clone the Repository:**
git clone https://github.com/your-username/fire-short.git
cd fire-short

**Install Dependencies:**
npm install

**Set Up Firebase:**
Create a new Firebase project on the Firebase Console.
Enable Firestore and Authentication services.
Obtain your Firebase configuration (API keys, project ID, etc.).

**Configure Firebase:**
Create a .env file in the root directory.
Add your Firebase configuration:

REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id

**Run the App Locally:**
npm run dev

Authenticate with Firebase:
firebase login

Initialize Firebase for your project:
firebase init

Deploy the app:
netlify deploy