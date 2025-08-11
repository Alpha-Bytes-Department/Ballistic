import "../../globals.css";


const Authlayout = ({children}) => {
    return (
        <html lang="en">
      <body >
        <main className="flex justify-center items-center h-screen">
          <div style={{backgroundImage: "url('/images/auth-bg.jpg')"}} className='h-full w-full lg:w-7/12 lg:h-11/12 bg-cover'>
              {children}
          </div>
        </main>
      </body>
    </html>
    );
};

export default Authlayout;