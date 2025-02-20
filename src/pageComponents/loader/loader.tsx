import "./loader.css";
export const Loader = () => {
  return (
    <>
      <div className="fixed inset-0 flex text-purple-900 items-center justify-center">
        <div className="lds-circle">
          <div></div>
        </div>
        <h1 className="font-semibold text-2xl font-mono italic">Loading...</h1>
      </div>
    </>
  );
};
