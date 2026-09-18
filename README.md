# My Agency Ltd — Website

A 4-page static site (Home, Services, Work, Contact) built in plain HTML/CSS/JS — no build step, no framework. Colors and fonts are pulled from your logo: green `#2E7D32`, blue `#1565C0`, gold `#D4AF37`; Hanken Grotesk (headings) + DM Sans (body).

## Before you go live — replace these placeholders

They're deliberately fake so nothing wrong ships by accident. Search each file for:

| Placeholder | Where | Replace with |
|---|---|---|
| `hello@myagencyltd.com` | all 4 pages (footer) + `contact.html` | your real email |
| `+234 000 000 0000` | all 4 pages (footer) + `contact.html` | your real phone/WhatsApp |
| `https://instagram.com/` and `https://linkedin.com/` | `contact.html` | your real profile links |
| `yourdomain.com` | `CNAME` file | your actual domain (only if using a custom domain — see below) |

Tip: in most editors (or on GitHub.com's own editor) you can search-and-replace `hello@myagencyltd.com` across all files in one go.

## Publish it with GitHub Pages (free hosting)

1. **Create a repository.** On GitHub, click **New repository** → name it anything (e.g. `myagency-website`) → keep it **Public** → create it.
2. **Upload these files.** On the repo page, click **Add file → Upload files**, drag in everything from this folder (keeping the `assets` folder structure intact), and commit.
3. **Turn on Pages.** Go to **Settings → Pages**. Under "Build and deployment", set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
4. **Wait ~1 minute**, then refresh that page — GitHub shows your live URL, something like `https://yourusername.github.io/myagency-website/`.

## Using your own domain instead of the github.io link

You said you already have a domain — here's how to point it at this site:

1. Open the `CNAME` file in this folder and replace `yourdomain.com` with your real domain (e.g. `myagencyltd.com`), then re-upload/commit it.
2. In **Settings → Pages** on GitHub, enter that same domain under "Custom domain" and save.
3. At your domain registrar (wherever you bought the domain), add these DNS records:
   - For a root domain (`myagencyltd.com`): four **A** records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - For a `www` subdomain: a **CNAME** record pointing to `yourusername.github.io`.
4. DNS changes can take anywhere from a few minutes to a few hours to take effect. Once it does, tick "Enforce HTTPS" back in Settings → Pages.

## Making changes later

Every file here is plain HTML/CSS — edit directly on GitHub (click the pencil icon on any file) or locally, commit, and Pages redeploys automatically within a minute or two.
