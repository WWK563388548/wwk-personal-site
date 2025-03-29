## My personal website
### Introduction
Here is my personal website! This site is built using modern front-end technologies, including:
- Next.js
- TypeScript
- Framer Motion
- Tailwind CSS
- Radix UI
- react-hook-form
- email.js
- google reCaptcha

I hope you enjoy the website and welcome any feedback or suggestions!

| PC       | Mobile   |
|----------|----------|
| <img width="1465" alt="截屏2024-07-14 0 06 45" src="https://github.com/user-attachments/assets/ec97e9b6-a42f-4cce-aa6f-3ad917c0f5f7"> | <img width="298" alt="截屏2024-07-14 0 06 19" src="https://github.com/user-attachments/assets/7fc57bc0-2147-408d-aded-c68d037306d9"> |

### Project Structure
```
.
├── app/                    # Next.js app directory
│   ├── about/              # About page
│   ├── api/                # API routes
│   │   └── contact/        # Contact form API
│   ├── contact/            # Contact page
│   ├── work/               # Work page
│   ├── favicon.ico         # Site favicon
│   ├── globals.css         # Global CSS
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # UI components
│   │   ├── button.tsx      # Button component
│   │   ├── input.tsx       # Input component
│   │   ├── scroll-area.tsx # Scroll area component
│   │   ├── select.tsx      # Select component
│   │   ├── sheet.tsx       # Sheet component
│   │   ├── tabs.tsx        # Tabs component
│   │   ├── textarea.tsx    # Textarea component
│   │   └── tooltip.tsx     # Tooltip component
│   ├── Header.tsx          # Header component
│   ├── MobileNav.tsx       # Mobile navigation
│   ├── Nav.tsx             # Navigation component
│   ├── PageTransition.tsx  # Page transition
│   ├── Photo.tsx           # Photo component
│   ├── Social.tsx          # Social links
│   ├── StairTransition.tsx # Stair transition
│   ├── Stairs.tsx          # Stairs component
│   ├── Stats.tsx           # Stats component
│   └── WorkSliderBtns.tsx  # Work slider buttons
├── lib/                    # Library functions and data
│   ├── data.tsx            # Site data
│   └── utils.ts            # Utility functions
├── public/                 # Public assets
│   └── assets/             # Asset files
│       ├── icons/          # Icons
│       └── photo.png       # Profile photo
├── components.json         # Component configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies
├── postcss.config.mjs      # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

### How to run this repo
1. Clone the project
2. Run command to install dependencies
```
npm install
# or
pnpm i
```
3. Modify the data from `/lib/data.tsx`, if you want use your own information
4. Run command to run server locally
```
npm run dev
# or
pnpm run dev
```


