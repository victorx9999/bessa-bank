// src/app/api/transacoes/route.ts
import { NextResponse } from 'next/server';

const transacoes = [
  { tipo: 'Depósito', valor: 1200, data: '22/09/2024', mes: 'Setembro' },
  { tipo: 'Depósito', valor: 500, data: '21/10/2024' , mes: 'Outubro' },
  { tipo: 'transacao', valor: 300, data: '20/11/2024', mes: 'Novembro'  },
  { tipo: 'transacao', valor: -1500, data: '19/12/2024' , mes: 'Dezembro' },
];

export async function GET() {
  return NextResponse.json(transacoes);
}
