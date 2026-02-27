import heroImage640 from "@/assets/hero-image-640.jpg";
import heroImage960 from "@/assets/hero-image-960.jpg";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          srcSet={`${heroImage640} 640w, ${heroImage960} 960w, ${heroImage} 1920w`}
          sizes="100vw"
          alt="Arranjo de suculentas, cestas de café da manhã e lembrancinhas florais  da Maria Flores"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6 animate-fade-in-up">
        <p className="text-primary-foreground/80 font-body tracking-[0.3em] uppercase text-sm mb-4">
          Suculentas · Cestas · Lembrancinhas
        </p>

        <h1 className="font-heading text-5xl md:text-7xl font-semibold text-primary-foreground mb-4 leading-tight">
          Maria Flores
        </h1>

        <h2 className="text-primary-foreground/90 font-body text-xl md:text-2xl mb-6 font-light">
          Suculentas e Cestas de Café da Manhã em Atibaia
        </h2>

        <p className="text-primary-foreground/80 font-body text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          Produtos personalizados com entrega em Atibaia e região, criados para
          tornar cada momento especial.
        </p>
        <a
          href="#categorias"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-body font-bold tracking-wide uppercase text-sm hover:opacity-90 transition-opacity"
        >
          Conheça Nossos Produtos
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
