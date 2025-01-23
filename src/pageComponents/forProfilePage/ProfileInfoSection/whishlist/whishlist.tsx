import productImg from "@/assets/Hoodie.webp"
import { Card, CardContent } from "@/components/ui/card"

const products = [
    {
        id:1,
        image:productImg,
        name:"FuckassHoodie"
    },
    {
        id:1,
        image:productImg,
        name:"FuckassHoodie"
    },
    {
        id:1,
        image:productImg,
        name:"FuckassHoodie"
    }
]

const Whishlist = () =>{

    return(

        <Card className="border-4 dark:border-neutral-800">
     
          <CardContent className="p-8">
          <div className="flex gap-4 flex-wrap justify-center">
       {products.map((product) =>{
        return (<div
        key={product.id}
        className="flex-1 max-w-60  cursor-pointer"
      >
        <div className="border-2 bg-white rounded-lg  hover:shadow-md hover:bg-gray-100 dark:hover:bg-neutral-900 transiton-shadow duration-200  dark:border-neutral-800 dark:bg-neutral-950 dark:text-white">
          <div className="w-full p-4 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="px-4 pb-4 flex-1 flex justify-center">
            <h3 className="text-base font-medium truncate">
              {product.name}
            </h3>
          </div>
        </div>
      </div>)
       } )}
        </div>
          </CardContent>
        </Card>
       
        
        
    )
}

export default Whishlist;