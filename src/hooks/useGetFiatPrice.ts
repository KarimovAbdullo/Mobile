import { useAppSelector } from 'hooks/redux'
import { getExchangeSelector } from 'state/exchange/selector'

const marketFee = [
  {
    tickerName: 'USDT/USD',
    fees: [
      [0, 0.2],
      [50000, 0.16],
      [100000, 0.12],
      [250000, 0.08],
      [500000, 0.04],
      [1000000, 0.02],
      [10000000, 0.01],
      [100000000, 0.001],
    ],
  },
  {
    tickerName: 'ETH/BTC',
    fees: [
      [0, 0.4],
      [10000, 0.35],
      [50000, 0.24],
      [100000, 0.22],
      [250000, 0.2],
      [500000, 0.18],
      [1000000, 0.16],
      [2500000, 0.14],
      [5000000, 0.12],
      [10000000, 0.1],
    ],
  },
]
const serviceFee = 1

const useGetFiatPrice = () => {
  const { pairPricesData } = useAppSelector(getExchangeSelector)

  const getPriceFiat = ({
    from,
    to,
    type,
    value,
  }: {
    from: string
    to: string
    value: number
    type: 'SELL' | 'BUY'
  }) => {
    const pair = pairPricesData?.pairPrices.find(
      item =>
        item.tickerName === from + '/' + to ||
        item.tickerName === to + '/' + from,
    )
    const field = type === 'SELL' ? 'bidPrice' : 'askPrice'

    if (!pair) {
      return {
        amount: 0,
        amountWithFees: 0,
        price: 0,
        serviceFee: 0,
        serviceFeeCoin: 0,
        marketFee: 0,
        marketFeeCoin: 0,
      }
    }

    let price
    let marketFeePercent

    if (to === 'USDT') {
      marketFeePercent = marketFee[0].fees.reduce((acc, [amount, percent]) => {
        return value >= amount ? percent : acc
      }, 0)
    } else {
      marketFeePercent = marketFee[1].fees.reduce((acc, [amount, percent]) => {
        return value >= amount ? percent : acc
      }, 0)
    }

    if (pair.tickerName === from + '/' + to) {
      price = parseFloat(pair[field])
    } else {
      price = 1 / parseFloat(pair[field])
    }

    const amount = value / price
    const serviceFeeAmount = value * (serviceFee / 100)
    const serviceFeeCoin = serviceFeeAmount / price
    const marketFeeAmount = value * (marketFeePercent / 100)
    const marketFeeCoin = marketFeeAmount / price

    return {
      amount: amount,
      amountWithFees: amount - serviceFeeCoin - marketFeeCoin,
      price: price,
      serviceFee: parseFloat(serviceFeeAmount.toFixed(8)),
      serviceFeeCoin: parseFloat(serviceFeeCoin.toFixed(8)) || 0,
      marketFee: parseFloat(marketFeeAmount.toFixed(8)),
      marketFeeCoin: parseFloat(marketFeeCoin.toFixed(8)) || 0,
    }
  }

  return { getPriceFiat }
}

export default useGetFiatPrice
