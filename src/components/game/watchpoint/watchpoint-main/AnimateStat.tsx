import { useState, useEffect } from 'react';

type AnimatedStatProps = {
  label: string;
  leftValue: string;
  rightValue: string;
};

const AnimatedStat = ({ label, leftValue, rightValue }: AnimatedStatProps) => {
  const [leftWidth, setLeftWidth] = useState(0);
  const [rightWidth, setRightWidth] = useState(0);

  useEffect(() => {
    const leftNum = parseFloat(leftValue);
    const rightNum = parseFloat(rightValue);
    const total = leftNum + rightNum;
    const leftPercentage = (leftNum / total) * 100;
    const rightPercentage = (rightNum / total) * 100;

    setLeftWidth(0);
    setRightWidth(0);

    const timer = setTimeout(() => {
      setLeftWidth(leftPercentage);
      setRightWidth(rightPercentage);
    }, 1000);

    return () => clearTimeout(timer);
  }, [leftValue, rightValue]);

  return (
    <div className="mb-4">
      <div className="mb-1 flex items-center">
        <div className="w-1/3 text-left">{leftValue}</div>
        <div className="w-1/3 text-center">
          <span className="text-gray-300">{label}</span>
        </div>
        <div className="w-1/3 text-right">{rightValue}</div>
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-gray-700">
        <div
          className="absolute left-0 top-0 h-full bg-kt-blue transition-all duration-1000 ease-out"
          style={{ width: `${leftWidth}%` }}
        ></div>
        <div
          className="absolute right-0 top-0 h-full bg-kt-red-3 transition-all duration-1000 ease-out"
          style={{ width: `${rightWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default AnimatedStat;
