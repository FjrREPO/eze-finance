import { Card, CardHeader, CardBody } from '@heroui/card';
import { useAccountBalance } from '@/hooks/query/useAccountBalance';
import { useCurAccount } from '@/hooks/query/useCurAccount';
import { Image } from '@heroui/image';
import { Chip } from '@heroui/chip';

export default function CardPortfolio() {
  const { curAddress, curAvatar, curName, isDisconnected, error } = useCurAccount();
  const { bNormalized } = useAccountBalance({ token: '', decimal: 18 });

  return (
    <Card className="flex flex-row items-center p-4 w-full bg-background/50">
      <Image className="w-14 h-14 mr-4" src={curAvatar} alt='avatar' />
      <CardBody>
        <CardHeader className="text-lg font-semibold text-gray-900 dark:text-white">
          Web3 Portfolio
        </CardHeader>
        <p className="text-sm text-gray-600 dark:text-gray-300">Status: {isDisconnected ? 'Disconnected' : 'Connected'}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Address: {curAddress || 'Not connected'}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">Name: {curName || 'Loading...'}</p>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Balance: {bNormalized || 'Loading...'} ETH</p>
        <Chip variant='bordered' color='danger'>Error: {error}</Chip>
      </CardBody>
    </Card>
  );
}
