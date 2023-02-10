import React from "react";
import "../assets/rightPane.css";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BalanceAreaChart } from "./BalanceAreaChart";

export const Balance = () => {
  return (
    <>
      <div className="balHeader">
        <h1>Balance</h1>
        <Button className="btn" endIcon={<KeyboardArrowDownIcon />}>
          Monthly
        </Button>
      </div>
      <div className="balancesDiv">
        <div className="balanceValues">
          <div className="earningBal">
            <p>Earnings</p>
            <div className="textPercent">
              <h1>43.41%</h1>
              <p>+2.5%</p>
            </div>
          </div>
          <div className="salesBal">
            <p>Sales Value</p>
            <div className="textPercent">
              <h1>$95,422</h1>
              <p>+13.5%</p>
            </div>
          </div>
        </div>
      </div>
      <div>
      <BalanceAreaChart className="area" />
      </div>
      
    </>
  );
};
