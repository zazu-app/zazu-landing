// Base URL del sitio. Configúrala en producción con NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://zazu.com.es"
).replace(/\/$/, "");

export const SITE_NAME = "Zazu";
