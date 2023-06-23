import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white mb-10 ">
      <div className="bg-black bg-opacity-40 pt-10">
        <SectionTitle
          subHeading="---Check it out---"
          heading="From our menu"
        ></SectionTitle>

        <div className="md:flex justify-center items-center py-16 pt-10 px-32  ">
          <div>
            <img src={img} alt="" />
          </div>
          <div className="md:ml-20">
            <p>Aug 20,2023</p>
            <p className=" uppercase "> Where can i get some? </p>
            <p className="mt-5 mb-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              quae. Ipsum, earum et? Non adipisci numquam nulla illo velit
              ducimus quas vel assumenda porro sapiente dolor culpa deleniti,
              doloremque dicta facere ipsa necessitatibus fuga ipsum a
              repudiandae repellendus fugit veniam!
            </p>
            <button className="btn btn-outline border-white border-0 border-b-4 text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
