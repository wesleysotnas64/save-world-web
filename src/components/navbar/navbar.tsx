import * as Styles from "./styles";
import { Link } from "react-scroll";

export const Navbar: React.FC = () => {
  return (
    <Styles.Container>
      <div>
        <Styles.Logo
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Greenpeace_logo.svg/2560px-Greenpeace_logo.svg.png"
          alt="logo-salve-o-mundo"
        ></Styles.Logo>
      </div>
      <Styles.Sections>
        <Styles.Section>
          <Link
            className="button-section"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Home
          </Link>
        </Styles.Section>
        <Styles.Section>
          <Link
            className="button-section"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            About
          </Link>
        </Styles.Section>
        <Styles.Section>
          <Link
            className="button-section"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Content
          </Link>
        </Styles.Section>
        <Styles.Section>
          <Link
            className="special"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact us
          </Link>
        </Styles.Section>
      </Styles.Sections>
    </Styles.Container>
  );
};
