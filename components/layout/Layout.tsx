import Navigation from './Navigation';
import classes from './Layout.module.css';

const Layout:React.FC<{}> = (props) => {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
