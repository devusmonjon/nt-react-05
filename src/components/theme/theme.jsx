import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Theme = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Theme;
