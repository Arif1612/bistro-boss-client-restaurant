import img from "../../../assets/home/chef-service.jpg";

const About = () => {
  return (
    <div className="relative mb-10">
      <img src={img} alt="" className="w-full" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="bg-white  p-6 rounded-md ">
          <h1 className="text-4xl font-bold mb-4">Bistro Boss</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
