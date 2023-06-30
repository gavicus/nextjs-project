import SideNav from './side-nav/side-nav'
import './project.css';

export default function ProjectLayout({children}: {children: React.ReactNode}) {
	return (
		<div className="p-layout">
			<SideNav />
			<div className="p-content">
				{children}
			</div>
		</div>
	);
}