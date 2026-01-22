import React, { useEffect } from 'react';
// @ts-ignore - lucide is globally available from script
const { createIcons, ...icons } = lucide;

interface LucideIconProps extends React.HTMLAttributes<HTMLDivElement> {
  // FIX: Explicitly type `name` as `string`. The inferred `keyof typeof icons` was too broad (`string | number | symbol`)
  // because the global `lucide` object is untyped, causing errors on string operations and in template literals.
  name: string;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, ...props }) => {
    const Icon = icons[name];
    
    useEffect(() => {
        createIcons();
    }, []);

    if (!Icon) {
        console.error(`Icon "${name}" not found`);
        return null;
    }

    // Using dangerouslySetInnerHTML because lucide's createIcons works by replacing `<i>` tags
    return (
        <i data-lucide={name.toLowerCase()} {...props}></i>
    );
};
