import { Button } from "@/componentsShadcn/ui/button";
import { Textarea } from "@/componentsShadcn/ui/textarea";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { useWriteReview } from "@/reactQuery/mutations/reviews";
import { useGetProductReviews } from "@/reactQuery/query/reviews";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

const VirtualizedReviewList: React.FC = () => {
  const { user } = useAuthContext();
  const { mutate: writeReview } = useWriteReview();
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const reviewHeights = useRef<Map<number, number>>(new Map());
  const { data: reviews = [], refetch } = useGetProductReviews({ productId: id });

  const handleSubmit = () => {
    if (message.trim() === "") return;
    if (!user) return;

    writeReview(
      { userId: user.id, comment: message, productId: id },
      {
        onSuccess: () => {
          setMessage("");
          refetch();
        },
        onError: (error) => console.error("Error submitting review:", error),
      }
    );
  };

  const virtualizer = useVirtualizer({
    count: reviews.length,
    getScrollElement: () => containerRef.current,
    estimateSize: (index) => reviewHeights.current.get(index) || 200,
    overscan: 5,
  });

  const formatTimestamp = (isoString: string) =>
    new Date(isoString).toLocaleString();

  return (
    <div className="max-w-screen-lg w-full">
      <div
        ref={containerRef}
        className="h-[475px] block-shadow dark:border-neutral-800 border-2 max-w-screen-lg w-full overflow-auto rounded-lg scrollbar-hide"
      >
        <ul style={{ height: virtualizer.getTotalSize(), position: "relative" }}>
          {virtualizer.getVirtualItems().map((row) => (
            <li
              key={reviews[row.index].id}
              className="p-4 border-b border-b-black dark:border-b-white bg-white dark:bg-black dark:text-white"
              style={{
                position: "absolute",
                top: `${row.start}px`,
                width: "100%",
                boxSizing: "border-box",
              }}
              ref={(el) => {
                if (el) {
                  const height = el.getBoundingClientRect().height;
                  if (height !== reviewHeights.current.get(row.index)) {
                    reviewHeights.current.set(row.index, height);
                    virtualizer.measure();
                  }
                }
              }}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{reviews[row.index].user_id}</span>
                  <span className="text-sm text-gray-500">
                    {formatTimestamp(reviews[row.index].created_at)}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {reviews[row.index].comment}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex gap-2">
                    <Button>
                      <svg className="fill-white" viewBox="0 0 24 24">
                        <path d="M20.2694 16.265L20.9749 12.1852C21.1511 11.1662 20.3675 10.2342 19.3345 10.2342H14.1534C13.6399 10.2342 13.2489 9.77328 13.332 9.26598L13.9947 5.22142C14.1024 4.56435 14.0716 3.892 13.9044 3.24752C13.7659 2.71364 13.354 2.28495 12.8123 2.11093L12.6673 2.06435C12.3399 1.95918 11.9826 1.98365 11.6739 2.13239C11.3342 2.29611 11.0856 2.59473 10.9935 2.94989L10.5178 4.78374C10.3664 5.36723 10.146 5.93045 9.8617 6.46262C9.44634 7.24017 8.80416 7.86246 8.13663 8.43769L6.69789 9.67749C6.29223 10.0271 6.07919 10.5506 6.12535 11.0844L6.93752 20.4771C7.01201 21.3386 7.73231 22 8.59609 22H13.2447C16.726 22 19.697 19.5744 20.2694 16.265Z" />
                        <path
                          opacity="0.5"
                          d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z"
                        />
                      </svg>
                      {reviews[row.index].like}
                    </Button>
                    <Button variant="secondary">
                      <svg className="fill-purple-900" viewBox="0 0 24 24">
                        <path d="M20.2694 8.48505L20.9749 12.5648C21.1511 13.5838 20.3675 14.5158 19.3345 14.5158H14.1534C13.6399 14.5158 13.2489 14.9767 13.332 15.484L13.9947 19.5286C14.1024 20.1857 14.0716 20.858 13.9044 21.5025C13.7659 22.0364 13.354 22.465 12.8123 22.6391L12.6673 22.6856C12.3399 22.7908 11.9826 22.7663 11.6739 22.6176C11.3342 22.4539 11.0856 22.1553 10.9935 21.8001L10.5178 19.9663C10.3664 19.3828 10.146 18.8195 9.8617 18.2874C9.44634 17.5098 8.80416 16.8875 8.13663 16.3123L6.69789 15.0725C6.29223 14.7229 6.07919 14.1994 6.12535 13.6656L6.93752 4.27293C7.01201 3.41139 7.73231 2.75 8.59609 2.75H13.2447C16.726 2.75 19.697 5.17561 20.2694 8.48505Z" />
                        <path
                          opacity="0.5"
                          d="M2.96767 15.2651C3.36893 15.2824 3.71261 14.9806 3.74721 14.5804L4.71881 3.34389C4.78122 2.6221 4.21268 2 3.48671 2C2.80289 2 2.25 2.55474 2.25 3.23726V14.5158C2.25 14.9174 2.5664 15.2478 2.96767 15.2651Z"
                        />
                      </svg>
                      {reviews[row.index].dislike}
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 text-black dark:text-white h-40">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your review here..."
          className="h-40"
        />
        <Button className="mt-2 w-full p-5 mb-5" onClick={handleSubmit}>
          Submit Review
        </Button>
      </div>
    </div>
  );
};

export default VirtualizedReviewList;