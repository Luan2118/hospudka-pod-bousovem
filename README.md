# Hospůdka pod Boušovem

A responsive website for **Hospůdka pod Boušovem**, a local Czech pub. Built as a real-client project to help visitors explore the food and drinks menu, discover upcoming events, view photos, and find practical information about the pub.

## Features

- **Food and drinks menu** — switch between menu types; categories and items are loaded from Sanity CMS.
- **Events section** — displays an event managed through Sanity CMS, with a Facebook link when no event is available.
- **Content loading and error states** — feedback while menu and event data are being fetched.
- **Photo gallery** — responsive image layout with a full-screen dialog and previous/next navigation.
- **Our Story page** — background and history of the pub.
- **Contact information** — opening hours, phone, email, Facebook, and embedded Google Maps.
- **Responsive layout and animations** — mobile-friendly navigation, hover effects, and scroll-triggered animations.

## Tech Stack

- **React 19** and **TypeScript**
- **Vite 8**
- **Tailwind CSS 4**
- **React Router 8**
- **Motion** (`motion/react`)
- **Sanity CMS** (`@sanity/client`)

## Getting Started

### Prerequisites

- Node.js and npm compatible with the project's dependencies
- Access to the configured Sanity dataset to display live menu and event content

### Run locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open the local URL shown by Vite in your terminal.

### Other commands

```bash
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Content Management

The website uses **Sanity CMS** to manage dynamic content. Menu categories, menu items, and events are stored in Sanity and fetched through its API.

The restaurant owner can independently manage and update the menu, events, contact information, and opening hours through Sanity Studio without modifying the source code or requiring technical knowledge.

The Sanity client is configured in `src/sanity/sanityClient.ts`, using the `production` dataset. Sanity Studio is maintained in a separate repository.

## Project Structure

```text
src/
├── assets/                 # Images and icons
├── components/             # Navigation, layout, contact and footer
├── pages/
│   ├── homepage/           # Hero, menu and event sections
│   ├── NasPribeh/          # Our Story page
│   └── galerie/            # Photo gallery and dialog
├── sanity/                 # Sanity API client
├── App.tsx                 # App routes
└── main.tsx                # React entry point
```

## Routes

| Route | Page |
| --- | --- |
| `/` | Home, menu and events |
| `/nas-pribeh` | Our Story |
| `/galerie` | Gallery |

## Live Website

*Link will be added after deployment.*

## Screenshots

*Screenshots will be added after the final visual review.*

