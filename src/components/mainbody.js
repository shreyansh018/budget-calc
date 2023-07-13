import Head from "next/head";

import React, { useState } from "react";
import Searchbar from "./searchbar";
import Budgetchart from "../BudgetCalcChart/budgetchart";
import Infoicon from "../Icons/infoicon";
import Headerlogo from "../Icons/headerlogo";
import Refreshicon from "@/Icons/refreshicon";

function Mainbody() {
  const [result, setResult] = useState({
    showResult: false,
  });

  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculate = () => {
    // Perform calculations and update the state with the results
    setResult((prevState) => ({
      ...prevState,
      showResult: true,
    }));
    setIsCalculated(true);
  };

  return (
    <div className="theme-green flex justify-center p-5">
      <Head>
        <title>Budget Calculator</title>
      </Head>
      <div className="max-w-5xl shadow-3xl border-gray-400 md:mx-5 mb-3 rounded-bl-lg rounded-br-lg">
        <div className="bg-skin-fill flex pt-9 pr-5 md:pt-8.5 md:pr-8 text-skin-base items-center justify-between rounded-tl-lg rounded-tr-lg md:rounded-tl-md md:rounded-tr-md">
          <div className="pl-10 pb-7">
            <h2 className="pb-2 mb-[6px] text-xl md:text-4xl font-cusweight font-custom border-none text-skin-base md:mb-1">
              Budget Calculator
            </h2>

            <p className="text-base sm:w-full md:w-3/4 font-cusweight font-custom">
              Enter your monthly after-tax income into this free budget
              calculator to create a suggested budget.
            </p>
          </div>
          <div className="hidden w-[116px] md:block mr-5 pb-5">
            <Headerlogo />
          </div>
        </div>

        <div className="flex flex-col md:flex-row rounded-bl-lg rounded-br-lg md:rounded-none">
          <form className="w-full px-5 pt-6 pb-10 md:p-10 md:pt-11">
            {/*inside part*/}
            {/* <div className="bg-gray-400"> */}
            <div className="grid justify-center md:flex md:justify-between md:align-bottom">
              <div className="flex-1 flex-col md:flex md:px-4 md:flex-1 md:flex-col md:mb-6">
                <div className="flex">
                  <label className="font-custom">
                    Monthly After-Tax Income
                  </label>
                  <Infoicon />
                </div>

                {/* input field */}

                <Searchbar />
              </div>

              <div className="flex flex-col flex-1 md:px-4 md:flex-1 md:flex-col mb-6 mt-5 pt-3">
                {/* calculate button */}

                <button
                  type="button"
                  className="bg-skin-fill flex justify-center p-3 mt-1 text-skin-base rounded hover:shadow-xl font-custom"
                  onClick={handleCalculate}
                >
                  {isCalculated ? (
                    <>
                      Recalculate <Refreshicon />
                    </>
                  ) : (
                    "Calculate"
                  )}
                </button>
              </div>
            </div>
            {/* </div> */}
          </form>
        </div>

        {/* after calculate button result */}

        {result.showResult && (
          <div className="bg-skin-fill2 pt-[40px] pr-[5px] lg: p-[40px]">
            {/* budget calc chart */}

            <Budgetchart />

            {/*1st row starts */}

            <div className="border-b border-solid border-slate-300 pt-6">
              <p className="flex justify-center text-[19px] text-skin-base2 font-cusweight font-custom text-center">
                Your 50/30/20 Annual Allocation
              </p>

              <div className="flex md:divide-x-2 flex-col md:flex-row justify-between items-center p-4">
                <div className="md:border-b-[0] border-b border-slate-300 w-full md:basis-1/3 flex flex-col justify-center p-6">
                  <span className="flex justify-center text-[19px] text-skin-base2 text-center font-cusweight font-custom">
                    Necessities (50%)
                    <Infoicon />
                  </span>
                  <span className="not-italic font-bold text-3xl leading-8 text-center text-skin-base3 pt-3">
                    $5,000
                  </span>
                </div>

                <div className="md:border-b-[0] border-b border-solid border-slate-300 w-full md:basis-1/3 flex flex-col justify-center p-6">
                  <span className="flex justify-center text-[19px] text-skin-base2 text-center font-cusweight font-custom">
                    Wants (30%)
                    <Infoicon />
                  </span>

                  <span className="not-italic font-bold text-3xl leading-8 text-center text-skin-base3 pt-3">
                    $3,000
                  </span>
                </div>

                <div className=" md:border-b-[0] border-solid border-slate-300 w-full md:basis-1/3 flex flex-col justify-center pb-6 m-2">
                  <span className=" flex text-center justify-center text-[19px] text-skin-base2 font-cusweight font-custom">
                    Savings & Debt Repayment (20%)
                    <Infoicon />
                  </span>

                  <span className="not-italic font-bold text-3xl leading-8 text-center text-skin-base3 pt-3">
                    $2,000
                  </span>
                </div>
              </div>
            </div>

            {/* 2nd row starts */}

            <div className="border-b border-solid border-slate-300 pt-6">
              <p className="flex justify-center text-[19px] text-skin-base2 font-cusweight font-custom text-center">
                Your 50/30/20 Annual Allocation
              </p>

              <div className="flex md:divide-x-2 flex-col md:flex-row justify-between items-center p-4">
                <div className="md:border-b-[0] border-b border-slate-300 w-full md:basis-1/3 flex flex-col justify-center p-6">
                  <span className="flex justify-center text-[19px] text-skin-base2 text-center font-cusweight font-custom">
                    Necessities (50%)
                    <Infoicon />
                  </span>
                  <span className="not-italic font-bold text-3xl leading-8 text-center text-skin-base3 pt-3">
                    $60,000
                  </span>
                </div>

                <div className="md:border-b-[0] border-b border-solid border-slate-300 w-full md:basis-1/3 flex flex-col justify-center p-6">
                  <span className="flex justify-center text-[19px] text-skin-base2 text-center font-cusweight font-custom">
                    Wants (30%)
                    <Infoicon />
                  </span>

                  <span className="not-italic font-bold text-3xl leading-8 text-center text-skin-base3 pt-3">
                    $36,000
                  </span>
                </div>

                <div className=" md:border-b-[0] border-solid border-slate-300 w-full md:basis-1/3 flex flex-col justify-center pb-5 m-2">
                  <span className=" flex text-[19px] text-skin-base2 text-center justify-center font-cusweight font-custom">
                    Savings & Debt Repayment (20%)
                    <Infoicon />
                  </span>

                  <span className="not-italic font-bold text-3xl leading-8 text-center text-skin-base3 pt-3">
                    $34,000
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Mainbody;
