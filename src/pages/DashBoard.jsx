import React from "react";

const Dashboard = () => {
    const subscriptionData = [
        { type: "Basic", percent: 30 },
        { type: "Premium", percent: 50 },
        { type: "Enterprise", percent: 15 },
        { type: "Trial", percent: 5 },
    ];

    return (
        <main className="overflow-y-auto">

            {/* Stats Cards */}
            <div className="p- space-y-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    <div className="bg-white dark:bg-background-dark/50 p-4 rounded-lg border border-border-light dark:border-border-dark">
                        <p className="text-sm font-medium text-nowrap text-subtle-light dark:text-subtle-dark">
                            Total Customers
                        </p>
                        <p className="text-2xl font-bold mt-1">120</p>
                    </div>
                    <div className="bg-white dark:bg-background-dark/50 p-4 rounded-lg border border-border-light dark:border-border-dark">
                        <p className="text-sm font-medium text-nowrap text-subtle-light dark:text-subtle-dark">
                            Active Subscriptions
                        </p>
                        <p className="text-2xl font-bold mt-1">85</p>
                    </div>
                    <div className="bg-white dark:bg-background-dark/50 p-4 rounded-lg border border-border-light dark:border-border-dark">
                        <p className="text-sm font-medium text-nowrap text-subtle-light dark:text-subtle-dark">
                            Recently Expired
                        </p>
                        <p className="text-2xl font-bold mt-1">15</p>
                    </div>
                    <div className="bg-white dark:bg-background-dark/50 p-4 rounded-lg border border-border-light dark:border-border-dark">
                        <p className="text-sm text-nowrap font-medium text-subtle-light dark:text-subtle-dark">
                            Subscription Types
                        </p>
                        <p className="text-2xl font-bold mt-1">4</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">


                <div className="bg-white dark:bg-background-dark/50 p-4 rounded-lg border border-border-light dark:border-border-dark">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-base">Fee Overview</h2>
                        <div className="relative">
                            <select className="pl-3 pr-8 py-1 text-sm font-medium text-subtle-light dark:text-subtle-dark bg-transparent border-border-light rounded-md appearance-none focus:outline-none border focus:ring-0">
                                <option>This Month</option>
                                <option>Last Month</option>
                                <option>January</option>
                                <option>February</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-1 top-1/2 -translate-y-1/2 text-subtle-light dark:text-subtle-dark pointer-events-none">
                                expand_more
                            </span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <p className="text-sm text-subtle-light dark:text-subtle-dark">Total Outstanding</p>
                        <p className="text-xl font-bold ">₹1,25,000</p>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <p className="text-sm text-subtle-light dark:text-subtle-dark">Amount Due</p>
                            <p className="text-xl font-bold ">₹50,000</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-subtle-light dark:text-subtle-dark">Amount Collected</p>
                            <p className="text-xl font-bold ">₹35,000</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-background-dark/50 p-4 rounded-lg border border-border-light dark:border-border-dark">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="font-bold text-text-light text-base">Attendance</h2>
                        <div className="relative">
                            <input
                                type="date"
                                value="2023-10-27"
                                className="w-38 pl-3 pr-8 py-1 text-sm font-medium text-subtle-light dark:text-subtle-dark bg-transparent border border-border-light rounded-md appearance-none focus:outline-none focus:ring-0"
                            />
                           
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <p className="text-sm text-subtle-light dark:text-subtle-dark">Present</p>
                            <p className="text-2xl font-bold ">65</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-sm text-subtle-light dark:text-subtle-dark">Absent</p>
                            <p className="text-2xl font-bold ">20</p>
                        </div>
                    </div>
                </div>
                                </div>




                {/* Subscription Types Progress */}
                <div className="bg-white dark:bg-background-dark/50 p-4 rounded-lg border border-border-light dark:border-border-dark">
                    <h2 className="font-bold text-base mb-4">Subscription Types</h2>
                    <div className="space-y-4">
                        {subscriptionData.map((sub) => (
                            <div key={sub.type}>
                                <div className="flex justify-between items-center mb-1">
                                    <p className="text-sm font-medium">{sub.type}</p>
                                    <p className="text-sm font-medium text-subtle-light dark:text-subtle-dark">
                                        {sub.percent}%
                                    </p>
                                </div>
                                <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2">
                                    <div
                                        className="bg-primary h-2 rounded-full"
                                        style={{ width: `${sub.percent}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>

    );
};

export default Dashboard;
