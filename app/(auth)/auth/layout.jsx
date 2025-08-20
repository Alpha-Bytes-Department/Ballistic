import "../../globals.css";

const Authlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="flex justify-center items-center h-screen">
          <div
            style={{ backgroundImage: "url('/images/Banner.jpg')" }}
            className="h-full w-full lg:w-7/12 lg:h-11/12 bg-cover relative"
          >
            <div className="absolute inset-0 bg-black/15 z-0"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default Authlayout;
