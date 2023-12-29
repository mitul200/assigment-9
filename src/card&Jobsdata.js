import { getStoredCart } from "./utils/fakeDB";

export const cardsLoderData = async () => {
    const jobsInfos = await fetch('jobs.json')
    const jobInfo = await jobsInfos.json()
  let cartArray = [];
  const savedInfo = getStoredCart();
//   console.log(savedInfo);
  for (const id in savedInfo) {
    const foundItems = jobInfo.find((data) => data.id == id);
    if (foundItems) {
      foundItems.quantity = savedInfo[id];
      cartArray.push(foundItems);
    }
  }
  return {cartArray , jobInfo}
};
