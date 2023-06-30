'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import './top-nav.css';

function TopNav () {
	const pathname = usePathname()
	const links = [
		{href: "/", text: "Home"},
		{href: "/project", text: "Project"},
	];
	return (
		<nav className="tn">
            {links.map(link => { 
            	const isActive = pathname === link.href;
            	console.log({isActive, href:link.href})
            	return (
            		<Link
            			key={link.text}
            			href={link.href}
            			className={isActive ? 'tn-link active' : 'tn-link'}
        			>{link.text}</Link>
        		)
            })}
        </nav>
	);
}

export default TopNav;
