interface SectionTitleProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionTitle({ title, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-10 lg:mb-12">
      <h2
        className="text-2xl lg:text-[2.5rem] font-bold leading-tight tracking-tight"
        style={{ color: light ? '#fff' : 'var(--color-text-primary)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-base lg:text-lg max-w-xl mx-auto"
          style={{ color: light ? 'rgba(255,255,255,0.85)' : 'var(--color-text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
