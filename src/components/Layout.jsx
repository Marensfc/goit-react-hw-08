import AppBar from "./app-bar/AppBar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <AppBar />
      {children}
    </div>
  );
};

export default Layout;
