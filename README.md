# Career Evaluate

## Project Overview
Career Evaluate is a web application designed to connect students and recruiters. Recruiters can post jobs, manage applications, and create company profiles, while students can search for jobs, apply, and manage their profiles.

## Features

### Authentication
- **Login and Signup**
  - Two user types: Student and Recruiter.
  - Separate signup and login processes for each user type.

### Recruiter Functionality
- **Company Creation**
  - Ability to create and manage a company profile.
- **Job Posting**
  - Post new job opportunities.
  - View job applications from students.
- **Application Management**
  - Accept, reject, or mark applications as pending.

### Student Functionality
- **Job Search**
  - Search for jobs by role and company name.
  - Apply filters to refine search results.
- **Job Application**
  - Apply for job postings.
- **Profile Management**
  - Update profile image, bio, and name.
- **Application Updates**
  - View the status of job applications (accepted, pending, rejected).

## Tech Stack

### Backend
- Node.js
- Express
- MongoDB
- JWT for authentication

### Frontend
- React
- Redux (for state management)
- Tailwind CSS (optional for styling)

## Getting Started

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server using Nodemon:
   ```bash
   npx nodemon
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm rundev
   ```

## How to Use

### For Recruiters
1. Sign up or log in as a recruiter.
2. Create a company profile.
3. Post job openings.
4. Manage applications by accepting, rejecting, or marking them as pending.

### For Students
1. Sign up or log in as a student.
2. Search for jobs by role or company name.
3. Apply filters to refine your job search.
4. Apply for jobs.
5. Update your profile with a profile image, bio, and name.
6. View the status of your job applications.


