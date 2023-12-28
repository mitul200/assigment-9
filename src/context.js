 export const lodeData =async ()=>{
    const jobItems = await fetch('jobs.json')
    const items = await jobItems.json()
    return items

}