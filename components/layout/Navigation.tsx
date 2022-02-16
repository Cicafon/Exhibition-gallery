import { useRouter } from "next/router";
import classes from "./Navigation.module.css";
//import Link from "next/link"

const Navigation: React.FC = () => {
  const router = useRouter();

  const goToHomePage = () => {
    router.push("/");
  };
  return (
    <header className={classes.header}>
      <div className={classes.logo} onClick={goToHomePage}>
        Exhibitions!
      </div>
      {/* Navigation can be placed here: */}
      {/* <nav>
        <ul>
          <li>
            <Link href=""></Link>
          </li>
          <li>
            <Link href=""></Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
};

export default Navigation;
