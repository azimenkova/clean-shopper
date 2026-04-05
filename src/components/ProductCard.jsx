const SAFETY_STYLES = {
  clean: {
    badge: 'bg-success-light text-success-dark',
    label: 'Clean',
  },
  caution: {
    badge: 'bg-warning-light text-warning-dark',
    label: 'Caution',
  },
  avoid: {
    badge: 'bg-error-light text-error-dark',
    label: 'Avoid',
  },
};

export default function ProductCard({ name, safetyScore, category, description }) {
  const safety = SAFETY_STYLES[safetyScore];

  return (
    <article className="bg-card rounded-lg shadow-md p-lg font-primary transition-shadow duration-fast ease-default hover:shadow-lg">
      <div className="flex items-center justify-between mb-md">
        <span
          className={`inline-flex items-center gap-xs rounded-full px-sm py-xs text-caption font-medium ${safety.badge}`}
        >
          <span aria-hidden="true" className="text-caption">●</span>
          {safety.label}
        </span>
        <span className="bg-sand-200 text-neutral-600 rounded-full px-sm py-xs text-caption font-medium">
          {category}
        </span>
      </div>
      <h3 className="text-h4 text-neutral-800 mb-sm">{name}</h3>
      <p className="text-small text-neutral-600 line-clamp-2">{description}</p>
    </article>
  );
}
