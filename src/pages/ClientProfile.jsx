import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'; // import default styles

const ClientProfile = () => {
  // Static client data
  const client = {
    name: "Sophia Bennett",
    phone: "(555) 123-4567",
    email: "sophia.bennett@email.com",
    address: "123 Main St, Anytown",
    birthday: "1990-05-15",
    gender: "Female",
    occupation: "Marketing Manager",
    clientSince: "2022",
    id: "12345",
    subscription: { plan: "Premium", price: "$99/month" },
    payments: [
      { date: "2023-07-15", amount: "$99" },
      { date: "2023-06-15", amount: "$99" },
      { date: "2023-05-15", amount: "$99" },
    ],
    attendance: [6, 13, 20, 25] // days present in July 2023
  };

const tileClassName = ({ date, view }) => {
  if (view === "month" && date.getMonth() === 6) {
    if (client.attendance.includes(date.getDate())) {
      return "!bg-green-400 !text-white font-bold rounded-full  !important";
    }
  }
  return null;
};

  return (
    <main className="flex-1 overflow-y-auto px-4 pb-12 bg-white dark:bg-background-dark font-display min-h-screen">
      <div className="flex flex-col items-center pt-6 pb-8">
        <div className="relative mb-4">
          <img
            alt={client.name}
            className="h-32 w-32 rounded-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDixZ3kndTGbQRI24QicM8KGiZb0USeQLB76dp67fTVac6nF-QD7Hu77kdAXXg2c_IxI-wECAkOrYo69OHATrF7oqNhhvs2t7SDJn0RcCBs2A5391ZfLwD_03OsQlplhF5U31ijDhoplj96zlgu_dZoFPsaA7sOOpKSkEdD9-aUJqpky7pJVdO-1LE1WlUfDprRJ__9rqT5367zW4mFCHuAeZoVc6Xo76kxH7v-NT6sXTZLjl8uodvH-2HguNh7VBJzEvkmG0PO7w"
          />
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-content-light dark:text-content-dark">{client.name}</p>
          <p className="text-subtle-light dark:text-subtle-dark">Client since {client.clientSince}</p>
          <p className="text-subtle-light dark:text-subtle-dark">ID: {client.id}</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Personal Details */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-content-light dark:text-content-dark">Personal Details</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 rounded-lg border border-border-light dark:border-border-dark p-4">
            {Object.entries({
              Phone: client.phone,
              Email: client.email,
              Address: client.address,
              Birthday: client.birthday,
              Gender: client.gender,
              Occupation: client.occupation
            }).map(([label, value]) => (
              <div key={label} className="flex flex-col">
                <p className="text-sm text-subtle-light dark:text-subtle-dark">{label}</p>
                <p className="text-sm font-medium text-content-light dark:text-content-dark">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-content-light dark:text-content-dark">Subscription</h2>
          <div className="rounded-lg border border-border-light dark:border-border-dark p-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-subtle-light dark:text-subtle-dark">Plan</p>
                <p className="text-sm font-medium text-content-light dark:text-content-dark">{client.subscription.plan}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">{client.subscription.price}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-content-light dark:text-content-dark">Payment History</h2>
          <div className="space-y-2">
            {client.payments.map((payment, idx) => (
              <div key={idx} className="flex items-center justify-between rounded-lg border border-border-light dark:border-border-dark p-3">
                <div>
                  <p className="font-medium text-content-light dark:text-content-dark">Payment Received</p>
                  <p className="text-sm text-subtle-light dark:text-subtle-dark">{payment.date}</p>
                </div>
                <p className="font-medium text-content-light dark:text-content-dark">{payment.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Attendance */}
        <div>
          <h2 className="mb-4 text-lg font-bold text-content-light dark:text-content-dark">Attendance</h2>
          <div className="rounded-lg border border-border-light w-[310px] dark:border-border-dark bg-white dark:bg-background-dark">
            <Calendar
              value={new Date("2023-07-01")}
              tileClassName={tileClassName}
              // Disable selection
              tileDisabled={() => true}
              
              
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ClientProfile;
