import styles from "./Navbar.module.css";
import { Link } from 'react-router-dom'

// const contactadd = navAddress

function NavbarItem(props)
{
	const finalNavAddress = `${props.navAddress}`;
	return (
		<li className={styles.nav_links}>
			<Link to ={finalNavAddress} className={styles.nav_link} >
				{props.name} 
			</Link>
		</li>
	);
}

export default NavbarItem;
