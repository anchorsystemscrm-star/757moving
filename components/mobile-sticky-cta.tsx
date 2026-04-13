import { ActionLink } from "@/components/action-link";
import { siteConfig } from "@/lib/site";

export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-[rgba(250,246,240,0.98)] px-4 py-3 backdrop-blur-xl lg:hidden">
      <div className="mx-auto grid max-w-lg grid-cols-2 gap-3">
        <ActionLink
          className="min-h-[3.25rem] text-base"
          fullWidth
          href={siteConfig.phoneHref}
          variant="secondary"
        >
          Call Now
        </ActionLink>
        <ActionLink
          className="min-h-[3.25rem] text-base"
          fullWidth
          href="/quote-request"
        >
          Get Quote
        </ActionLink>
      </div>
    </div>
  );
}
