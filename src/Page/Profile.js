import { Link, Outlet } from 'react-router-dom'
export default function Profile() {
    return (
    <>
        <div>
            <h3>Profile Page</h3>
        </div>
        <ul>
            <li>
                <Link to={'editProfile'}>Edit Profile</Link>
            </li>
            <li>
                <Link to={'seeProfile'}>See Profile</Link>
            </li>
        </ul>
        <div>
            <Outlet />
        </div>
        
    </>
    );
  }