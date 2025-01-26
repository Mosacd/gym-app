import { supabase } from "../supabase";

 export const getProductReviews = async (productId: string | undefined):Promise<Reviews[]> => {
    if(productId === undefined){ throw new Error("User ID is required to fetch orders.")}

        const { data, error } = await supabase
          .from('reviews')
          .select('*')
          .eq('product_id', Number(productId))
          .order('like', { ascending: false });
      
        if (error) {
          console.error('Error fetching orders:', error.message);
            throw new Error(error.message);
        }
      
        return data as Reviews[] || [];
      };


      export const writeReview = async ({
        userId,
        productId,
        comment,
      }: {
        userId: string | undefined;
        productId: string | undefined;
        comment: string | undefined;
      }): Promise<void> => {
        // Validate input
        console.log("userId: ",userId)
        console.log("productId: ",productId)
        console.log("comment: ",comment)

        const { error } = await supabase.from("reviews").insert([
          {
            user_id: userId,
            product_id: Number(productId),
            comment: comment,
          },
        ]);
      
        // Handle any errors
        if (error) {
          console.error("Error writing review:", error.message);
          throw new Error("Failed to write the review. Please try again later.");
        }
      };

      export const getUserReviews = async (id: string | undefined):Promise<Reviews[]> => {
        if(id === undefined){ throw new Error("User ID is required to fetch orders.")}
        console.log("id: ",id)
            const { data, error } = await supabase
              .from('reviews')
              .select('*')
              .eq('user_id', id)
             
          
            if (error) {
              console.error('Error fetching orders:', error.message);
                throw new Error(error.message);
            }
          
            return data as Reviews[] || [];
          };

  export type Reviews = {
    comment: string | null;
    created_at: string;
    dislike: number | null;
    id: number;
    like: number | null;
    product_id: number | null;
    user_id: string | null;
   }