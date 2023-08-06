import { NextResponse } from 'next/server'
import supabase from '@/utils/supabase';

const TABLE = 'transaction_type';
 
export async function GET() {
  let response = await supabase
  .from(TABLE).select()
  if (response.status != 200){
    throw new Error(`Error in get ${TABLE}, ${response.error}`)
  }
  return NextResponse.json({ 
    message: "Obteniendo Transacciones", 
    data: response
  })
}

export function POST(request, data) {
  console.log(request, data)
  return NextResponse.json({
    message: 'Creando Tarea'
  })
}

