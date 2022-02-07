

import { createClient } from 'redis';


(async () => {
    const client = createClient();
    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();


    async function markDealAsSent(dealId, userId) { // 1
        await client.sAdd(dealId, userId); // 2
    }

    async function sendDealIfNotSent(dealId, userId) { // 1
        const reply = await client.sIsMember(dealId, userId)
        if (reply) {
            console.log("Deal", dealId, "was already sent to user", userId); // 3
        } else {
            console.log("Sending", dealId, "to user", userId); // 4
            // code to send the deal to the user would go here… // 5
            markDealAsSent(dealId, userId); // 6
        }
    }

    async function showUsersThatReceivedAllDeals(dealIds) { // 1 
        const reply = await client.sInter(dealIds);
        console.log(reply + " received all of the deals: " + dealIds); // 3
    }

    async function showUsersThatReceivedAtLeastOneOfTheDeals(dealIds) { // 1
        const reply = await client.sUnion(dealIds);
        console.log(reply + " received at least one of the deals: " + dealIds); // 3
    }


    markDealAsSent('deal:1', 'user:1');
    markDealAsSent('deal:1', 'user:2');
    markDealAsSent('deal:2', 'user:1');
    markDealAsSent('deal:2', 'user:3');


    sendDealIfNotSent('deal:1', 'user:1');
    sendDealIfNotSent('deal:1', 'user:2');
    sendDealIfNotSent('deal:1', 'user:3');

    showUsersThatReceivedAllDeals(["deal:1", "deal:2"]);
    showUsersThatReceivedAtLeastOneOfTheDeals(["deal:1", "deal:2"]);


})();