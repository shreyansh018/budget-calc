import Newchart from "@/components/newchart";
import Savingsicon from "@/Icons/savingsicon";
import NeceIcon from "@/Icons/necessetiesicon";
import Wantsicon from "@/Icons/wantsicon";

function Budgetchart() {
  return (
    <div>
      <div className="flex justify-center px-8 min-h-[300px] items-center">
        <div className="flex items-center justify-center flex-col max-w-[150px]">
          <div>
            <div>
              <NeceIcon />
            </div>
          </div>
          <span className="leading-6 text-[#1e293b] pt-2 text-center not-italic font-cusweight font-custom text-sm md:text-lg md:leading-5">
            50% Necessities
          </span>
        </div>

        <div>
          <Newchart />
        </div>
        <div />
        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center max-w-[150px] relative right-5 min-h-[200px]">
            <div>
              <div>
                <Savingsicon />
              </div>
            </div>
            <span className="leading-6 text-[#1e293b] pt-2 text-center not-italic font-cusweight font-custom text-sm md:text-lg md:leading-5">
              20% Savings & Debt Repayment
            </span>
          </div>
          <div className="flex flex-col items-center max-w-[150px] pb-14 md:pb-12 relative bottom-[5px] right-[34px]">
            <div>
              <div>
                <Wantsicon />
              </div>
            </div>
            <span className="leading-6 text-[#1e293b] pt-2 text-center not-italic font-cusweight font-custom text-sm md:text-lg md:leading-5">
              30% Wants
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budgetchart;
