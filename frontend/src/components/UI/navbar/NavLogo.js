import {Link} from 'react-router-dom';


function NavLogo(props) {
	return (
		<li className="text-2xl text-white font-medium">
			<Link to ="/">{props.name}</Link>
		</li>
	);
}

export default NavLogo;
