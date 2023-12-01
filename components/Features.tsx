import { featuresItems } from "@/constant";

type FeatureItem = {
  title: string;
  description: string;
};

type FeatureCardsProps = {
  title: FeatureItem["title"];
  description: FeatureItem["description"];
};

const FeatureCards: React.FC<FeatureCardsProps> = ({ title, description }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => {
  return (
    <div className="bg-[#F7F7F7] text-[#333]">
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Exclusive Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-md:max-w-md mx-auto">
          {featuresItems.map((feature, index) => (
            <FeatureCards
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
