import React, { useState } from 'react';
import { Mail, Phone, Eye, Download } from 'lucide-react';

const ProtectedLink = ({ encodedText, type = 'email', className = '', label }) => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [decoded, setDecoded] = useState('');

    const handleReveal = (e) => {
        // Prevent default navigation if not yet revealed
        if (!isRevealed) {
            e.preventDefault();
            const text = atob(encodedText);
            setDecoded(text);
            setIsRevealed(true);

            // Auto-trigger action after reveal
            setTimeout(() => {
                if (type === 'email') window.location.href = `mailto:${text}`;
                if (type === 'phone') window.location.href = `tel:${text}`;
                if (type === 'file') window.open(text, '_blank');
            }, 100);
        }
    };

    const getIcon = () => {
        if (type === 'email') return <Mail size={20} />;
        if (type === 'phone') return <Phone size={20} />;
        if (type === 'file') return <Download size={20} />;
        return <Mail size={20} />;
    };

    const getHref = () => {
        if (!isRevealed) return '#';
        if (type === 'email') return `mailto:${decoded}`;
        if (type === 'phone') return `tel:${decoded}`;
        if (type === 'file') return decoded;
        return '#';
    };

    return (
        <a
            href={getHref()}
            onClick={handleReveal}
            onMouseEnter={() => {
                // Pre-decode on hover for smoother UX
                if (!decoded) setDecoded(atob(encodedText));
            }}
            className={`inline-flex items-center gap-2 cursor-pointer transition-all ${className}`}
            aria-label={`View ${type}`}
            target={type === 'file' && isRevealed ? '_blank' : undefined}
            rel={type === 'file' && isRevealed ? 'noopener noreferrer' : undefined}
        >
            {getIcon()}

            <span className={isRevealed ? '' : (type === 'file' ? '' : 'blur-md select-none')}>
                {label ? label : (isRevealed ? decoded : 'Click to Reveal')}
            </span>

            {!isRevealed && <Eye size={16} className="opacity-70" />}
        </a>
    );
};

export default ProtectedLink;
