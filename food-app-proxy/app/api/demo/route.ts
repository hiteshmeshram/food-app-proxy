import { NextRequest, NextResponse } from "next/server";
import axios from 'axios'

export async function GET (req: NextRequest, res: NextResponse) {
    const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    // console.log(response.data)
    if (!response) {
        return NextResponse.json({message: "error"})
    }
    return NextResponse.json(response.data)
}