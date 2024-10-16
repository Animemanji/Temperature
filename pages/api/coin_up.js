import { get_order, claim_order, create_order, user_data } from "./helpers/functions";

export default async function handler(req, res) {
    const { run_time, user } = req.body;

    // Validate input
    if (!run_time || !user) {
        return res.status(400).json({ error: 'Must include run_time and user' });
    }

    let res_arry = [];

    try {
        // Fetch and claim orders concurrently
        const promises = Array.from({ length: run_time }, async (_, i) => {
            try {
                // Fetch order data
                const order_data = await get_order();
                const { id: data_id, type: data_type } = order_data.data;

                // Claim order
                const claim_order_response = await claim_order(data_type, data_id);

                // Log claimed order details
                console.log(`
 ✔ order-id   : ${data_id}  
 ✔ order-type : ${data_type}  
 ✔ coin       : ${claim_order_response.data.coin}
                `);

                return claim_order_response;
            } catch (error) {
                console.error(`Error in iteration ${i + 1}:`, error);
                return { error: `Failed on iteration ${i + 1}`, details: error.message };
            }
        });

        // Await all promises
        res_arry = await Promise.all(promises);

        // Get the coin value from the last claimed order
        const get_num_for_order = res_arry[res_arry.length - 1]?.data?.coin;

        // Check if the coin value exceeds the threshold
        if (get_num_for_order >= 2100) {
            // Fetch user information
            const user_information = await user_data(user);
            const { hd_profile_pic_url_info: { url: pc }, id, username: nm } = user_information.result.user;
            const fl = get_num_for_order;

            console.log("\n", pc, fl, id, nm, "\n");

            // Create campaign
            const create_campain = await create_order(pc, fl, id, nm);
            console.log(`\n ✔ create_campain : ${JSON.stringify(create_campain)}\n`);

            // Respond with order and campaign data
            return res.status(200).json({ res_arry, create_campain });
        }

        // Log and respond with the order data if no campaign was created
        console.log("\n ✔ current total coin : " + get_num_for_order + "\n");
        res.status(200).json({ res_arry });

    } catch (err) {
        console.error("Unexpected error:", err);
        res.status(500).json({ error: "Internal server error", details: err.message });
    }
}
