import React from 'react';
import { Link } from 'react-router-dom';
import imageview from '../../Static/Images/undraw_teacher_35j2.svg';

class Login extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    onSubmit = () => {
        
    }

    public render() {
        return (
            <div className="divided-view">
                <div className="form-view padder">

                    <div className="text-container">
                        <h2>Entre com sua conta</h2>
                        <h4>E conheça os projetos da nossa comunidade.</h4>
                    </div>

                    <form className="form-group">

                        <div className="input-group">
                            <label>Email ou usuário</label>
                            <input className="input" type="text" placeholder="email ou usuário" autoFocus />
                        </div>

                        <div className="input-group">
                            <label>Senha</label>
                            <input className="input" type="password" placeholder="sua senha" />
                        </div>
                        <button type="submit" className="btn btn-block btn-primary">Entrar</button>

                    </form>

                    <div className="text-container">
                        <span>Ainda não possui uma conta?</span>
                        <Link to="/cadastro" className="btn">Cadastre-se aqui</Link>
                    </div>
                </div>

                <div className="view login-imageview">
                    <img src={imageview} className="image-fluid" />
                </div>
            </div>
        );
    }
}

export default Login;
