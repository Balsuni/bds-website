import "./globals.css";
import Footer from "./layout/footer";
import Navbar from "./layout/navbar";

type Props = {
  children: React.ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default RootLayout;
