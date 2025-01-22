import { Button } from "@/components/ui/button";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef, useState, useEffect } from "react";

// Types
interface Answer {
  id: number;
  content: string;
  author_username: string;
  created_at: string;
  likes: number;
  dislikes: number;
  is_accepted: boolean;
}

// Dummy data generator
const generateDummyAnswers = (count: number): Answer[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    content: `This is a detailed answer ${index + 1}. ${
      index % 2 === 0 
        ? "It includes extra content to demonstrate variable height rendering."
        : ""
    } Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    author_username: `user${index + 1}`,
    created_at: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    likes: Math.floor(Math.random() * 50),
    dislikes: Math.floor(Math.random() * 10),
    is_accepted: index === 0 // First answer is accepted
  }));
};

// Constants
const ITEMS_PER_PAGE = 5;

const VirtualizedAnswerList = () => {
  const [loadedCount, setLoadedCount] = useState<number>(ITEMS_PER_PAGE);
  const containerRef = useRef<HTMLDivElement>(null);
  const answerHeights = useRef<Map<number, number>>(new Map());
  const [answers, setAnswers] = useState<Answer[]>(() => generateDummyAnswers(100));

  // Setup virtualizer
  const virtualizer = useVirtualizer({
    count: Math.min(loadedCount, answers.length),
    getScrollElement: () => containerRef.current,
    estimateSize: (index) => answerHeights.current.get(index) || 200,
    overscan: 5,
  });

  // Load more answers when scrolling near bottom
  const loadMoreAnswers = () => {
    if (loadedCount < answers.length) {
      setLoadedCount((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  // Scroll handler for infinite loading
  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        containerRef.current.scrollTop + containerRef.current.clientHeight >=
          containerRef.current.scrollHeight - 10
      ) {
        loadMoreAnswers();
      }
    };
    
    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, [answers.length]);

  // Format timestamp
  const formatTimestamp = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  return (
    <div ref={containerRef} 
    className="h-[475px] block-shadow dark:border-neutral-800 border-2 max-w-screen-lg w-full overflow-auto rounded-lg scrollbar-hide"
    style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <ul
        style={{
          height: virtualizer.getTotalSize(),
          position: "relative",
          width: "100%",
        }}
      >
        {virtualizer.getVirtualItems().map((virtualRow) => {
          const answer = answers[virtualRow.index];
          return (
            <li
              key={answer.id}
              className=" p-4 border-b border-b-black dark:border-b-white bg-white dark:bg-black dark:text-white"
              style={{
                position: "absolute",
                top: `${virtualRow.start}px`,
                width: "100%",
                boxSizing: "border-box",
                
              }}
              ref={(el) => {
                if (el) {
                  const height = el.getBoundingClientRect().height;
                  if (height !== answerHeights.current.get(virtualRow.index)) {
                    answerHeights.current.set(virtualRow.index, height);
                    virtualizer.measure();
                  }
                }
              }}
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{answer.author_username}</span>
                  <span className="text-sm text-gray-500">
                    {formatTimestamp(answer.created_at)}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{answer.content}</p>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex gap-2">
                    <Button ><svg className="fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.2694 16.265L20.9749 12.1852C21.1511 11.1662 20.3675 10.2342 19.3345 10.2342H14.1534C13.6399 10.2342 13.2489 9.77328 13.332 9.26598L13.9947 5.22142C14.1024 4.56435 14.0716 3.892 13.9044 3.24752C13.7659 2.71364 13.354 2.28495 12.8123 2.11093L12.6673 2.06435C12.3399 1.95918 11.9826 1.98365 11.6739 2.13239C11.3342 2.29611 11.0856 2.59473 10.9935 2.94989L10.5178 4.78374C10.3664 5.36723 10.146 5.93045 9.8617 6.46262C9.44634 7.24017 8.80416 7.86246 8.13663 8.43769L6.69789 9.67749C6.29223 10.0271 6.07919 10.5506 6.12535 11.0844L6.93752 20.4771C7.01201 21.3386 7.73231 22 8.59609 22H13.2447C16.726 22 19.697 19.5744 20.2694 16.265Z" fill=""></path> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.96767 9.48508C3.36893 9.46777 3.71261 9.76963 3.74721 10.1698L4.71881 21.4063C4.78122 22.1281 4.21268 22.7502 3.48671 22.7502C2.80289 22.7502 2.25 22.1954 2.25 21.5129V10.2344C2.25 9.83275 2.5664 9.5024 2.96767 9.48508Z" fill=""></path> </g></svg> {answer.likes}</Button>
                    <Button className="border-purple-900 hover:bg-neutral-200 text-purple-900 border-2 bg-white dark:bg-black dark:hover:bg-neutral-900"><svg className="fill-purple-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.2694 8.48505L20.9749 12.5648C21.1511 13.5838 20.3675 14.5158 19.3345 14.5158H14.1534C13.6399 14.5158 13.2489 14.9767 13.332 15.484L13.9947 19.5286C14.1024 20.1857 14.0716 20.858 13.9044 21.5025C13.7659 22.0364 13.354 22.465 12.8123 22.6391L12.6673 22.6856C12.3399 22.7908 11.9826 22.7663 11.6739 22.6176C11.3342 22.4539 11.0856 22.1553 10.9935 21.8001L10.5178 19.9663C10.3664 19.3828 10.146 18.8195 9.8617 18.2874C9.44634 17.5098 8.80416 16.8875 8.13663 16.3123L6.69789 15.0725C6.29223 14.7229 6.07919 14.1994 6.12535 13.6656L6.93752 4.27293C7.01201 3.41139 7.73231 2.75 8.59609 2.75H13.2447C16.726 2.75 19.697 5.17561 20.2694 8.48505Z" fill=""></path> <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.96767 15.2651C3.36893 15.2824 3.71261 14.9806 3.74721 14.5804L4.71881 3.34389C4.78122 2.6221 4.21268 2 3.48671 2C2.80289 2 2.25 2.55474 2.25 3.23726V14.5158C2.25 14.9174 2.5664 15.2478 2.96767 15.2651Z" fill=""></path> </g></svg> {answer.dislikes}</Button>
                  </div>
                  
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VirtualizedAnswerList;