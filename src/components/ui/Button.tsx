import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

type ButtonBaseProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
};

type ButtonAsButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
  to?: never;
};

type ButtonAsAnchorProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  to?: never;
};

type ButtonAsLinkProps = ButtonBaseProps & LinkProps & {
  to: string;
  href?: never;
};

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps | ButtonAsLinkProps;

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
  let variantClasses = '';
  
  if (variant === 'primary') {
    variantClasses = 'btn-primary';
  } else if (variant === 'secondary') {
    variantClasses = 'btn-secondary';
  } else if (variant === 'outline') {
    variantClasses = 'btn-secondary';
  }

  const combinedClasses = `btn ${variantClasses} ${className}`;

  if ('to' in props && props.to) {
    const { to, ...linkProps } = props as ButtonAsLinkProps;
    return (
      <Link to={to} className={combinedClasses} {...linkProps}>
        {children}
      </Link>
    );
  }

  if ('href' in props && props.href) {
    const { href, ...anchorProps } = props as ButtonAsAnchorProps;
    return (
      <a href={href} className={combinedClasses} {...anchorProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...(props as ButtonAsButtonProps)}>
      {children}
    </button>
  );
}
