import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar'; // Компонент шапки (зробимо пізніше)

const Layout = () => {
  return (
    <div>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
