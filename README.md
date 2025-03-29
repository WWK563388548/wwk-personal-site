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

### Project Structure
```
- app/
  - about/          # About page
  - api/
    - contact/      # Contact API endpoint
  - contact/        # Contact page
  - work/           # Work page
  - layout.tsx      # Root layout
  - page.tsx        # Home page
- components/
  - Header.tsx      # Site header component
  - MobileNav.tsx   # Mobile navigation component
  - Nav.tsx         # Main navigation component
  - PageTransition.tsx
  - Photo.tsx
  - Social.tsx
  - StairTransition.tsx
  - Stairs.tsx
  - Stats.tsx
  - WorkSliderBtns.tsx
  - ui/             # UI components
    - button.tsx
    - input.tsx
    - scroll-area.tsx
    - select.tsx
    - sheet.tsx
    - tabs.tsx
    - textarea.tsx
    - tooltip.tsx
- lib/
  - data.tsx        # Site data and content
  - utils.ts        # Utility functions
- public/
  - assets/         # Static assets
    - icons/
    - photo.png
```


