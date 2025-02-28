import { Button } from "@/componentsShadcn/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/componentsShadcn/ui/dialog";
import Filters from "./filter";

const FiltersMobile = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full max-w-40">
        <Button className="w-full">Filter</Button>
      </DialogTrigger>
      <DialogContent className="rounded-2xl max-w-xs sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl dark:text-neutral-400 text-center">
            Filter
          </DialogTitle>
          <DialogDescription className="text-left">
            <Filters />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default FiltersMobile;
