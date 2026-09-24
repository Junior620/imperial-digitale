type Props = {
  title: string
  subtitle?: string
  image: string
}

export function PageHero({ title, subtitle, image }: Props) {
  return (
    <div className="relative flex min-h-[45svh] items-end overflow-hidden md:min-h-[50svh]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="blur-mask-overlay pointer-events-none absolute inset-0 z-[1]" />
      <div className="relative z-10 w-full px-4 pb-12 pt-28 sm:px-6 md:px-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          {subtitle ? (
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold animate-blur-fade-up">
              {subtitle}
            </p>
          ) : null}
          <h1
            className="animate-blur-fade-up text-4xl font-normal sm:text-5xl md:text-6xl"
            style={{ animationDelay: '100ms', letterSpacing: '-0.04em' }}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
