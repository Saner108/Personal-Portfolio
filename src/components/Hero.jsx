export default function Hero() {
  return (
    <section id="top" className="min-h-screen flex items-center px-6 pt-14">
      <div className="max-w-3xl mx-auto w-full grid sm:grid-cols-[1fr_auto] gap-10 sm:gap-16 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.15em] text-offwhite/40 mb-6">
            Cesar Sanchez
          </p>

          <h1
            className="font-display font-semibold leading-[1.05] tracking-tight mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.2rem)' }}
          >
            Finance.
            <br />
            Business Analytics.
            <br />
            <span className="text-offwhite/35">AI.</span>
          </h1>

          <p className="text-offwhite/60 text-lg max-w-md leading-relaxed mb-8">
            Building data-driven applications that combine finance, analytics, and AI.
          </p>

          <div className="flex gap-6">
            <a
              href="#work"
              className="text-sm font-medium border-b border-offwhite/30 pb-0.5 hover:border-offwhite transition-colors duration-150"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-offwhite/50 hover:text-offwhite transition-colors duration-150"
            >
              Get in touch →
            </a>
          </div>
        </div>

        <img
          src="/images/headshot.jpg"
          alt="Cesar Sanchez"
          className="w-32 sm:w-40 aspect-[3/4] object-cover border border-offwhite/10 justify-self-start sm:justify-self-end"
        />
      </div>
    </section>
  )
}
