import * as Styles from "./styles";

export const ContentArea: React.FC = () => {
    return (
        <Styles.Container>
            <Styles.ContentAreaBlock>
                <h2>Sobre</h2>
                <Styles.LeftRigthInfoBlock>
                    <Styles.LeftInfoBlock>
                        <img src="https://images.ctfassets.net/pdf29us7flmy/2C8EvrRqZZyciMJnECkj9M/39687489c5b65bae610645db058db177/CSR1_GettyImages-1096104342-Optimized_.jpg?w=720&q=100&fm=jpg" alt="Team" />
                    </Styles.LeftInfoBlock>
                    <Styles.RightInfoBlock>
                        <p>
                            Bem-vindo à nossa página!
                        </p>
                        
                        <p>
                        Somos apaixonados pela preservação do meio ambiente. Inspirados pelo Greenpeace, promovemos conscientização e ação para um planeta mais saudável. Aqui, compartilhamos informações e formas de se envolver.
                        </p>

                        <p>
                            Juntos, podemos fazer a diferença!
                        </p>
                    </Styles.RightInfoBlock>
                </Styles.LeftRigthInfoBlock>
            </Styles.ContentAreaBlock>

            <Styles.ContentAreaBlock>
                <h2>Nossa Fauna</h2>
                <Styles.LeftRigthInfoBlock>
                    <Styles.LeftInfoBlock>
                        <p>
                            Conheça os habitantes selvagens que compartilham nosso planeta!
                        </p>

                        <p>
                            Das majestosas baleias nadando nos oceanos aos pássaros coloridos voando pelos céus, nossa fauna é tão variada quanto impressionante. Descubra mais sobre as espécies em perigo e o que podemos fazer para protegê-las.
                        </p>
                    </Styles.LeftInfoBlock>
                    <Styles.RightInfoBlock>
                        <img src="https://img.freepik.com/fotos-gratis/tiro-de-foco-seletivo-de-um-tucano-em-pe-em-um-galho-de-arvore_181624-5935.jpg" alt="Arara vermelha." />
                    </Styles.RightInfoBlock>
                </Styles.LeftRigthInfoBlock>
            </Styles.ContentAreaBlock>

            <Styles.ContentAreaBlock>
                <h2>Nossa Flora</h2>
                <Styles.LeftRigthInfoBlock>
                    <Styles.LeftInfoBlock>
                        <img src="https://observatorio3setor.org.br/wp-content/uploads/2023/05/AdobeStock_481256183.jpeg" alt="Nossa Fauna. Árvore da Amazônia." />
                    </Styles.LeftInfoBlock>
                    <Styles.RightInfoBlock>
                        <p>
                            Dê as boas-vindas às maravilhas da nossa flora!
                        </p>

                        <p>
                            Das majestosas árvores da floresta tropical aos delicados campos de flores silvestres, nossa diversidade botânica é um tesouro a ser protegido. Explore aqui para descobrir mais sobre as espécies em risco e como podemos preservar esses preciosos ecossistemas.
                        </p>
                    </Styles.RightInfoBlock>
                </Styles.LeftRigthInfoBlock>
            </Styles.ContentAreaBlock>

            <Styles.ContentAreaBlock>
                <h2>Apoie a nossa causa</h2>
                <Styles.LeftRigthInfoBlock>
                    <Styles.LeftInfoBlock>
                        <p>
                            Junte-se a nós para proteger o meio ambiente!
                        </p>
                        <p>
                            Com sua ajuda, podemos fazer a diferença. Explore maneiras de se envolver, desde doações até a participação em campanhas e eventos. Juntos, podemos garantir um futuro mais verde e sustentável para todos.
                        </p>
                    </Styles.LeftInfoBlock>
                    <Styles.RightInfoBlock>
                        <img src="https://t7kids.files.wordpress.com/2017/05/garden.jpg" alt="Equipe de mãos dadas." />
                    </Styles.RightInfoBlock>
                </Styles.LeftRigthInfoBlock>
            </Styles.ContentAreaBlock>
        </Styles.Container>
    );
};
