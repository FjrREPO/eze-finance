import React from 'react';
import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { ChartArea, Clock, DollarSign, ArrowDown, ArrowUp } from 'lucide-react';
import { Image } from '@heroui/image';
import { Chip } from '@heroui/chip';
import { InvestmentPool } from '@/types/protocol/pool';
import { formatPercent, formatUSD } from '@/lib/helper';

const CardStaking = ({ pool }: { pool: InvestmentPool }) => {
  return (
    <Card className="p-4 bg-background/50">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <div className="flex items-center gap-4">
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

        <div className="flex flex-wrap gap-2">
          {pool.categories.map((category, idx) => (
            <Chip key={idx} variant='bordered' color='primary' className='text-xs px-1'>
              {category.replace('-', ' ')}
            </Chip>
          ))}
        </div>

        <div className="grid grid-cols-2 md:flex md:items-center gap-4 md:gap-8">
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

        <div className="flex flex-col md:flex-row gap-2 md:gap-4">
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

        <div className="flex gap-2 md:ml-auto">
          <Button
            onPress={() => window.open(pool.investmentUrl, '_blank')}
            variant="bordered"
            className="flex-1 md:flex-none flex items-center justify-center gap-2"
          >
            <span>Deposit</span>
            <ArrowDown className="w-4 h-4" />
          </Button>
          <Button
            onPress={() => window.open(pool.investmentUrl, '_blank')}
            variant="bordered"
            className="flex-1 md:flex-none flex items-center justify-center gap-2"
          >
            <span>Withdraw</span>
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default CardStaking;