# Simple User Dashboard

This is a simple user dashboard built with **Next.js**, **React Query**, and **MUI**. The dashboard fetches and displays user and post data from the **JSONPlaceholder API** using the native **`fetch`** API. It includes a table to display users and a list for the latest posts.

## Features

- Display a table of 10 users:
  - Name
  - Email
  - Company Name
- Display a list of the latest 5 posts:
  - Post Title
  - Post Body
- Performance optimization:
  - User table and posts load independently.
- Loading states are shown while fetching data.
- API errors are handled gracefully, with a user-friendly message displayed if the data fails to load.
- **Bonus**: Add a search bar to filter users by name.

## Technologies Used

- **Next.js** (SSR/CSR)
- **React Query** (for data fetching)
- **MUI** (for UI components)
- **Native `fetch` API** (for HTTP requests)

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/kerrierai/user_dashboard.git
   cd user_dashboard
   ```
