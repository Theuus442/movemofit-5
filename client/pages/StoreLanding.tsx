import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoveRight, Sparkles, Flame, Wind, StretchHorizontal } from "lucide-react";
import { track } from "@/lib/analytics";

// Product model
type Product = {
  id: string;
  name: string;
  href: string;
  img: string;
  desc: string;
  cat: "forca" | "cardio" | "mobilidade";
};

const PRODUCTS: Product[] = [
  {
    id: "hand-grip",
    name: "Hand Grip 60kg",
    href: "https://movemodefit.com.br/produtos/hand-grip-com-ajuste-fortaleca-suas-maos-de-5kg-a-60kg",
    img: "https://images.pexels.com/photos/6824816/pexels-photo-6824816.jpeg",
    desc: "Pegada forte e progressão de 5 a 60kg.",
    cat: "forca",
  },
  {
    id: "elastico",
    name: "Kit de Elásticos de Resistência",
    href: "https://movemodefit.com.br/produtos/kit-11-elasticos-extensores-treino-funcional-completo-para-academia-ou-em-casa",
    img: "https://cdn.builder.io/api/v1/image/assets%2F715d05704b64457bbdb28975ac4a94a3%2Fc2fe44f9ee714aa6bd5f4d5c838e8114?format=webp&width=800",
    desc: "Funcional completo para treinar em qualquer lugar.",
    cat: "forca",
  },
  {
    id: "corda",
    name: "Corda de Pular Crossfit Speed",
    href: "https://movemodefit.com.br/produtos/corda-de-pular-profissional-28m-velocidade-ajustavel-em-pvc-treino-de-boxe-cardio-e-fitness-para-adultos-e-criancas",
    img: "https://images.pexels.com/photos/439223/pexels-photo-439223.jpeg",
    desc: "Velocidade e precisão para condicionamento extremo.",
    cat: "cardio",
  },
  {
    id: "yoga",
    name: "Tapete de Yoga Premium",
    href: "https://movemodefit.com.br/produtos/tapete-de-guia-de-posicao-para-agachamento-80x35cm-multiuso-para-yoga-pilates-e-treinamento-de-quadril-e-perna",
    img: "https://images.pexels.com/photos/8436582/pexels-photo-8436582.jpeg",
    desc: "Estabilidade e conforto para mobilidade e foco.",
    cat: "mobilidade",
  },
  {
    id: "miofascial",
    name: "Rolo de Liberação Miofascial",
    href: "https://movemodefit.com.br/produtos/rolo-de-massagem-em-cortica-natural-pilates-yoga-e-liberacao-miofascial",
    img: "https://cdn.builder.io/api/v1/image/assets%2F715d05704b64457bbdb28975ac4a94a3%2Fb4bd09bf746a4568b96e68629d59c22f?format=webp&width=800",
    desc: "Recupere rápido e reduza tensões.",
    cat: "mobilidade",
  },
];

function Section({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`container mx-auto px-4 py-12 md:py-16 ${className}`}>{children}</section>
  );
}

