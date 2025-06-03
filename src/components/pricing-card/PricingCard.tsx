interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export default function PricingCard({
  plan,
  price,
  features,
  isFeatured = false,
}: PricingCardProps) {
  return (
    <div
      className={`
        relative border p-6 transition-all duration-200 
        hover:shadow-lg hover:-translate-y-1 
        focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 min-w-3xs
        ${
          isFeatured
            ? "bg-[#34495E] text-white border-[#34495E] shadow-lg scale-105"
            : "bg-white text-[#484C5E] border-gray-200 hover:border-gray-300"
        }
      `}
      tabIndex={0}>
      <div className="text-center">
        <h3
          className={`text-lg font-bold mb-4 ${
            isFeatured ? "text-white" : "text-[#484C5E]"
          }`}>
          {plan}
        </h3>

        <div className="mb-6">
          <span
            className={`text-6xl font-bold ${
              isFeatured ? "text-white" : "text-[#484C5E]"
            }`}>
            {price}
          </span>
        </div>

        <div className="mb-8">
          <div
            className={`h-0.5 -mx-6 ${
              isFeatured ? "bg-slate-500" : "bg-gray-300"
            }`}></div>

          {features.map((feature, index) => (
            <div key={index}>
              <div
                className={`text-sm py-3 font-bold ${
                  isFeatured ? "text-gray-200" : "text-gray-600"
                }`}>
                {feature}
              </div>
              <div
                className={`h-0.5 -mx-6 ${
                  isFeatured ? "bg-slate-500" : "bg-gray-300"
                }`}></div>
            </div>
          ))}
        </div>

        <button
          className={`
            w-full py-3 px-4 rounded-md font-bold text-sm transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-offset-2
            ${
              isFeatured
                ? "text-white hover:text-gray-300 focus:ring-white"
                : "text-[#484C5E] hover:text-[#484C5E] focus:ring-gray-500"
            }
          `}>
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
}
