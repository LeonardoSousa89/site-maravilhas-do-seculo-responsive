import React ,{Component} from 'react'
import imagem from '../../Assets/im.jpg' 
import vida from '../../Assets/vida.jpg' 
import tumbleimagem from '../../Assets/tumbleim.jpg' 
import tumblevida from '../../Assets/tumblevida.jpg' 
import toph from '../../Assets/toph.jpg' 
import tumbletoph from '../../Assets/tumbletoph.jpg' 
import  'react-image-gallery/styles/css/image-gallery.css'
import ImageGallery from 'react-image-gallery'
import './Home.css'



  const images = [
    {
      original: vida,
      thumbnail:tumblevida,
    },
    {
      original:  imagem ,
      thumbnail:tumbleimagem,
    },
    {
      original:  toph,
      thumbnail:tumbletoph,
    },

  ];


export default class Home extends Component{

  state = {

    showPlayButton: false,
    showGalleryPlayButton: false,
    showNav: false,
    showFullscreenButton: false,
    showGalleryFullscreenButton: false,
    showVideo: {}

  }


        render(){
            return(
                <div className="conteinerHome">

                    
                    <ImageGallery 
                    items={images}
                    showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
                    showNav={this.state.showNav}
                    showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
                    />  
                   

                    <div className="subConteinerHome">
                        <div className="ladoA">
                          <div className="el1">
                            <h1 className="textel1">o</h1>
                            <h5>Saúde é um fator importante em nossa vida. Nosso bem-estar, nossa alegria dependem dela, os produtos que ofertamos 
                              tem como meta proporcionar uma qualidade de vida melhor com o 
                              suprimento mais importante em nosso dia a dia: a <ins className="h2">água.</ins>
                              <h3 className="promo">venham conhecer nossos produtos!</h3>
                            </h5>
                          </div>
                        </div>
                        <h1 className="ladoB">animação deste lado</h1>
                    </div>
                </div>
            )
        }
}