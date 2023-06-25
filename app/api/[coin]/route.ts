import { NextResponse } from 'next/server'

export async function GET(request: Request, { params }: { params: { coin: string } }) {
  try {
    const result = await fetch(`https://api.blockchair.com/${params.coin}/stats`)
    const { data } = await result.json()
    return NextResponse.json(data)
  } catch (error) {
    return new Response('bad request', {
      status: 400,
    })
  }
}
