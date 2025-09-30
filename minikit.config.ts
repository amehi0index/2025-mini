const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
   "accountAssociation": {
    "header": "eyJmaWQiOjkyMzE5NSwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDA2ZTZkNTI4ODgwNDBkYzY2ZGU4RURjM0NCYzRkMEUwZTA1MDc3NmMifQ",
    "payload": "eyJkb21haW4iOiIyMDI1LW1pbmkudmVyY2VsLmFwcCJ9",
    "signature": "OgFC0v2dXbhS8S2b/W8gJIQ6+xSgl/BJ7tUZLiMISYkOns0TnJtIH8y4SRFjS8ltWVjio7Jfwm/PDErE7S8v1hw="
  }
,
  miniapp: {
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

