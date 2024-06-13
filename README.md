# React Performance

Writing code in the most performant manner possible.

- Enhance application efficiency with optimized component hierarchy.
- Utilize built-in React tools for component memorization.
- Concurrent Rendering and Concurrent Features in React 18 for improving performance.

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Performance tips you will come across in this project

1. Use arrow function instead of javascript function for useState initialized.

   ### Example:

   ```javascript
   - [x] Do not
   const [state, setState] = useState(getFirstNumber());

   - [] Do
   const [state, setState] = useState(() => getFirstNumber());
   ```

   Reason: Arrow function is lazy evaluated, so it will only be evaluated once when the component is mounted but the javascript function will be evaluated every time the component is rendered.
