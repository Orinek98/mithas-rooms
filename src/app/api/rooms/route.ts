import mysql from "mysql2/promise"
import { NextResponse } from 'next/server'

export async function GET(){
    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "hotel",
        user: "root",
        password: "##########"

    })

    try {
        const query = "Select * FROM Rooms"
        const values = [] as any
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        return NextResponse.json({ results: data})
    } catch (error: any) {
        return NextResponse.json({error: error.message})
    }
}
