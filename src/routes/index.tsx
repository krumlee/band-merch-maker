import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-merch.jpg";
import tshirtImg from "@/assets/prod-tshirt.jpg";
import hoodieImg from "@/assets/prod-hoodie.jpg";
import printImg from "@/assets/prod-print.jpg";
import accImg from "@/assets/prod-acc.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RIOT PRESS — Zenekari merch nyomda" },
      {
        name: "description",
        content:
          "Pólók, hoodie-k, plakátok, matricák, öngyújtók és kiegészítők zenekaroknak. Kis példányszámtól, gyors átfutással.",
      },
      { property: "og:title", content: "RIOT PRESS — Zenekari merch nyomda" },
      {
        property: "og:description",
        content:
          "Pólók, hoodie-k, plakátok, matricák, öngyújtók és kiegészítők zenekaroknak.",
      },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

const products = [
  {
    n: "01",
    title: "Pólók & Longsleeve",
    desc: "Nehéz pamut, szita- és DTG-nyomás. Egyedi szabás, címkecsere, full-print.",
    img: tshirtImg,
    tags: ["szitanyomás", "DTG", "címkecsere"],
  },
  {
    n: "02",
    title: "Hoodie & Crewneck",
    desc: "350+ g/m² minőség, hímzés vagy nyomás. Tour-pack és webshop drop.",
    img: hoodieImg,
    tags: ["hímzés", "350gsm", "drop"],
  },
  {
    n: "03",
    title: "Nyomdai anyagok",
    desc: "Koncertplakát, flyer, matrica, lemezborító, jegyek. Riso, ofszet, digitális.",
    img: printImg,
    tags: ["poszter", "matrica", "riso"],
  },
  {
    n: "04",
    title: "Kiegészítők",
    desc: "Öngyújtó, jelvény, kulcstartó, sörnyitó, törölköző, vászontáska — minden, ami fan-cucc.",
    img: accImg,
    tags: ["zippo", "pin", "tote"],
  },
];

