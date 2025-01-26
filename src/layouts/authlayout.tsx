import { Link, Outlet } from "react-router-dom";

const AuthLayout: React.FC = () => {
  return (
    <div className="bg-white min-h-screen items-center justify-center flex w-full max-w-full overflow-x-hidden dark:bg-neutral-950">
      <div className="w-full flex flex-col max-h-fit items-center justify-center">
        <Link className="flex" to="/dashboard/main">
          <div className="flex gap-4 dark:text-white items-center *:hover:text-purple-900 *:hover:stroke-purple-900 hover:scale-110 transition-transform">
            <h1 className="text-3xl md:text-4xl cursor-pointer font-bold italic  font-mono">
              GymGear
            </h1>
            <svg
              className="flex w-8 sm:w-10 max-h-10 stroke-stone-100 fill-white"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              stroke="white"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="rgb(88 28 135 / var(--tw-bg-opacity, 1))"
                  d="M196.629 18c5.912 17.013 14.242 32.992 22.43 38.557 9.701 6.593 23.321 9.89 36.941 9.89 13.62 0 27.24-3.297 36.941-9.89 8.188-5.565 16.518-21.544 22.43-38.557H196.63zm-16.424 8.264c-12.18 19.569-25.92 40.841-54.713 56.945 12.332 18.881 15.63 38.117 11.809 55.26 29.675-.906 58.603 2.266 90.732 13.486l.115.057.114.06c8.228 4.423 19.276 11.506 27.738 22.31 8.462-10.804 19.51-17.887 27.738-22.31l.114-.06.115-.057c32.13-11.22 61.057-14.392 90.732-13.486-3.821-17.143-.523-36.379 11.809-55.26-28.794-16.104-42.533-37.376-54.713-56.945-5.946 17.839-14.404 35.438-28.736 45.18-6.636 4.51-14.087 7.903-21.948 10.189 2.346 16.9 19.092 31.4 33.03 46.367-13.482 0-25.88.216-34.108-8.078-9.017-9.09-11.305-21.722-11.695-35.592a91.605 91.605 0 0 1-28.39-.586c-.343 14.102-2.57 26.96-11.716 36.178-8.228 8.294-20.625 8.078-34.107 8.078 14.251-15.304 31.434-30.12 33.16-47.512-6.533-2.223-12.731-5.23-18.344-9.045-14.332-9.741-22.79-27.34-28.736-45.18zM99.143 87.775c-17.69.11-39.135 7.635-56.498 19.15-10.28 6.819-18.751 14.923-24.645 22.913v67.908c24.558 3.093 70.735-25.185 97.006-65.355 3.765-11.413 6.445-25.011-7.963-43.977-2.466-.35-5.193-.745-7.9-.639zm313.714 0c-2.707-.106-5.434.29-7.9.64-14.408 18.965-11.728 32.563-7.963 43.976 26.27 40.17 72.448 68.448 97.006 65.355v-67.908c-5.894-7.99-14.365-16.094-24.645-22.912-17.363-11.516-38.807-19.04-56.498-19.15zm-262.36 67.57c-63.148.5-88.27 46.696-99.104 129.22 4.602 3.195 12.321 6.723 22.263 9.404 47.449 12.526 97.552 8.55 148.375 1.25 11.224-2.647 23.381-10.45 24.969-23.219v-77.945c-5.536-12.054-17.133-22.852-27.14-26.053-27.14-8.68-50.033-12.81-69.364-12.656zm211.007 0c-19.33-.152-42.224 3.977-69.363 12.657-10.008 3.2-21.605 13.999-27.141 26.053V272c1.588 12.77 13.745 20.572 24.969 23.219 50.823 7.3 100.926 11.276 148.375-1.25 9.942-2.681 17.661-6.21 22.263-9.405-10.834-82.523-35.956-128.718-99.103-129.218zM18 205.874v118.719c21.138-37.657 24.415-68.827 30.182-115.512-9.019 1.421-19.768-1.08-30.182-3.207zm476 0c-10.414 2.127-21.163 4.628-30.182 3.207 5.768 46.685 9.044 77.855 30.182 115.512V205.873zm-390.72 52.342c8.776 0 15.89 4.45 15.89 9.937 0 5.488-7.114 9.937-15.89 9.938-8.778 0-15.893-4.45-15.893-9.938s7.115-9.937 15.892-9.937zm305.44 0c8.778 0 15.893 4.449 15.893 9.937 0 5.489-7.115 9.938-15.892 9.938s-15.89-4.45-15.89-9.938 7.113-9.937 15.89-9.937zM256 295.055a46.933 46.933 0 0 1-4.1 4.271c-7.385 6.78-16.593 11.361-25.931 13.455-47.557 10.258-106.701 5.934-156.797-1.383-17.011-2.484-24.294-5.647-27.34 11.497-4.35 24.484 21.499 47.728 44.53 70.738 1.938 1.937 2.8 2.776 2.613 5.69 2.414 31.955 5.053 63.473 11.957 94.677h45.07c-.677-8.915 1.187-17.507 5.129-27.975-6.171-15.747-10.355-34.688-.363-52.18-1.848-21.207-.755-42.269 13.548-60.665 18.601-22.962 61.04-32.342 91.684-21.135 30.645-11.207 73.083-1.827 91.684 21.135 14.303 18.396 15.396 39.458 13.548 60.666 9.992 17.49 5.808 36.432-.363 52.18 3.942 10.467 5.806 19.06 5.129 27.974h45.07c6.904-31.204 9.543-62.722 11.957-94.678-.187-2.913.675-3.752 2.614-5.69 23.03-23.009 48.879-46.253 44.529-70.737-3.046-17.144-10.329-13.981-27.34-11.497-50.096 7.317-109.24 11.641-156.797 1.383-9.338-2.094-18.546-6.675-25.931-13.455a46.933 46.933 0 0 1-4.1-4.271zm-28.729 50.449c-17.232-.256-34.73 5.441-47.863 18.842-7.088 9.117-9.738 18.924-10.201 30.265 21.7-15.263 49.534-23.781 77.895-22.039v-24.138a76.774 76.774 0 0 0-19.83-2.93zm57.458 0a76.774 76.774 0 0 0-19.83 2.93v24.138c28.36-1.742 56.194 6.776 77.894 22.04-.463-11.342-3.113-21.15-10.201-30.266-13.133-13.401-30.63-19.098-47.863-18.842zm-47.471 44.642c-23.725.118-53.462 12.998-69.776 30.854-5.787 8.661-5.82 17.585-3.158 27.512 20.858-17.294 51.703-23.635 82.676-25.114V390.9c-3.087-.526-6.353-.77-9.742-.754zm37.484 0c-3.39-.016-6.655.228-9.742.754v32.498c30.973 1.479 61.818 7.82 82.676 25.114 2.661-9.927 2.63-18.851-3.158-27.512-16.314-17.856-46.051-30.736-69.776-30.854zm-35.06 51.077c-21.798.181-60.852 12.549-71.287 30.023-4.336 11.21-5.895 16.256-4.71 22.754h82.157v-52.436c-1.835-.25-3.905-.36-6.16-.341zm32.636 0c-2.255-.02-4.325.092-6.16.341V494h82.156c1.186-6.498-.373-11.544-4.709-22.754-10.435-17.474-49.489-29.841-71.287-30.023z"
                ></path>
              </g>
            </svg>
          </div>
        </Link>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
