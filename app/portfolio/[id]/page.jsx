import portfolioData from "../../database/portfolioData.json";
import Footer from "@/app/components/Footer";

const PortfolioItem = ({ params }) => {
  const item = portfolioData.find((p) => p.id.toString() === params.id);

  if (!item) {
    return <div className="p-4 text-red-500">Project not found</div>;
  }

  return (
    <main className="bg-white">
      <img src={item.image} alt={item.title} className="w-full" />
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <p className="text-[20px] text-black font-semibold pt-[50px]">
        {item.description}
      </p>
      <Footer/>
    </main>
  );
};

export default PortfolioItem;
