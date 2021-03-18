async function getId() {
     const response = await fetch("https://api64.ipify.org?format=json");
     return (await response.json()).ip;
}

async function getInfo() {
     const locationIp = await getId();
     const res = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=at_sOpr3EMcsWgLMI5ybWr2po9MOsRMX&ipAddress=${locationIp}`
     );
     return await res.json();
}

export default getInfo;
