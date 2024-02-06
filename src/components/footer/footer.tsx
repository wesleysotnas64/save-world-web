import * as Styles from "./styles";

export const Footer: React.FC = () => {
    return (
        <Styles.Container>
            <Styles.ContainerLogo>
                <Styles.Logo
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Greenpeace_logo.svg/2560px-Greenpeace_logo.svg.png"
                    alt="logo-salve-o-mundo"
                />
            </Styles.ContainerLogo>
            <Styles.ContainerInfo>
                <Styles.ContainerInfoTitle>
                    <span>
                        Developed by
                    </span>
                </Styles.ContainerInfoTitle>
                <Styles.ContainerInfoDevelopers>
                    <span>
                        <a href="https://github.com/guihqz">Guilherme Queiroz </a> | <a href="https://github.com/wesleysotnas64">Wesley Santos </a>
                    </span>
                </Styles.ContainerInfoDevelopers>
            </Styles.ContainerInfo>
        </Styles.Container>
    );
};
