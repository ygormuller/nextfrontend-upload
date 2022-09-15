import { useState } from 'react';
import Head from 'next/head';
import Menu from '../components/Menu';

function Contact() {

    const [dataForm, setDataForm] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    });

    const [response, setResponse] = useState({
        type: '',
        mensagem: ''
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value });

    const sendContact = async e => {
        e.preventDefault();
        console.log(dataForm.email);

        try {
            const res = await fetch('http://localhost:8000/add-msg-contact', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' }
            });

            const responseEnv = await res.json();

            if (responseEnv.erro) {
                setResponse({
                    type: 'error',
                    mensagem: responseEnv.mensagem
                });
            } else {
                setResponse({
                    type: 'success',
                    mensagem: responseEnv.mensagem
                });

                setDataForm({
                    name: '',
                    email: '',
                    subject: '',
                    content: ''
                });
            }
        } catch (err) {
            setResponse({
                type: 'error',
                mensagem: "Erro: Tente mais tarde!"
            });
        }
    }

    return (
        <div>
          <Head>
            <meta charSet='utf-8' />
            <meta name='robots' content='index, follow' />
            <meta name='description' content='Site para compartilhar arquivos' />
            <meta name='author' content='Ygor Muller' />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>Upload - Contato</title>
          </Head>
          <Menu />
          <br></br><br></br><br></br><br></br><br></br>
          <form onSubmit={sendContact}>
            <input type="text" name="name" placeholder="Digite o nome" onChange={onChangeInput} value={dataForm.name} /><br/><br/>
            <input type="email" name="email" placeholder="Digite seu melhor e-mail" onChange={onChangeInput} value={dataForm.email}/><br/><br/>
            <input type="text" name="subject" placeholder="Digite o assunto da mensagem" onChange={onChangeInput} value={dataForm.subject}/><br/><br/>
            <input type="text" name="content" placeholder="Digite o nome" onChange={onChangeInput} value={dataForm.content}/><br/><br/>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )
  }
  
  export default Contact;