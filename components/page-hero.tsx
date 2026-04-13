import { ActionLink } from "@/components/action-link";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta
}: PageHeroProps) {
  return (
    <section className="border-b border-slate-200/70 bg-[radial-gradient(circle_at_top_left,_rgba(44,116,216,0.12),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(196,160,112,0.14),_transparent_26%),linear-gradient(180deg,_#fffaf4_0%,_#f3f0ea_100%)] pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div className="container-shell">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2c74d8]">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <ActionLink href={primaryCta.href}>{primaryCta.label}</ActionLink>
              ) : null}
              {secondaryCta ? (
                <ActionLink href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </ActionLink>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
