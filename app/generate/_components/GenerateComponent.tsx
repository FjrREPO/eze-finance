"use client"

import React, { useState } from 'react'
import { Timeline } from '@/components/ui/timeline'
import { Button } from "@heroui/button"
import { Form } from "@heroui/form"
import { Select, SelectItem } from "@heroui/select"
import Image from 'next/image'
import { Card } from '@heroui/card'

interface FormData {
  profit: string;
  loss: string;
  amount: string;
}

export const animals = [
  { key: "cat", label: "Cat" },
  { key: "dog", label: "Dog" },
  { key: "elephant", label: "Elephant" },
  { key: "lion", label: "Lion" },
  { key: "tiger", label: "Tiger" },
  { key: "giraffe", label: "Giraffe" },
  { key: "dolphin", label: "Dolphin" },
  { key: "penguin", label: "Penguin" },
  { key: "zebra", label: "Zebra" },
  { key: "shark", label: "Shark" },
  { key: "whale", label: "Whale" },
  { key: "otter", label: "Otter" },
  { key: "crocodile", label: "Crocodile" },
];

const GenerateComponent = () => {
  const [formData, setFormData] = useState<FormData>({
    profit: "",
    loss: "",
    amount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const timelineData = [
    {
      title: "Fill Questionnaire",
      content: (
        <div className='flex flex-col gap-4'>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal">
            Fill the questionnaire to help us understand your needs.
          </p>
          <Form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 w-full">
              <div className="form-group flex flex-col gap-1">
                <p className='text-sm'>Select the profit range for the current month</p>
                <Select
                  placeholder="Select the profit range"
                  variant="bordered"
                  classNames={{
                    trigger: "min-h-16",
                    listboxWrapper: "max-h-[400px]",
                  }}
                  onChange={(e) => setFormData(prev => ({ ...prev, profit: e.target.value }))}
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key} value={animal.key}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div className="form-group flex flex-col gap-1">
                <p className='text-sm'>Select the loss range for the current month</p>
                <Select
                  placeholder="Select the loss range"
                  variant="bordered"
                  classNames={{
                    trigger: "min-h-16",
                    listboxWrapper: "max-h-[400px]",
                  }}
                  onChange={(e) => setFormData(prev => ({ ...prev, loss: e.target.value }))}
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key} value={animal.key}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div className="form-group flex flex-col gap-1">
                <p className='text-sm'>Select the income range for the current month</p>
                <Select
                  placeholder="Select the income"
                  variant="bordered"
                  classNames={{
                    trigger: "min-h-16",
                    listboxWrapper: "max-h-[400px]",
                  }}
                  onChange={(e) => setFormData(prev => ({ ...prev, token: e.target.value }))}
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key} value={animal.key}>
                      {animal.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Generate
              </Button>
            </div>
          </Form>
        </div>
      ),
    },
    {
      title: "Generated Content",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-normal mb-4">
            Recommendation from ai to help you getting highest profit from staking.
          </p>
          <Card
            className="rounded-2xl shadow-lg sm:w-80 bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: "url('https://static.bymj.io/web3/staking/bbsol/bbsol2.png')" }}
          >
            <div className='backdrop-blur-lg backdrop-brightness-[25%] p-6'>
              <div className="flex justify-center">
                <Image src="https://static.bymj.io/web3/staking/bbsol/bbsol2.png" alt="Project Logo" className="w-20 h-20 rounded-full" height={100} width={100} />
              </div>
              <div className="text-center mt-4">
                <h2 className="text-white text-xl font-semibold">Project Name</h2>
                <p className="text-white text-sm">Token: <span className="font-medium">TOKEN</span></p>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-white">APY:</span>
                  <span className="text-white font-semibold">12.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white">TVL:</span>
                  <span className="text-white font-semibold">$1,200,000</span>
                </div>
                <div className="mt-6">
                  <Button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Stake Now
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  return (
    <Timeline data={timelineData} />
  )
}

export default GenerateComponent