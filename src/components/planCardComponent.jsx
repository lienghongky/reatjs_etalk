import React from 'react';

const PlanCardComponent = (props) => {
    return (
        <div>
            <div className="shadow-lg rounded-lg p-8 w-78 m-4">
                    <p className="font-bold text-3xl text-lg py-4" >{props.plan.name}</p>
                    <div >_____________</div>
                    <p className="text-6xl py-4 text-blue-500" >{props.plan.price}</p>
                    <div>_____________</div>
                    <div className="flex flex-row items-center justify-center">
                        <p className=" text-gray-500">Valid period:</p>
                        <p className=" text-2xl text-red-600" >{props.plan.period}</p>
                    </div>
                    <div className="flex flex-row items-center justify-center">
                        <p className="text-gray-500">Valid period:</p>
                        <p className=" text-2xl text-green-500">{props.plan.time}</p>
                    </div>
                        <button className="text-white bg-red-500 hover:bg-red-700">Buy it!</button>
                    
            </div>
        </div>
    );
};

export default PlanCardComponent;