import React from 'react';
import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { ChartArea, Clock, DollarSign, ArrowDown, ArrowUp } from 'lucide-react';
import { Image } from '@heroui/image';
import { Chip } from '@heroui/chip';
import { mockDashboard } from '@/data/mockDashboard';

const formatPercent = (value: number) => `${(value * 100).toFixed(2)}%`;
const formatUSD = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);

const CardStaking = () => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      {mockDashboard.map((pool, index) => (
        <Card key={index} className="p-4 bg-background/50 overflow-x-auto">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 w-64">
              <Image
                src={pool.farm.logo}
                alt={pool.farm.name}
                className="w-12 h-12 rounded-full ring-2 ring-offset-2 ring-slate-100"
              />
              <div>
                <h3 className="text-lg font-semibold">
                  {pool.tokens.deposits.map(t => t.symbol).join('/')}
                </h3>
                <p className="text-sm text-slate-500">{pool.farm.name}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 w-56">
              {pool.categories.map((category, idx) => (
                <Chip key={idx} variant='bordered' color='primary' className='text-xs px-1'>
                  {category.replace('-', ' ')}
                </Chip>
              ))}
            </div>

            <div className="flex items-center gap-8 w-64">
              <div>
                <div className="flex items-center gap-2">
                  <ChartArea className="w-4 h-4" />
                  <span className="text-sm font-medium text-slate-600">APR</span>
                </div>
                <p className="text-lg font-bold">{formatPercent(pool.apr)}</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4" />
                  <span className="text-sm font-medium text-slate-600">TVL</span>
                </div>
                <p className="text-lg font-bold">{formatUSD(pool.totalValueLocked)}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 w-48">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm text-slate-600">
                  7d: {formatPercent(pool.aprWeek)}
                </span>
              </div>
              <div className="text-sm text-slate-600">
                Fee: {formatPercent(pool.fee ?? 0)}
              </div>
            </div>

            <div className="flex gap-2 ml-auto">
              <Button
                onPress={() => window.open(pool.investmentUrl, '_blank')}
                variant="bordered"
                className="flex items-center gap-2"
              >
                <span>Deposit</span>
                <ArrowDown className="w-4 h-4" />
              </Button>
              <Button
                onPress={() => window.open(pool.investmentUrl, '_blank')}
                variant="bordered"
                className="flex items-center gap-2"
              >
                <span>Withdraw</span>
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default CardStaking;