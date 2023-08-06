import { NextResponse } from "next/server"

export function GET(request, { params }) {
  console.log(params)
  return NextResponse.json({
    message: 'Obteniendo Transaccion'
  })
}


export function PATCH(request, { params }) {
  return NextResponse.json({
    message: 'Transaccion actualizada'
  })
}

export function DELETE(request, { params }) {
  return NextResponse.json({
    message: 'Transaccion Eliminada'
  })
}