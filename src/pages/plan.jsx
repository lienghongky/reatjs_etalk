import React, { useState } from 'react'
import PlanCardComponent from '../components/planCardComponent';
// import { Button } from 'element-react';


const PlanPage = () =>{
   const [plans,setPlans] = useState([{
                                    
                                        name:"10 Lessons",
                                        price:"$0",
                                        period:"1 Month",
                                        time:"10"

                                    },
                                    {
                                        name:"20 Lessons",
                                        price:"$101",
                                        period:"2 Months",
                                        time:"30"

                                    },
                                    {
                                        name:"30 Lessons",
                                        price:"$343",
                                        period:"3 Months",
                                        time:"100"

                                    }]);
    const onClick = ()=>{

    }

    return (

         <>
             <h1 className="text-3xl font-bold p-10 text-red-600">Start your Free Plan Now!</h1>
             <h5 className="text-gray-300">Choose your prefers of plans.</h5> 
             <div className="flex flex-row justify-center">
                {
                    plans.map((e,index)=>(
                        <PlanCardComponent key={e.name} plan={e}/>
                    ))
                
                }
             </div>             
        </>
        )
}

export default PlanPage;