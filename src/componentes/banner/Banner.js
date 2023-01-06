import './banner.css';

function Banner(){
    return( //return usando () significa return de múltiplas linhas
        <header className="banner">
            <img 
                src="/imagens/banner.png" //a primeira / se refere a pasta raíz que é a pasta public
                alt="Banner principal da página Organo"
            /> 
        </header>
    )
}
export default Banner;