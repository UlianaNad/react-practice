const dummyApiResponse = {
    showLightDarkMode: false,
    showTikTacToeBoard: true,
    showAccordion:true,
    showRandomColorGenerator:false,
    showTreeView:true
}

function featureFlagsDataServiceCall(){
    return new Promise((resolve, reject)=>{
        if(dummyApiResponse)setTimeout(resolve(dummyApiResponse), 500);
        else reject('Some error!Try again!')
    })
}

export default featureFlagsDataServiceCall;