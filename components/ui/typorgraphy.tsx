import { cn } from "@/lib/utils";

interface TypographyProps {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  id?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  [x: string]: any;
}

const typographyVariants = {
  h1: 'text-4xl font-bold text-default-900',
  h2: 'text-3xl font-semibold text-default-800',
  h3: 'text-2xl font-medium text-default-700',
  h4: 'text-xl font-medium text-default-700',
  h5: 'text-lg font-medium text-default-700',
  h6: 'text-base font-medium text-default-700',
  p: 'text-sm text-default-700',
  span: 'text-sm text-default-500',
  caption: 'text-xs text-default-400',
  label: 'text-base font-medium text-default-600',
};

const Typography: React.FC<TypographyProps> = ({
  as: Tag = 'p',
  className,
  children,
  id,
  style,
  onClick,
  ...rest
}) => {
  const variantClass = typographyVariants[Tag as keyof typeof typographyVariants] || '';

  return (
    <Tag
      id={id}
      style={style}
      className={cn(variantClass, className)}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Typography;
