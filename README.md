My portfolio. Adapted from the [Brittany Chiang](https://brittanychiang.com) web site.
Deployed to https://efimovnik.github.io/portfolio/ 

## 🛠 Installation & Set Up

1. Create vite project

   ```sh
   npm create vite@latest portfolio -- --template Vanilla
   ```

2. Navigate to the new vite project 

    ```sh
   cd portfolio
   ```

3. Install dependencies

   ```sh
   npm install
   ```

4. Install Tailwindcss, Postcss, autoprefixer

    ```sh
    npm install -D tailwindcss postcss autoprefixer @tailwindcss/typography
   ```

5. Create a default tailwind.config.js file in your project

    ```sh
    npx tailwindcss init -p
    ```

6. Start the development server

   ```sh
   npm run dev
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build (it will generate .js, .css files in .dist/assets/ folder)

   ```sh
   npm run build
   ```

1. Deploy the site to GitHub Pages (refer to .github/workflows)

   ```sh
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist 
   ```