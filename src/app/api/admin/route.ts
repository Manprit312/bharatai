import { NextResponse } from "next/server";
import { generateToken } from "@/utils/jwt";


export async function POST(request: Request) {
    const { USERNAMES, PASSWORD } = process.env;
    if (!USERNAMES || !PASSWORD) {
        return NextResponse.json({ message: "Authentication not configured" }, { status: 500 });
    }
    const { username, password } = await request.json();

    if (!username || !password) {
        return NextResponse.json({ message: "Username and password are required" }, { status: 400 });
    }

    console.log(USERNAMES, PASSWORD);

    if (username === USERNAMES && password === PASSWORD) {
        const payload = { username, password };
        const token = generateToken(payload, "2h");

        return NextResponse.json({
            token,
            message: "Authentication successful"
        }, { status: 200 });
    } else {
        return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
}