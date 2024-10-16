export default async function handler(req, res) {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Token stoMSkqDqS0IMmL3oqOIywhCxZT2Tccl");
    myHeaders.append("User-Agent", "Dalvik/2.1.0 (Linux; U; Android 11; vivo 1904 Build/RP1A.200720.012)");
    myHeaders.append("Host", "194.163.155.114:3001");
    myHeaders.append("Connection", "Keep-Alive");
    myHeaders.append("Accept-Encoding", "gzip");

    const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
    };

    let num = 4;

    async function fun() {
        num += 1;
        // const num2 = 156025 + num;
        // const num2 = 156049 + num;
        // const num2 = 156070 + num;
        const num2 = 141153 + num;

        try {
            const response = await fetch(`http://194.163.155.114:3001/api/database/rows/table/259/${num2}/?user_field_names=true`, requestOptions);
            return await response.json();
        } catch (error) {
            console.error(error);
            return { error: 'Failed to fetch' };
        }
    }

    try {
        const promises = [];

        for (let i = 0; i < 20; i++) {
            promises.push(fun(num)); // Adjust num for each iteration
        }

        const Aryy = await Promise.all(promises); // Wait for all promises to resolve

        res.status(200).json({ r: Aryy });
    } catch (e) {
        res.status(500).json({ r: e.message });
    }
}
