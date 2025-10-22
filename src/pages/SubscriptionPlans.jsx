import React from "react";

const SubscriptionPlans = () => {
  const plans = [
    { name: "Basic Plan", price: "$29.99 / 1 Month" },
    { name: "Pro Plan", price: "$149.99 / 6 Months" },
    { name: "Premium Plan", price: "$299.99 / 1 Year" },
  ];

  return (
    <div className="relative flex flex-col bg-white dark:bg-background-dark font-display max-w-4xl md:max-w-3xl mx-auto">
      {/* Main content */}
      <main className="flex-1 p-4 pb-28"> {/* add bottom padding for button space */}
        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
          Existing Plans
        </h2>

        <div className="space-y-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-slate-200/50 dark:bg-slate-800/50 p-4"
            >
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {plan.price}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary">
                  <span className="material-symbols-outlined">edit</span>
                </button>
                <button className="text-red-500 hover:text-red-600 dark:hover:text-red-400">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Fixed Add Plan Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:relative md:p-0 md:shadow-none md:border-t-0 md:mt-6">
        <button className="w-full rounded-lg bg-primary py-4 text-center text-base font-bold text-white shadow-lg shadow-primary/20">
          Add New Plan
        </button>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
