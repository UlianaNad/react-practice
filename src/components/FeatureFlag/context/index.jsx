import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data";

export const featureFlagsContext = createContext(null);

export default function FeatureFlagGlodbalState({children}){

    const [loading, setLoading] = useState(false);
    const [enabledFlags, setEnabledFlags] = useState({});

async function fetchFeatureFlags(){
    try {
        setLoading(true)
        //original service call
        const res = await featureFlagsDataServiceCall();
        setEnabledFlags(res)
        console.log(res)
        setLoading(false)
    } catch (error) {
        console.log(error)
        setLoading(false)
        throw new Error(error);
    }
}

useEffect(()=>{
    fetchFeatureFlags()
},[])
    return(
        <featureFlagsContext.Provider value={{loading, enabledFlags}}>
            {children}
        </featureFlagsContext.Provider>
    )
}