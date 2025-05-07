import { Link, NavLink } from "react-router-dom";
import "./Layout.css";

const Header = () => {
    return(
      <div className="header">
        <div className={'menu'} style={{
          display: "flex",
          justifyContent: "space-around",
          flexGrow: 1,
          flexWrap: "wrap"
        }}>
          <Link to={'/'}> Home </Link>
          <Link to={'page1'}> Page1 </Link>
          <Link to={'users'}> Users</Link>
          {/*<Link to={'page2'}> Page2 </Link>*/}
          <Link to={'examples'}> Examples </Link>
          {/*<Link to={'examples/other'}> examples/other </Link>*/}
          {/*<NavLink to={'page3'}> Page3 </NavLink>*/}
          {/*<Link to={'page4'}> Page4 </Link>*/}
        </div>
      </div>
    )
}

export default Header;