const steps = [
  ["BRIEF", "Küldd a grafikát vagy az ötletet. Mi rárakjuk a kezünk."],
  ["MOCKUP", "48 órán belül kapsz látványtervet és árajánlatot."],
  ["GYÁRTÁS", "10–14 munkanap, kis példányszámtól (25 db) indulunk."],
  ["SZÁLLÍTÁS", "Házhoz, próbára, vagy egyenesen a koncert backstage-ébe."],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-2xl tracking-wider glitch">
            RIOT<span className="text-primary">/</span>PRESS
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase">
            <a href="#termekek" className="hover:text-primary transition">Termékek</a>
            <a href="#folyamat" className="hover:text-primary transition">Folyamat</a>
            <a href="#rolunk" className="hover:text-primary transition">Rólunk</a>
            <a href="#kapcsolat" className="hover:text-primary transition">Kapcsolat</a>
          </nav>
          <a
            href="#kapcsolat"
            className="font-mono text-xs uppercase bg-primary text-primary-foreground px-4 py-2 hover:bg-accent hover:text-accent-foreground transition"
          >
            Ajánlatkérés →
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-32 pb-20 grain">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <img src={heroImg} alt="" className="w-full h-full object-cover" width={1600} height={1200} />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="font-mono text-xs uppercase text-accent mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-accent" />
            EST. 2014 · BUDAPEST · DIY OR DIE
          </div>
          <h1 className="font-display text-[clamp(3.5rem,11vw,11rem)] leading-[0.85] uppercase">
            Merch, ami<br />
            <span className="text-primary">úgy üt</span>, mint<br />
            <span className="text-stroke">a zenétek.</span>
          </h1>
          <p className="mt-10 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground">
            Pólók, hoodie-k, plakátok, matricák, öngyújtók — minden, amit a
            közönséged hazavisz a koncert után. Kis példányszámtól, gyors
            átfutással, koszos kézzel.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#termekek"
              className="font-mono text-xs uppercase bg-foreground text-background px-6 py-4 hover:bg-primary hover:text-primary-foreground transition"
            >
              ▸ Nézd a termékeket
            </a>
            <a
              href="#kapcsolat"
              className="font-mono text-xs uppercase border border-foreground px-6 py-4 hover:bg-accent hover:text-accent-foreground hover:border-accent transition"
            >
              Kérj árajánlatot
            </a>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-border pt-8">
            {[
              ["240+", "ZENEKAR"],
              ["25 DB", "MIN. RENDELÉS"],
              ["10 NAP", "ÁTFUTÁS"],
              ["100%", "MAGYAR GYÁRTÁS"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-4xl md:text-5xl text-primary">{k}</div>
                <div className="font-mono text-[10px] uppercase text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="relative border-y border-border bg-accent text-accent-foreground py-4 overflow-hidden">
        <div className="marquee flex gap-12 whitespace-nowrap font-display text-3xl uppercase">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            [
              "Szitanyomás",
              "★",
              "Hímzés",
              "★",
              "Koncertplakát",
              "★",
              "Öngyújtó",
              "★",
              "Matricák",
              "★",
              "Hoodie",
              "★",
              "Tour merch",
              "★",
            ].map((w, j) => (
              <span key={`${i}-${j}`}>{w}</span>
            )),
          )}
        </div>
      </div>

      {/* TERMÉKEK */}
      <section id="termekek" className="py-28 mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
          <div>
            <div className="font-mono text-xs uppercase text-primary mb-3">/ 01 — Katalógus</div>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-none">
              Amit gyártunk
            </h2>
          </div>
          <p className="font-mono text-sm text-muted-foreground max-w-sm">
            Mindent egy helyen — a póló nyomásától a backstage öngyújtóig.
            Nincs minimumár-szabás, nincs ügynöki sallang.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border">
          {products.map((p) => (
            <article
              key={p.n}
              className="group relative bg-background hover:bg-surface transition-colors p-8 md:p-10"
            >
              <div className="aspect-[4/5] overflow-hidden mb-6 relative">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />
                <span className="absolute top-3 left-3 font-mono text-xs bg-background/80 backdrop-blur px-2 py-1">
                  {p.n}
                </span>
              </div>
              <h3 className="font-display text-3xl uppercase mb-2">{p.title}</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-4">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] uppercase border border-border px-2 py-1 text-muted-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOLYAMAT */}
      <section id="folyamat" className="relative py-28 border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="font-mono text-xs uppercase text-primary mb-3">/ 02 — Folyamat</div>
          <h2 className="font-display text-6xl md:text-8xl uppercase leading-none mb-16">
            Négy lépés.<br />
            <span className="text-primary">Zéró kamu.</span>
          </h2>
          <ol className="grid md:grid-cols-4 gap-px bg-border">
            {steps.map(([t, d], i) => (
              <li key={t} className="bg-surface p-8 relative">
                <div className="font-display text-7xl text-accent mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-display text-2xl uppercase mb-2">{t}</h3>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  {d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* RÓLUNK */}
      <section id="rolunk" className="py-28 mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="font-mono text-xs uppercase text-primary mb-3">/ 03 — Rólunk</div>
            <h2 className="font-display text-6xl md:text-7xl uppercase leading-none">
              Klub-pincéből<br />
              <span className="text-accent">indultunk.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 font-mono text-sm leading-relaxed text-muted-foreground">
            <p>
              2014-ben két basszusgitáros és egy szitakeret. Ma egy 12 fős
              csapat, saját nyomda, saját raktár — és még mindig minden
              megrendelést úgy kezelünk, mintha a saját zenekarunknak
              csinálnánk.
            </p>
            <p>
              Dolgoztunk hardcore zenekarokkal, indie szólókkal, fesztiválokkal
              és kiadókkal. Nem keverünk össze 50 ezer fős brand-cuccal: ezt
              tudjuk, ezt szeretjük.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              {["DIY", "FAIR ÁR", "NO BS"].map((w) => (
                <div key={w} className="font-display text-2xl text-foreground">
                  {w}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA / KAPCSOLAT */}
      <section
        id="kapcsolat"
        className="relative py-28 bg-primary text-primary-foreground grain overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-72 h-72 stripes opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12">
          <div>
            <div className="font-mono text-xs uppercase mb-4">/ 04 — Kapcsolat</div>
            <h2 className="font-display text-6xl md:text-8xl uppercase leading-[0.9]">
              Van zenekarod?<br />
              <span className="text-accent">Írj nekünk.</span>
            </h2>
            <p className="mt-8 font-mono text-sm max-w-md opacity-90">
              Küldd a brief-et, a grafikát vagy csak a hangulatot. 48 órán belül
              válaszolunk árajánlattal és mockuppal.
            </p>
          </div>
          <div className="space-y-6 font-mono">
            <a
              href="mailto:hello@riotpress.hu"
              className="block group border-y border-primary-foreground/30 py-6"
            >
              <div className="text-xs uppercase opacity-70">Email</div>
              <div className="font-display text-4xl md:text-5xl group-hover:text-accent transition">
                hello@riotpress.hu
              </div>
            </a>
            <a
              href="tel:+36301234567"
              className="block group border-b border-primary-foreground/30 py-6"
            >
              <div className="text-xs uppercase opacity-70">Telefon</div>
              <div className="font-display text-4xl md:text-5xl group-hover:text-accent transition">
                +36 30 123 4567
              </div>
            </a>
            <div className="text-xs uppercase opacity-70 pt-2">
              H–P · 10:00–18:00 · Budapest, VIII. ker.
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase text-muted-foreground">
          <div>© {new Date().getFullYear()} Riot/Press Kft. — Minden jog a zenekaroké.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Instagram</a>
            <a href="#" className="hover:text-primary">Facebook</a>
            <a href="#" className="hover:text-primary">Bandcamp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
