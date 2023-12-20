import type { dbReservation } from "@/lib/rooms"
import mysql from "mysql2/promise"
import { NextResponse } from 'next/server'

export async function PUT(request : Request){

    const data = await request.json()
    const { fName, lName, email, phone, country} = data
    console.log("server: ", fName, lName, email, phone, country )

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "hotel",
        user: "root",
        password: "ghepardo98"

    })

    try {
        const query = `INSERT INTO Users2 (firstName, lastName, email, phone, country)
        VALUES(
            '${fName}',
            '${lName}',
            '${email}',
            '${phone}',
            '${country}'
        );`
                
        await dbconnection.execute(query);
        dbconnection.end();

        console.log("server data: ",data)

        return NextResponse.json({ results: "ok"})
    } catch (error : any) {
        return NextResponse.json({error: error.message})
    }
}