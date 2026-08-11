import type { ServiceCategory } from "@/lib/content";

const paths: Record<ServiceCategory, string> = {
  Gestionados:
    "M12 2 19 5.5V11c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5V5.5L12 2Z M9 12l2 2 4-4.5",
  Consultoría:
    "M12 3v18M6 21h12M4 7l8-3 8 3M2 7l3 6a3 3 0 0 0 6 0L8 7M22 7l-3 6a3 3 0 0 1-6 0l3-6",
  Soluciones:
    "M12 2 21 7v6c0 4.5-3.6 8.2-9 9-5.4-.8-9-4.5-9-9V7l9-5Z",
  Capacitación:
    "M2 8l10-4.5L22 8l-10 4.5L2 8Z M6 10.5v4.5c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5",
};

export default function CategoryIcon({ category }: { category: ServiceCategory }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[category]} />
    </svg>
  );
}
