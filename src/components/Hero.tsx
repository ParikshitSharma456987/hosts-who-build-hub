const Hero = () => {
  return (
    <section className="px-6 pt-4 md:pt-6 pb-12 md:pb-20">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6 animate-fade-up">
          Building better </h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground leading-tight mb-6 animate-fade-up">
          Airbnb hosts, together.
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up animation-delay-100">
          Hosts Who Build is a growing community of hosts who care about creating better short-term rental experiences. Join us to learn, share, and grow together.
        </p>
      </div>
    </section>
  );
};

export default Hero;
