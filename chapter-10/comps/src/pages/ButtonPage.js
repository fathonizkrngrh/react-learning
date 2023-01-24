import Button from "../components/Button";
import {
  MdAdsClick,
  MdAddShoppingCart,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

function ButtonPage() {
  const clickHandler = () => {
    console.log("active");
  };
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-1" onClick={clickHandler}>
          <MdAdsClick />
          Click me!!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <MdAddShoppingCart />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button warning rounded onMouseEnter={clickHandler}>
          <MdOutlineRemoveRedEye />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button success rounded onMouseLeave={clickHandler}>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
