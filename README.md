# Role-Based Access Control (RBAC) Application

This is a **React-based Role-Based Access Control (RBAC)** frontend application built using **Vite**. The application allows users to log in, sign up, create groups, manage users, and view user profiles with role-based access. It also features dashboards for user management.

---

## Features

### User Authentication and Management
- **Login and Signup**: 
  - Secure login and signup forms for user access.
  - Session handling for persistent user login.
- **User Profiles**: 
  - A detailed user profile page with personal information.
  - Edit or update user details based on permissions.

### Role-Based Access
- **Role Management**: 
  - Access to features and pages depends on user roles (e.g., `Admin`, `Group Manager`, `User`).
- **Dynamic UI Rendering**: 
  - Show or hide components, navigation links, and actions based on the logged-in user's role.

### Group Management
- **Create Groups**: 
  - Users with appropriate roles can create and manage groups.
- **Add Users to Groups**: 
  - Assign users to groups dynamically, with role validation.

### Dashboards
- **Admin Dashboard**: 
  - View and manage all users.
  - Monitor and assign roles or permissions.
- **User Dashboard**: 
  - View available groups and personal activity.

### Responsive Design
- Fully responsive UI, ensuring a seamless experience on desktop, tablet, and mobile devices.

---

## Tech Stack

- **Frontend Framework**: React + Vite
- **State Management**: Context API / Redux
- **Styling**: Tailwind CSS / CSS Modules
- **Routing**: React Router for page navigation

---

## Installation and Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dsmundhe/Role-Based-Access-Control-Application.git
   cd Role-Based-Access-Control-Application
