import { Card, CardContent } from "@/components/ui/card"
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel"    
import beltImage from '../assets/10mm-lever-belt-black-black-main.webp'


const CaruselForMain: React.FC = () => {

    const products = [
        {image: beltImage, name: "DMM Lower Belt BLACK", price: "$29.99" },
        {image: beltImage,  name: "Gympreneur MM Knee sl.", price: "$34.99" },
        {image: beltImage,  name: "Gympreneur Strength Kit", price: "$89.99" },
        {image: beltImage,  name: "Wrist Wraps - 18\"", price: "$19.99" },
        {image: beltImage,  name: "Gympreneur Skull Tape", price: "$12.99" }
      ];
    
  return (
    <div className="flex flex-col gap-7 justify-center items-center mt-10 sm:mt-16 lg:mt-20 mb-10 sm:mb-16 lg:mb-20">
      <h1 className="text-xl md:text-2xl font-bold dark:text-white">Best-Selling Lifting Gear</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[70%] sm:w-[85%] lg:w-[80%] max-w-5xl"
      >
        <CarouselContent>
        {products.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="min-h-60 cursor-pointer">
                  <CardContent className="flex flex-col items-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="h-56 object-contain mb-2 border-spacing-1 border-black border-0 rounded-full"
                    />
                    <p className="text-sm font-medium text-center">{product.name}</p>
                    <p className="text-sm  font-semibold">{product.price}</p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CaruselForMain