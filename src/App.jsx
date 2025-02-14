import "./App.css";
import {
  FaAngellist,
  FaArrowUpRightDots,
  FaBahai,
  FaBitcoin,
} from "react-icons/fa6";
import MyCard from "./components/MyCard";

function App() {
  return (
    <div className="container">
      <MyCard
        Icon={FaAngellist}
        iconColor={"blue"}
        title={"ایده‌های نوآورانه"}
        desc={"با ایده‌های خلاقانه و نوآورانه، کسب‌وکار خود را متحول کنید."}
      />
      <MyCard
        Icon={FaArrowUpRightDots}
        iconColor={"green"}
        title={"رشد سریع"}
        desc={"با استراتژی‌های هوشمندانه، رشد سریع و پایدار را تجربه کنید."}
      />
      <MyCard
        Icon={FaBahai}
        iconColor={"red"}
        title={"هماهنگی و تعادل"}
        desc={
          "تعادل بین کار و زندگی را با روش‌های مدرن مدیریت زمان ایجاد کنید."
        }
      />
      <MyCard
        Icon={FaBitcoin}
        iconColor={"orange"}
        title={"فناوری بلاکچین"}
        desc={"با فناوری بلاکچین، امنیت و شفافیت را به کسب‌وکار خود بیاورید."}
      />
    </div>
  );
}

export default App;
