import { ImageContainer, ProductContainer, ProductDetails } from "@/src/styles/pages/product"
import { useRouter } from "next/router"


export default function Product(){
    const { query } = useRouter()
    return(
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nihil optio pariatur esse? Eligendi sed ad aspernatur quibusdam corporis, alias dolore, quis placeat perspiciatis harum sequi? Recusandae perspiciatis quidem repellat!</p>
                <button>Comprar agora </button>
            </ProductDetails>
        </ProductContainer>
    )
}