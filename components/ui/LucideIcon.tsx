import React, { useEffect } from 'react';

// This component relies on the global `lucide` object from the script tag in index.html
// Using `any` to avoid TypeScript errors for the global object.
const lucide = (window as any).lucide;

interface LucideIconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, ...props }) => {
    // This effect runs after the component mounts and calls lucide's function
    // to replace the `<i>` tag with an SVG icon.
    useEffect(() => {
        if (lucide && typeof lucide.createIcons === 'function') {
            lucide.createIcons();
        }
    }, []); // Run once on mount

    // We can add a check for developer experience, but it's not essential for functionality.
    if (lucide && lucide.icons && !lucide.icons[name]) {
        console.warn(`Lucide icon "${name}" not found.`);
    }

    return (
        // The `data-lucide` attribute is what the `createIcons` function looks for.
        // Lucide's script will find this element and replace it with SVG.
        <i data-lucide={name.toLowerCase()} {...props}></i>
    );
};
