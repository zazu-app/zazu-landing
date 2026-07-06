import { ImageResponse } from "next/og";
import { i18n, isLocale } from "@/i18n/config";

export const alt = "Zazu — software para escuelas de deportes acuáticos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const raw = (await params).lang;
  const lang = isLocale(raw) ? raw : "es";
  const copy =
    lang === "es"
      ? {
          tag: "El sistema operativo de tu escuela náutica",
          sub: "Reservas · cobros · alumnos · campus, en un solo sitio",
          chip: "Para escuelas de deportes acuáticos · España",
        }
      : {
          tag: "The operating system for your water sports school",
          sub: "Bookings · payments · students · camps, in one place",
          chip: "For water sports schools · Spain",
        };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#0b2f3e",
          backgroundImage:
            "linear-gradient(135deg, #0b2f3e 0%, #0f5266 60%, #12657c 100%)",
          color: "#eafaf6",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "54px",
              height: "18px",
              borderRadius: "999px",
              backgroundColor: "#e8683d",
            }}
          />
          <div style={{ fontSize: "40px", fontWeight: 800, letterSpacing: "-1px" }}>
            Zazu
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              fontSize: "68px",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              maxWidth: "960px",
            }}
          >
            {copy.tag}
          </div>
          <div style={{ fontSize: "30px", color: "#bfe6df" }}>{copy.sub}</div>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              fontWeight: 600,
              color: "#0b2f3e",
              backgroundColor: "#e8683d",
              padding: "12px 22px",
              borderRadius: "999px",
            }}
          >
            {copy.chip}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
