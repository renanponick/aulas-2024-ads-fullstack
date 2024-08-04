import './styles.css'

export default function Video(){
    return (
        <section>
            <h2>Incorporando Imagem e Vídeo</h2>
            <div class="container">
                <div>
                    <figure>
                        <img src="https://via.placeholder.com/600x400" alt="Exemplo de imagem" />
                        <figcaption>Legenda da imagem</figcaption>
                    </figure>
                </div>
                <div>
                    <h3>Vídeo incorporado:</h3>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}