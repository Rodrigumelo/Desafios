function checkLamps(switches) {
    const lampStates = {
        1: { state: "off", temperature: "cold" },
        2: { state: "off", temperature: "cold" },
        3: { state: "off", temperature: "cold" }
    };

    function simulateHeat() {
        lampStates[1].temperature = "warm"; 
    }

    switches[1] = true;
    simulateHeat();

    switches[1] = false;
    switches[2] = true;

    
    function checkLampsStates() {
        lampStates[1].state = switches[1] ? "on" : "off";
        lampStates[2].state = switches[2] ? "on" : "off";
        lampStates[3].state = switches[3] ? "on" : "off";

        
        if (lampStates[1].state === "off" && lampStates[1].temperature === "warm") {
            lampStates[1].temperature = "hot";
        }
        if (lampStates[2].state === "on") {
            lampStates[2].temperature = "hot";
        }
    }

    checkLampsStates();

    return lampStates;
}

const switches = {
    1: false,
    2: false,
    3: false
};

const results = checkLamps(switches);

console.log("Estado das lâmpadas:");
console.log("Lâmpada 1: ", results[1]);
console.log("Lâmpada 2: ", results[2]);
console.log("Lâmpada 3: ", results[3]);

console.log("\nConclusão:");
console.log("Lâmpada quente e apagada: Interruptor 1");
console.log("Lâmpada acesa e quente: Interruptor 2");
console.log("Lâmpada apagada e fria: Interruptor 3");
