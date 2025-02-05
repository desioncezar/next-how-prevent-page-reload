async function getDecision() {
    try {
        return await fetch(
            `http://127.0.0.1:5001/decision`
        ).then((response) => response.json())
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function postDecision(data) {
    try {
        return await fetch(
            `http://127.0.0.1:5001/decision`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => response.json());
    } catch (error) {
        console.log(error);
        return error;
    }
}

export {
    getDecision,
    postDecision
};