import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  // used custom hook
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  
  return (
    <div>
      <section>
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FROM OUR MENU"}
        ></SectionTitle>

        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {popular.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>

        <div className="text-center mb-10">
          <button className="btn btn-outline border-black border-0 border-b-4 text-black">
            View Full Menu
          </button>
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;
