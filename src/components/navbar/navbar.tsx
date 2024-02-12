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
            to="sobre"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Sobre
          </Link>
        </Styles.Section>
        <Styles.Section>
          <Link
            className="button-section"
            to="fauna"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Fauna
          </Link>
        </Styles.Section>
        <Styles.Section>
          <Link
            className="button-section"
            to="flora"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Flora
          </Link>
        </Styles.Section>
        <Styles.Section>
          <Link
            className="button-section"
            to="apoie"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            Apoie a nossa causa
          </Link>
        </Styles.Section>
      </Styles.Sections>
    </Styles.Container>
  );
};