export default function StoreLanding() {
  const [filter, setFilter] = useState<"all" | Product["cat"]>("all");

  useEffect(() => {
    document.title = "Movemofit | Edição Neon";
  }, []);

  const filtered = useMemo(() => (filter === "all" ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter)), [filter]);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* BACKGROUND EFFECTS */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-80 w-[36rem] -translate-x-1/2 rounded-full blur-3xl" style={{ background: "radial-gradient(60% 60% at 50% 50%, rgba(10,30,90,0.25) 0%, rgba(0,0,0,0) 70%)" }} />
        <div className="absolute top-1/3 -left-20 h-72 w-72 rounded-full blur-3xl" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(120,0,255,0.25) 0%, rgba(0,0,0,0) 70%)" }} />
        <div className="absolute bottom-0 right-0 h-96 w-[32rem] translate-y-1/3 rounded-full blur-3xl" style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(10,25,80,0.22) 0%, rgba(0,0,0,0) 70%)" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:36px_36px] opacity-[0.06]" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/70 backdrop-blur-md">
        <Section className="py-2 md:py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo-icon.svg" alt="Movemofit" className="h-6 w-auto" />
              <span className="bg-gradient-to-r from-white via-blue-800 to-indigo-900 bg-clip-text text-base md:text-lg font-extrabold lowercase text-transparent">movemofit</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="promo">Edição Neon</Badge>
              <a href="https://movemodefit.com.br/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground" onClick={() => track({ action: "nav_loja", category: "ecommerce" })}>Loja</a>
            </div>
          </div>
        </Section>
      </header>

      {/* HERO DISTINCT */}
      <Section className="pt-10 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">
              <span className="bg-gradient-to-br from-blue-700 via-white to-indigo-900 bg-clip-text text-transparent">Evolua</span>{" "}
              com um kit que trabalha por você
            </h1>
            <p className="mt-4 text-white/80">Seleção compacta e eficiente. Menos distração, mais resultado. Descubra o essencial para força, cardio e mobilidade.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button onClick={() => { document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" }); track({ action: "hero_explorar", category: "engagement" }); }}>
                Explorar produtos
              </Button>
              <a href="https://movemodefit.com.br/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-sm text-white/90 hover:bg-white/10" onClick={() => track({ action: "hero_loja", category: "ecommerce" })}>
                Comprar agora <MoveRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-1"><Sparkles className="h-4 w-4 text-blue-700"/> Qualidade testada</span>
              <span className="inline-flex items-center gap-1"><Flame className="h-4 w-4 text-rose-300"/> Pronto para treinar</span>
              <span className="inline-flex items-center gap-1"><Wind className="h-4 w-4 text-violet-300"/> Envio rápido</span>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
              <div className="grid grid-cols-2 gap-2">
                {PRODUCTS.map((p, i) => (
                  <div key={p.id} className={`group relative overflow-hidden rounded-xl ${i === 0 ? 'col-span-2 aspect-[21/9]' : 'aspect-[4/3]'} border border-white/10 bg-black/40` }>
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 flex items-center gap-2">
                      <Badge variant="promo">-10% HOJE</Badge>
                      <Badge className="bg-white/15 text-white" variant="secondary">{p.name}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FILTER TABS */}
      <Section className="pt-4">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-bold md:text-3xl">Escolha por objetivo</h2>
            <div className="flex items-center gap-2 rounded-full border border-promo/40 bg-white/5 p-1">
              <button onClick={() => setFilter("all")} className={`rounded-full px-4 py-1.5 text-sm ${filter === 'all' ? 'bg-promo text-promo-foreground' : 'text-white/90 hover:bg-promo/20'}`}>Todos</button>
              <button onClick={() => setFilter("forca")} className={`inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm ${filter === 'forca' ? 'bg-promo text-promo-foreground' : 'text-white/90 hover:bg-promo/20'}`}><Flame className="h-4 w-4"/> Força</button>
              <button onClick={() => setFilter("cardio")} className={`inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm ${filter === 'cardio' ? 'bg-promo text-promo-foreground' : 'text-white/90 hover:bg-promo/20'}`}><Wind className="h-4 w-4"/> Cardio</button>
              <button onClick={() => setFilter("mobilidade")} className={`inline-flex items-center gap-1 rounded-full px-4 py-1.5 text-sm ${filter === 'mobilidade' ? 'bg-promo text-promo-foreground' : 'text-white/90 hover:bg-promo/20'}`}><StretchHorizontal className="h-4 w-4"/> Mobilidade</button>
            </div>
          </div>
        </div>
      </Section>

      {/* PRODUCTS GRID (distinct layout) */}
      <Section id="produtos" className="pt-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, idx) => (
            <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" onClick={() => track({ action: `produto_${p.id}`, category: "ecommerce" })} className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${idx % 5 === 0 ? 'lg:col-span-2' : ''}`}>
              <div className={`${idx % 5 === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'} w-full overflow-hidden`}>
                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 backdrop-blur">
                  <span className="text-sm font-semibold text-white">{p.name}</span>
                  <span className="text-xs text-white/70">{p.desc}</span>
                  <MoveRight className="h-4 w-4 text-blue-700" />
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </Section>

      {/* VALUE STRIP */}
      <Section className="py-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(120deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_40%)] p-6 md:p-10">
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full bg-white/10 px-4 py-2">Garantia e suporte</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Pagamento seguro</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Entrega nacional</span>
            <span className="rounded-full bg-white/10 px-4 py-2">Qualidade aprovada</span>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="pb-24 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Pronto para começar agora?</h2>
        <p className="mx-auto mt-2 max-w-2xl text-white/80">Abra a loja e garanta seus essenciais com envio rápido.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="https://movemodefit.com.br/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground" onClick={() => track({ action: "cta_final_loja", category: "ecommerce" })}>Ir para a loja</a>
          <Button variant="secondary" onClick={() => { document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" }); }}>Ver produtos</Button>
        </div>
      </Section>

      {/* FLOATING DOCK */}
      <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-black/70 px-4 py-2 shadow-lg backdrop-blur">
        <div className="flex items-center gap-3">
          <span className="text-sm text-white/85">Descubra sua combinação perfeita</span>
          <Button size="sm" onClick={() => { document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" }); }}>Explorar</Button>
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 text-center text-white/70">
        <a href="https://movemodefit.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white">movemofit — Loja Oficial</a>
      </footer>
    </div>
  );
}
