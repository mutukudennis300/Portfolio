# Mutuku — Personal Portfolio Website

A responsive personal portfolio built with plain HTML, CSS, and JavaScript.

## Files
- `index.html` — page content and sections
- `style.css` — design, layout, and responsive styling
- `script.js` — mobile menu, reveal animations, footer year, and email-draft form

## Run locally
1. Extract the folder.
2. Open it in Visual Studio Code.
3. Open `index.html` in your browser, or use the Live Server extension in VS Code.

## Personalise before publishing
1. The portfolio currently uses the display name `Mutuku` and the professional headline `Business Management & Digital Solutions`. Update these if you prefer different wording.
2. The public contact email is `mutukudennis300@gmail.com`. Update it in `index.html` and `script.js` if it changes.
3. Add your professional photo when ready. You can replace the `.portrait-placeholder` block in `index.html` with:
   ```html
   <img class="profile-photo" src="images/profile.jpg" alt="Mutuku, Business Management professional">
   ```
   Then add this CSS:
   ```css
   .profile-photo {
     width: 100%;
     height: 100%;
     object-fit: cover;
     display: block;
   }
   ```
4. Review the project descriptions and practical experience for accuracy and add dates or organisation names if you want to share them publicly.
5. Add a LinkedIn or other professional profile link if you want to share one.

## Publish with GitHub Pages
1. Create a GitHub repository, for example `mutuku-portfolio`.
2. Upload `index.html`, `style.css`, `script.js`, and this README to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Contact form note
The form opens a new email draft in the visitor's email application. It does not send mail directly, store submissions, or provide an admin dashboard.
