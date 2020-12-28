import React, {Component} from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default class Header extends Component{

        render(){
            return(
                <div className="conteinerHeader">

                        <div className="toggle">
                            {/** 
                             * 
                             * <p className="risco1">o</p>
                            <p className="risco2">o</p>
                            <p className="risco3">o</p>

                            */}
                            
                            <nav>
                                <ul>
                                    <Link className="link" to="/">
                                    <h3>Home</h3>
                                    </Link>
                                    <Link className="link"  to="/fale">
                                        <h3>Fale conosco</h3>
                                    </Link>
                                    <Link className="link"  to="/sobre">
                                        <h3>Sobre</h3>
                                    </Link>

                                    <a className="link" href="https://www.timol.com.br/direto_fabrica.aspx?ref=3080" target="_blank">
                                        <h3>Loja</h3>
                                    </a> 
                                </ul>
                            </nav>
                        </div>

                        <h3>Logo</h3>
                        <Link className="link" to="/">
                                <h3>Home</h3>
                        </Link>
                        <Link className="link"  to="/fale">
                            <h3>Fale conosco</h3>
                        </Link>
                        <Link className="link"  to="/sobre">
                            <h3>Sobre</h3>
                        </Link>

                        <a className="link" href="https://www.timol.com.br/direto_fabrica.aspx?ref=3080" target="_blank">
                            <h3>Loja</h3>
                        </a>
                   
                </div>
            )
        }
} 