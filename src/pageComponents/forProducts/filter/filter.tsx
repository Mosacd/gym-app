import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


const Filters = () =>{
    return (
        <div className="space-y-6 bg-transparent">
          
          {/* Gender Filter */}
          <div>
            <h3 className="text-lg font-semibold">Gender</h3>
            <div className="mt-2 space-y-2">
              <label className="flex items-center space-x-2">
              <Checkbox />
                <span>Men's</span>
              </label>
              <label className="flex items-center space-x-2">
                <Checkbox/>
                <span>Women's</span>
              </label>
            </div>
          </div>
    
          {/* Size Filter */}
          <div>
            <h3 className="text-lg font-semibold">Size</h3>
            <div className="mt-2 space-y-2">
              <label className="flex items-center space-x-2">
              <Checkbox/>
                <span>Small</span>
              </label>
              <label className="flex items-center space-x-2">
              <Checkbox/>
                <span>Medium</span>
              </label>
              <label className="flex items-center space-x-2">
              <Checkbox/>
                <span>Large</span>
              </label>
            </div>
          </div>
    
          {/* Colour Filter */}
          <div>
            <h3 className="text-lg font-semibold">Colour</h3>
            <div className="mt-2 space-y-2">
              <label className="flex items-center space-x-2">
                <Checkbox/>
                <span>Black</span>
              </label>
              <label className="flex items-center space-x-2">
              <Checkbox/>
                <span>White</span>
              </label>
              <label className="flex items-center space-x-2">
              <Checkbox/>
                <span>Grey</span>
              </label>
              <label className="flex items-center space-x-2">
              <Checkbox/>
                <span>Navy</span>
              </label>
            </div>
          </div>
    
          {/* Clear All Button */}
          <div>
            <Button className="w-full rounded-md">
              Clear All
           </Button>
          </div>
        </div>
      );
    };

export default Filters;