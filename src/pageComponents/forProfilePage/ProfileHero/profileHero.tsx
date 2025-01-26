import { Avatar, AvatarFallback } from "@/componentsShadcn/ui/avatar";
import { Button } from "@/componentsShadcn/ui/button";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { useSignOut } from "@/reactQuery/mutations/auth/signOut";
import { AvatarImage } from "@radix-ui/react-avatar";

const ProfileHero = () => {
  const { profileData } = useAuthContext();

  const { mutate: logout } = useSignOut();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-neutral-800 flex-col gap-4 md:flex-row md:items-end border-y-2 border-y-neutral-800 px-10 lg:px-20 pt-10 pb-5 flex sm:justify-between ">
      <div className="flex flex-col sm:flex-row items-center gap-5">
        <div className="rounded-full bg-black">
          <Avatar className="w-36 h-36 md:w-40 md:h-40">
            <AvatarImage src={profileData?.avatar_url} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="text-center sm:text-start">
          <h1 className="text-white text-xl  sm:text-3xl md:text-4xl text-nowrap font-semibold font-mono">
            {profileData?.full_name_en}
          </h1>
          <h2 className="text-gray-300">{profileData?.address}</h2>
        </div>
      </div>
      <Button
        onClick={handleLogout}
        className="max-w-60 w-full self-center sm:self-end"
      >
        Sign Out
      </Button>
    </div>
  );
};

export default ProfileHero;
