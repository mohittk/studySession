const base = "http://localhost:5000";

export const create_session = async(obj) => {
    const res = await fetch(`${base}/api/session/createSession`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {'Content-Type': 'application/json'},
    });

    const ans = await res.json();
    return ans;
}

export const get_sessions = async (obj) => {
    const res = await fetch(`${base}/api/session/getSessions`, {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {'Content-Type': 'application/json'},
    });

    const ans = await res.json();
    return ans;
}