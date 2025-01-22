import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Filters from "./filter";

const FiltersMobile = () => {
  return (
    <Dialog>
  <DialogTrigger className="sm:hidden"><Button>Filter</Button></DialogTrigger>
  <DialogContent className="rounded-2xl max-w-xs">
    <DialogHeader>
      <DialogTitle className="text-2xl dark:text-neutral-400 text-center">Filter</DialogTitle>
      <DialogDescription className="text-left">
      <Filters/>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
  );
};

export default FiltersMobile;
