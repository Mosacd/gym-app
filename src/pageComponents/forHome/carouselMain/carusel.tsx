import { Card, CardContent } from "@/componentsShadcn/ui/card"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/componentsShadcn/ui/carousel"    
import beltImage from '@/assets/10mm-lever-belt-black-black-main.webp'
import {
  wrapper,
  heading,
  carousel,
  carouselItem,
  card,
  cardContent,
  image,
  productName,
  productPrice,
} from "./carousel.styles";

const CaruselForMain: React.FC = () => {

    const products = [
        {image: beltImage, name: "DMM Lower Belt BLACK", price: "$29.99" },
        {image: beltImage,  name: "Gympreneur MM Knee sl.", price: "$34.99" },
        {image: beltImage,  name: "Gympreneur Strength Kit", price: "$89.99" },
        {image: beltImage,  name: "Wrist Wraps - 18\"", price: "$19.99" },
        {image: beltImage,  name: "Gympreneur Skull Tape", price: "$12.99" }
      ];
    
      return (
        <div className={wrapper()}>
          <h1 className={heading()}>Best-Selling Lifting Gear</h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className={carousel()}
          >
            <CarouselContent>
              {products.map((product, index) => (
                <CarouselItem key={index} className={carouselItem()}>
                  <div className="p-1">
                    <Card className={card()}>
                      <CardContent className={cardContent()}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className={`${image()} border border-gray-300`}
                        />
                        <p className={productName()}>{product.name}</p>
                        <p className={productPrice()}>{product.price}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      );
}

export default CaruselForMain