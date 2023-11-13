import mysql from "mysql2/promise"
import { NextResponse } from 'next/server'

export async function GET(req, res){
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "hotel",
        user: "root",
        password: "ghepardo98"

    })

    try {
        const query = "Select * FROM Rooms"
        const values = []
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        return NextResponse.json({ results: data})
    } catch (error) {
        return NextResponse.json({error: error.message})
    }
}