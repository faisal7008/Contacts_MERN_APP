# MERN Address Book Manager

This is a simple address book manager built with the MERN stack (MongoDB, Express, React, Node.js and Redux). 
Users can add, edit, and delete contacts, and filter the contact list by name or phone number.

## Getting Started

To get started with the app, clone the repo and install the necessary dependencies.

## Prerequisites

Before running the app, you'll need to have the following installed:
    Node.js
    MongoDB

## Installing

1. First, clone the repository or download the zip folder:
    git clone https://github.com/faisal7008/Contacts_MERN_APP.git

2. Next, install the dependencies for both the frontend and backend:
    cd Contact_MERN_APP
    cd backend
    npm install
    cd frontend
    npm install

3. Then, start the backend server:
    cd backend
    npm start

4. Finally, start the frontend development server:
    cd frontend
    npm start

5. The app should now be running at http://localhost:3000/.

## Usage

The app allows you to manage a list of contacts, including their name and phone number. You can perform the following actions:

Add a contact: Click the "Add" button and enter a name and phone number for the new contact. Duplicate phone numbers are not allowed.
Edit a contact: Click the "Edit" button next to a contact and update the name or phone number. Click "Update" to save the updated contact.
Delete a contact: Click the "Delete" button next to a contact to delete it.
Filter contacts: Use the search bar to filter the list of contacts by name or phone number. The filter is a phrase search, so you can search for a contact by typing part of their name or phone number.

## Built With

MongoDB - NoSQL database used to store contact data
Express - Backend web framework used to build the API
React - Frontend JavaScript library used to build the user interface
Redux - State management library used to manage app data
Node.js - JavaScript runtime used to build the backend server

Created by Mohammed Faisal Hussain