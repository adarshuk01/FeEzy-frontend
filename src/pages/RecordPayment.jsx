import React from "react";
import FormButton from "../components/common/FormButton";

const RecordPayment = () => {
  return (
    <div className="font-display bg-white dark:bg-background-dark  p-4 max-w-4xl md:max-w-3xl mx-auto">
      {/* User Info */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-6 flex flex-col items-center">
        <img
          alt="Ethan Bennett"
          className="h-20 w-20 rounded-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_fhn1Bxe1t9YdEFMTjTcebkLtcwwxm0XF7iiTdD2MzDfEACoEeOcVwP7HHo7-89DD7wpEBpRXVIdkExT-cOdBNSoeR2JMxAjkolKlFrNc7iKXbZn1a83DVkDG9TZchl4ib_DK18av1YZu5OPeY_zbRiyi2EbKca9DfSGEvXVFwLbmGY0Vx_Ou6_hyQ2yvegZiBgGJdC4sI21S32-_UQ6g7BmiSxIc0W7KXjteA1cz2_POUhANbKCo4Q6QC1DXmhFDgy1a0UnqKg"
        />
        <p className="mt-4 font-bold text-xl text-content-light dark:text-content-dark">
          Ethan Bennett
        </p>
        <p className="text-sm text-subtle-light dark:text-subtle-dark">
          ethan.bennett@example.com
        </p>
      </div>

      {/* Subscription Info */}
      <div className="mt-6 bg-surface-light dark:bg-surface-dark rounded-xl p-4">
        <div className="flex justify-between items-center">
          <span className="text-subtle-light dark:text-subtle-dark">
            Subscription
          </span>
          <span className="font-semibold text-content-light dark:text-content-dark">
            Pro Plan
          </span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-subtle-light dark:text-subtle-dark">
            Pending Amount
          </span>
          <span className="font-semibold text-red-600 dark:text-red-400">
            $50.00
          </span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-subtle-light dark:text-subtle-dark">
            Due Date
          </span>
          <span className="font-semibold text-content-light dark:text-content-dark">
            July 15, 2024
          </span>
        </div>
      </div>

      {/* Payment Details */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-content-light dark:text-content-dark mb-2">
          Payment Details
        </h2>
        <div className="space-y-4">
          <div>
            <label
              className="text-sm font-medium text-subtle-light dark:text-subtle-dark"
              htmlFor="payment-mode"
            >
              Mode of Payment
            </label>
            <select
              id="payment-mode"
              className="w-full mt-1 h-12 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-content-light dark:text-content-dark focus:ring-primary focus:border-primary"
            >
              <option>Cash</option>
              <option>Credit Card</option>
              <option>Bank Transfer</option>
              <option>UPI</option>
            </select>
          </div>

          <div>
            <label
              className="text-sm font-medium text-subtle-light dark:text-subtle-dark"
              htmlFor="transaction-id"
            >
              Transaction ID (Optional)
            </label>
            <input
              id="transaction-id"
              type="text"
              placeholder="Enter transaction ID"
              className="w-full mt-1 h-12 px-4 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-content-light dark:text-content-dark placeholder-subtle-light dark:placeholder-subtle-dark focus:ring-primary focus:border-primary"
            />
          </div>

          <div>
            <label
              className="text-sm font-medium text-subtle-light dark:text-subtle-dark"
              htmlFor="payment-date"
            >
              Payment Date
            </label>
            <input
              id="payment-date"
              type="date"
              defaultValue="2024-07-20"
              className="w-full mt-1 h-12 px-4 rounded-lg bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-content-light dark:text-content-dark focus:ring-primary focus:border-primary"
            />
          </div>
           <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-lg md:relative md:p-0 md:shadow-none md:border-t-0 md:mt-6">
          <FormButton text="Confirm Payment" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default RecordPayment;
