import Head from 'next/head';
import Menu from '../components/Menu';

function Home() {
    return (
        <div>
          <Head>
            <meta charSet='utf-8' />
            <meta name='robots' content='index, follow' />
            <meta name='description' content='Site para compartilhar arquivos' />
            <meta name='author' content='Ygor Muller' />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Upload - Sobre</title>
          </Head>
          <Menu />
          Conteudo da pag Sobre
        </div>
      )
  }
  
  export default Home;