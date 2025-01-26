import { fillProfileInfo } from "../../../supabase/account";
import { FillProfileInfoPayload } from "../../../supabase/account/index.types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

// useMutation({
//     mutationKey: ["fill-profile-info"],
//     mutationFn: fillProfileInfo,
//     onSuccess: () => {
//       setIsEditing(false);
//       console.log("Profile updated successfully!");
//     },
//     onError: (error: any) => {
//       console.log(`Error updating profile: ${error.message}`);
//     },
//   })

export const useFillProfile = () => {
  const queryClient = useQueryClient();

  return useMutation<
    void, // Updated to reflect the `void` return type of `mutationFn`
    Error,
    { id: string; values: FillProfileInfoPayload }
  >({
    mutationKey: ["fill-profile-info"],
    mutationFn: fillProfileInfo, // Updated to use the void-returning function
    onSuccess: (_, { id }) => {
      console.log("Profile updated successfully!");
      queryClient.invalidateQueries({
        queryKey: ["profile", id],
        exact: true, // Ensures only the exact query is invalidated
      });
    },
    onError: (error: Error) => {
      console.error("Error creating user:", error);
    },
  });
};
