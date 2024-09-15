# TextMessageSendToMobile

This project is a **React.js** and **Node.js** based application that allows sending SMS notifications to multiple users' mobile numbers using the **Twilio** API. It uses a simple form in the frontend to capture and send a message to the backend, which then sends the message to users' phone numbers via Twilio.

## Features
- **Frontend**: Built with React.js, the app provides a simple form to input and send a notification message to all users.
- **Backend**: Built with Node.js and Express.js, the backend handles the communication with Twilio for sending SMS messages to users.
- **SMS Sending**: Uses the Twilio API to send SMS to a list of users stored in the backend.
- **REST API**: The backend exposes an API endpoint to trigger the SMS sending process.

## Tech Stack
### Frontend:
- **React.js**
- **Material-UI (MUI)** for UI components
- **Axios** for making HTTP requests

### Backend:
- **Node.js**
- **Express.js**
- **Twilio API** for sending SMS
- **dotenv** for managing environment variables

## Installation Guide

### Prerequisites
- **Node.js** installed (v14+)
- **npm** or **yarn** installed
- A **Twilio** account (you'll need your Twilio account SID, Auth Token, and a Twilio phone number)
- (Optional) **Git** installed for version control

### Getting Started

#### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/TextMessageSendToMobile.git
cd TextMessageSendToMobile
