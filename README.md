# Loiswealth & Emmy: Wedding Invitation Website (#AYALOIS2026)

## 1. What is in this folder
- `index.html`: the page structure (you rarely edit this)
- `styles.css`: look and colours (colours are at the very top)
- `script.js`: **the CONFIG object at the top holds ALL the wording and settings**
- `google-apps-script.gs`: collects RSVPs into a Google Sheet
- `assets/`: photos (`hero.webp`, `envelope-card.webp`, `story-1..3.webp`, `g01..g16.webp` + `-sm` thumbnails), flowers from your card (`floral-*.webp`), `music.mp3`, `og-image-2.jpg` (link preview)

## 2. Still to fill in (search `PLACEHOLDER` / the CONFIG)
1. **Web address** (`CONFIG.siteUrl` and the 4 places in `index.html`: `canonical`, `og:url`, `og:image`, `twitter:image`; each shows `https://gocportfolio.github.io/AYALOIS2026/`).
2. ~~Bank details~~: added (UBA, IRONDI LOIS U, 2081257681). Double-check before sharing.
3. **RSVP endpoint**: `CONFIG.rsvp.endpoint` (see section 4).
4. **Music**: `assets/music.mp3` is only a generated placeholder. Replace it with your own licensed MP3.
5. Tagline ("Worth The Wait") and the 6-line toast are suggestions: edit in CONFIG.
6. Contact person's phone uses 08021100027. Change in `CONFIG.faq` if Michael has his own number.
7. Event length is assumed as 4 hours (`CONFIG.date.hours`).

## 3. Editing text
Open `script.js`, change the words between the quotes in CONFIG, save, re-upload. Do not change anything below the line "APP CODE".

## 4. RSVP to Google Sheet
1. Create a new Google Sheet. 2. Extensions > Apps Script. 3. Delete the sample code, paste `google-apps-script.gs`. 4. Deploy > New deployment > type **Web app**, Execute as **Me**, Who has access **Anyone**. 5. Copy the Web app URL into `CONFIG.rsvp.endpoint`. 6. Submit a real test RSVP and check the "RSVPs" tab. After any script change use Deploy > Manage deployments > New version.

## 5. Link preview (WhatsApp / Facebook)
Description is fixed as "You are invited to celebrate our union in marriage." Image is `assets/og-image-2.jpg`. To refresh old caches: rename the image (e.g. `og-image-3.jpg`, update the 2 image lines in `index.html`) or share the link with `?v=2`, then use the Facebook Sharing Debugger and click "Scrape Again".

## 6. Photos
Replace a photo by saving a WebP with the same name. Gallery images: full size ~1100px wide `gNN.webp` and thumbnail ~520px `gNN-sm.webp`. Add more by adding rows to `CONFIG.gallery`.

## 7. Music
Compress: `ffmpeg -i song.mp3 -ac 2 -b:a 96k assets/music.mp3` (keep under ~1.5MB). Only use music you have the right to use.

## 8. Hosting (free)
- **GitHub Pages**: upload this folder's contents to a repo, Settings > Pages > Deploy from branch `main` / root. Address: `https://USERNAME.github.io/REPO/`
- **Netlify**: drag the folder onto app.netlify.com/drop.
- **Vercel**: import the repo or upload; no build settings needed.
Then update the 4 absolute URLs and `CONFIG.siteUrl`.
Custom domain: add the host's A records (apex) and a CNAME (www) at your domain registrar, then update the 4 URLs.

## 9. Personal guest links
`https://your-address/?guest=Ada%20Obi` greets "Dear Ada Obi" and pre-fills RSVP. Use `%20` for spaces and `%26` for &. Add `?nointro` to skip the envelope (testing).
