'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'

import './side-nav.css';

function SideNav () {
	const pathname = usePathname()
	const links = [
		{href: "/project/first-page", text: "First Page"},
		{href: "/project/second-page", text: "Second Page"},
	];
	return (
		<nav class="sn">
            {links.map(link => { 
            	const isActive = pathname === link.href;
            	console.log({isActive, href:link.href})
            	return (
            		<Link
            			href={link.href}
            			className={isActive ? 'sn-link active' : 'sn-link'}
        			>{link.text}</Link>
        		)
            })}
        </nav>
	);
}

export default SideNav;
