"use client";

import React from 'react'
import CardStaking from './CardStaking';
import ChartStaking from './ChartStaking';
import CardPortfolio from './CardPortfolio';

export default function DashboardComponent() {
  return (
    <div className='flex flex-col gap-4 w-full max-w-7xl justify-center items-center'>
      <div className='flex flex-col lg:flex-row gap-4 w-full justify-center'>
        <CardPortfolio />
        <ChartStaking />
      </div>
      <CardStaking />
    </div>
  )
}
