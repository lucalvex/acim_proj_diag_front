import Link from 'next/link';
import cn from 'classnames';

interface Props {
    isNavItem?: boolean;
    isSelected?: boolean;
    isMobile?: boolean;
    isBanner?: boolean;
    href?: string;
    onClick?: () => void;
    children: React.ReactNode;
    [rest: string]: any;
}

export default function NavLink({
    isNavItem,
    isSelected,
    isMobile,
    isBanner,
    href,
    onClick,
    children,
    ...rest
}: Props) {
    const className = cn(
        rest.className,
        'rounded-md font-semibold',
        {
            'dark:hover:text-teal-primary hover:text-teal-secundary': isNavItem,
            'text-teal-secundary dark:hover:text-teal-primary dark:text-teal-primary': isSelected,
            'text-2xl sm:text-3xl': isBanner,
        }
    );

    if (!href) {
        return (
            <span className={className} role='button' onClick={rest.onClick}>
                {children}
            </span>
        );
    }

    return (
        <Link
            href={href}
            className={className}
            onClick={() => {
                if (onClick) {
                    onClick();
                }
            }}
        >
            {children}
        </Link>
    );
}