import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json({
    messaje: 'Hola mundo'
  })
}