import HeaderBox from "@/components/ui/HeaderBox";
import RightSidebar from "@/components/ui/RightSidebar";
import TotalBalanceBox from "@/components/ui/TotalBalanceBox";
import React from "react";

function Home() {
  const loggedIn = { firstName: "Toma", lastName:"Tomasov", email:"tomasov@toma.com"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Guest"}
            subtext="Access and manage your account and transactions"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSAACTIONS
      </div>

      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.5}, {currentBalance:123.5}]}/>
    </section>
  );
}

export default Home;
