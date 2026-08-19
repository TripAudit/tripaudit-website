# TripAudit marketing website

Vercel-ready Next.js website containing:

- TripAudit homepage
- Insights index
- Three launch articles
- TripAudit vector logo and icon
- Responsive navy and teal brand system

## Publish through GitHub and Vercel

1. Create a new empty GitHub repository, for example `tripaudit-website`.
2. Upload every file and folder from this package to the repository root.
3. In Vercel, select **Add New → Project** and import that repository.
4. Vercel will detect Next.js automatically. Keep the default build settings.
5. Select **Deploy**.
6. Test the temporary `*.vercel.app` address.
7. Later add the main domain under **Project Settings → Domains**.

## Before the public launch

The CTA links currently use `https://app.domain.com`. Replace every occurrence with the final TripAudit application URL, such as `https://app.yourdomain.com`.

Privacy Policy and Terms are intentionally not included because their facts are still under review.

## Local development (optional)

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.
