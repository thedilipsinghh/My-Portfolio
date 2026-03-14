import { NextRequest, NextResponse } from "next/server";

export const proxy = (req: NextRequest) => {
    // step 1 check for cookie
    const token = req.cookies.get("PortfolioAdmin")?.value
    const all = req.cookies.getAll()
    if (!token) {
        return NextResponse.redirect(new URL("/", req.url)) //
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/dashboard/:path*"] // any route matches /admin/anything
}