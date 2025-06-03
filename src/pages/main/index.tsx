import PricingCard from "../../components/pricing-card/PricingCard";

export default function Main() {
  const plans = [
    {
      plan: "Standard",
      price: "$100",
      features: [
        "50,000 Requests",
        "4 contributors",
        "Up to 3 GB storage space",
      ],
    },
    {
      plan: "Pro",
      price: "$200",
      features: [
        "100,000 Requests",
        "7 contributors",
        "Up to 6 GB storage space",
      ],
      isFeatured: true,
    },
    {
      plan: "Expert",
      price: "$500",
      features: [
        "200,000 Requests",
        "11 contributors",
        "Up to 10 GB storage space",
      ],
    },
  ];

  return (
    <div className="bg-[#212121] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-8">Pricing</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-5xl mx-auto p-4">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
