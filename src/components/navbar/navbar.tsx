import * as Styles from "./styles";

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
          <Styles.Link href="#home">Home</Styles.Link>
        </Styles.Section>
        <Styles.Section>
          <Styles.Link href="#about">About</Styles.Link>
        </Styles.Section>
        <Styles.Section>
          <Styles.Link href="#content">Content</Styles.Link>
        </Styles.Section>
        <Styles.Section>
          <Styles.Link id="special" href="#contact-us">Contact us</Styles.Link>
        </Styles.Section>
      </Styles.Sections>
    </Styles.Container>
  );
};
