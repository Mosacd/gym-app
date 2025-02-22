// import { Button } from "@/componentsShadcn/ui/button";
// import { Textarea } from "@/componentsShadcn/ui/textarea";
import { useAuthContext } from "@/context/auth/hooks/useAuthContext";
import { useWriteReview } from "@/reactQuery/mutations/reviews";
import { useGetProductReviews } from "@/reactQuery/query/reviews";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import emptyReviewsSVG from "@/assets/undraw_add-notes_9xls.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/componentsShadcn/ui/dialog";
import { Button } from "@/componentsShadcn/ui/button";
import { Textarea } from "@/componentsShadcn/ui/textarea";
import { toast } from "sonner";

const VirtualizedReviewList: React.FC = () => {
  const { user } = useAuthContext();
  const { mutate: writeReview } = useWriteReview();
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const reviewHeights = useRef<Map<number, number>>(new Map());
  const { data: reviews = [], refetch } = useGetProductReviews({
    productId: id,
  });

  const handleSubmit = () => {
    if (message.trim() === "") return;
    if (!user) return;
    toast("Review Has Been Added");
    writeReview(
      { userId: user.id, comment: message, productId: id },
      {
        onSuccess: () => {
          setMessage("");
          refetch();
        },
        onError: (error) => console.error("Error submitting review:", error),
      },
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
        className={`h-[300px] p-5 pb-20 px-10 block-shadow   max-w-screen-lg w-full overflow-auto rounded-lg scrollbar-hide`}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {reviews.length > 0 ? (
          <ul
            style={{ height: virtualizer.getTotalSize(), position: "relative" }}
          >
            {virtualizer.getVirtualItems().map((row) => (
              <Dialog>
                <DialogTrigger>
                  <li
                    key={reviews[row.index].id}
                    className="p-4 cursor-pointer hover:border-black hover:scale-105 transition-all duration-200 border-2 rounded-md bg-white dark:text-white dark:bg-black dark:border-neutral-800 dark:hover:border-white"
                    style={{
                      position: "absolute",
                      top: `${row.start + row.index * 10}px`,
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
                        <div className="flex items-center gap-2">
                          <img
                            src={reviews[
                              row.index
                            ].profiles.avatar_url?.toString()}
                            alt=""
                            className="w-10 h-10 rounded-md"
                          />
                          <span className="font-semibold">
                            {reviews[row.index].profiles.username}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 dark:text-white">
                          <h1 className="font-semibold">Product Rating:</h1>
                          <h1 className="text-lg font-semibold">5.0</h1>
                          <svg
                            className="h-5 w-5 fill-yellow-500"
                            viewBox="0 0 24 24"
                            fill=""
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              {" "}
                              <path
                                d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838"
                                stroke="#1C274C"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              ></path>{" "}
                            </g>
                          </svg>
                        </div>
                        <div>
                          <span className="text-sm text-black font-semibold dark:text-white">
                            50 people found this review helpful
                          </span>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">
                            {formatTimestamp(reviews[row.index].created_at)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </li>
                </DialogTrigger>
                <DialogContent className="rounded-2xl max-w-screen-lg border-2 border-purple-900 dark:border-purple-900">
                  <DialogHeader>
                    <DialogTitle className="text-3xl dark:text-neutral-400 text-center">
                      <div>
                        <div className="flex justify-center items-center gap-2">
                          <img
                            src={reviews[
                              row.index
                            ].profiles.avatar_url?.toString()}
                            alt=""
                            className="w-10 h-10 rounded-md"
                          />
                          <span>
                            {reviews[row.index].profiles.username}'s Review
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {formatTimestamp(reviews[row.index].created_at)}
                        </span>
                      </div>
                    </DialogTitle>
                    <DialogDescription className="w-full">
                      <div className="w-full text-lg text-center mt-10 text-black dark:text-gray-400">
                        <span>
                          {reviews[row.index].comment} The [Product Name]
                          exceeded my expectations with its sleek design and
                          reliable performance. It's user-friendly, durable, and
                          offers great value for the price. The battery life is
                          impressive, and the features are well thought out,
                          making it a great choice for both beginners and
                          experienced users. However, it could benefit from a
                          slightly faster response time. Overall, a solid
                          purchase!
                        </span>
                        <div className="flex justify-between items-center mt-10">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-1 dark:text-white">
                              <h1 className="font-semibold">Product Rating:</h1>
                              <h1 className="text-lg font-semibold">5.0</h1>
                              <svg
                                className="h-5 w-5 fill-yellow-500"
                                viewBox="0 0 24 24"
                                fill=""
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                  id="SVGRepo_tracerCarrier"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                  {" "}
                                  <path
                                    d="M6.03954 7.77203C3.57986 8.32856 2.35002 8.60682 2.05742 9.54773C1.76482 10.4886 2.60325 11.4691 4.2801 13.4299L4.71392 13.9372C5.19043 14.4944 5.42868 14.773 5.53586 15.1177C5.64305 15.4624 5.60703 15.8341 5.53498 16.5776L5.4694 17.2544C5.21588 19.8706 5.08912 21.1787 5.85515 21.7602C6.62118 22.3417 7.77268 21.8115 10.0757 20.7512L10.6715 20.4768C11.3259 20.1755 11.6531 20.0248 12 20.0248C12.3469 20.0248 12.6741 20.1755 13.3285 20.4768L13.9243 20.7512C16.2273 21.8115 17.3788 22.3417 18.1449 21.7602C18.9109 21.1787 18.7841 19.8706 18.5306 17.2544M19.7199 13.4299C21.3968 11.4691 22.2352 10.4886 21.9426 9.54773C21.65 8.60682 20.4201 8.32856 17.9605 7.77203L17.3241 7.62805C16.6251 7.4699 16.2757 7.39083 15.9951 7.17781C15.7144 6.96479 15.5345 6.64193 15.1745 5.99623L14.8468 5.40837C13.5802 3.13612 12.9469 2 12 2C11.0531 2 10.4198 3.13613 9.15316 5.40838"
                                    stroke="#1C274C"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                  ></path>{" "}
                                </g>
                              </svg>
                            </div>
                            <div className="text-base font-semibold text-gray-600">
                              {reviews[row.index].like}50 people found this
                              review helpful
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <span className="text-base font-semibold text-gray-600">
                              did you find this helpful?
                            </span>
                            <div className="flex gap-5">
                              <Button className="flex items-center">
                                <span>Yes</span>
                                <svg
                                  className="fill-white"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    id="SVGRepo_bgCarrier"
                                    stroke-width="0"
                                  ></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                      d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
                                      fill=""
                                    ></path>{" "}
                                  </g>
                                </svg>
                                {/* <svg className="fill-white" viewBox="0 0 24 24">
                          <path d="M20.2694 16.265L20.9749 12.1852C21.1511 11.1662 20.3675 10.2342 19.3345 10.2342H14.1534C13.6399 10.2342 13.2489 9.77328 13.332 9.26598L13.9947 5.22142C14.1024 4.56435 14.0716 3.892 13.9044 3.24752C13.7659 2.71364 13.354 2.28495 12.8123 2.11093L12.6673 2.06435C12.3399 1.95918 11.9826 1.98365 11.6739 2.13239C11.3342 2.29611 11.0856 2.59473 10.9935 2.94989L10.5178 4.78374C10.3664 5.36723 10.146 5.93045 9.8617 6.46262C9.44634 7.24017 8.80416 7.86246 8.13663 8.43769L6.69789 9.67749C6.29223 10.0271 6.07919 10.5506 6.12535 11.0844L6.93752 20.4771C7.01201 21.3386 7.73231 22 8.59609 22H13.2447C16.726 22 19.697 19.5744 20.2694 16.265Z" />
                          <path
                            opacity="0.5"
                            d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z"
                          />
                        </svg> */}
                              </Button>
                              <Button
                                className="flex items-center"
                                variant={"secondary"}
                              >
                                <span>No</span>
                                <svg
                                  className="fill-purple-900"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    id="SVGRepo_bgCarrier"
                                    stroke-width="0"
                                  ></g>
                                  <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  ></g>
                                  <g id="SVGRepo_iconCarrier">
                                    {" "}
                                    <path
                                      d="M8 15L1.24264 8.24264C0.44699 7.44699 0 6.36786 0 5.24264V5.05234C0 2.8143 1.8143 1 4.05234 1C5.14512 1 6.1853 1.44095 6.94309 2.2124L5.85583 6.2701L7.7832 8.19746L7.10553 9.55279L8.89438 10.4472L10.2167 7.80255L8.14408 5.72991L9.74447 1.65122C10.3932 1.23104 11.1567 1 11.9477 1C14.1857 1 16 2.8143 16 5.05234V5.24264C16 6.36786 15.553 7.44699 14.7574 8.24264L8 15Z"
                                      fill=""
                                    ></path>{" "}
                                  </g>
                                </svg>
                                {/* <svg className="fill-purple-900" viewBox="0 0 24 24">
                          <path d="M20.2694 8.48505L20.9749 12.5648C21.1511 13.5838 20.3675 14.5158 19.3345 14.5158H14.1534C13.6399 14.5158 13.2489 14.9767 13.332 15.484L13.9947 19.5286C14.1024 20.1857 14.0716 20.858 13.9044 21.5025C13.7659 22.0364 13.354 22.465 12.8123 22.6391L12.6673 22.6856C12.3399 22.7908 11.9826 22.7663 11.6739 22.6176C11.3342 22.4539 11.0856 22.1553 10.9935 21.8001L10.5178 19.9663C10.3664 19.3828 10.146 18.8195 9.8617 18.2874C9.44634 17.5098 8.80416 16.8875 8.13663 16.3123L6.69789 15.0725C6.29223 14.7229 6.07919 14.1994 6.12535 13.6656L6.93752 4.27293C7.01201 3.41139 7.73231 2.75 8.59609 2.75H13.2447C16.726 2.75 19.697 5.17561 20.2694 8.48505Z" />
                          <path
                            opacity="0.5"
                            d="M2.96767 15.2651C3.36893 15.2824 3.71261 14.9806 3.74721 14.5804L4.71881 3.34389C4.78122 2.6221 4.21268 2 3.48671 2C2.80289 2 2.25 2.55474 2.25 3.23726V14.5158C2.25 14.9174 2.5664 15.2478 2.96767 15.2651Z"
                          />
                        </svg> */}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col justify-center items-center gap-3">
            <img src={emptyReviewsSVG} alt="" className="max-w-48 p-2" />
            <p className="text-2xl font-semibold dark:text-white">
              Add Your Review
            </p>
          </div>
        )}
      </div>

      {/* <div className="mt-8 text-black dark:text-white h-40">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your review here..."
          className="h-40"
        /> */}
      <Dialog>
        <DialogTrigger className="w-full flex justify-center">
          <Button className="mt-5 w-full max-w-md p-5 mb-5">
            Add Your Review
          </Button>
        </DialogTrigger>
        <DialogContent className="rounded-2xl max-w-screen-lg border-2 border-purple-900 dark:border-purple-900">
          <DialogHeader>
            <DialogTitle className="text-2xl dark:text-neutral-400 text-center">
              Write A Review
            </DialogTitle>
            <DialogDescription className="text-left">
              <div className="mt-5">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your review here..."
                  className="h-40 text-black font-semibold"
                />
                <div className="flex w-full justify-center">
                  <Button
                    className="mt-5 w-full max-w-md p-5 mb-5"
                    onClick={handleSubmit}
                  >
                    Add Your Review
                  </Button>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* </div> */}
    </div>
  );
};

export default VirtualizedReviewList;
