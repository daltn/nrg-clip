import { useState, useEffect, Fragment } from 'react'
import { useNrgContext } from '../context/state'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function AccountBalance() {
  const [balanceLabels, setBalanceLabels] = useState([])
  const [balanceAmounts, setBalanceAmmounts] = useState([])
  const [chartData, setChartData] = useState({})
  const { user, userData } = useNrgContext()

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Account Balance',
      },
    },
  }

  useEffect(() => {
    let dateTimeLabels = []
    let balanceTimeline = []
    let balance = 0
    userData.transactions.forEach((transaction) => {
      const dateTime = new Date(transaction.timestamp).toLocaleDateString()
      dateTimeLabels.push(dateTime)
      if (transaction.toAddress === user) {
        balance += Number(transaction.amount)
        balanceTimeline.push(balance)
      } else {
        balance -= Number(transaction.amount)
        balanceTimeline.push(balance)
      }
    })
    setBalanceLabels(dateTimeLabels)
    setBalanceAmmounts(balanceTimeline)
  }, [userData, user])

  useEffect(() => {
    if (balanceLabels.length && balanceAmounts.length) {
      setChartData({
        labels: balanceLabels,
        datasets: [
          {
            label: 'Balance',
            data: balanceAmounts,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      })
    }
  }, [balanceLabels, balanceAmounts, setChartData])

  return (
    <Fragment>
      {chartData?.labels && <Line options={options} data={chartData} />}
    </Fragment>
  )
}

export default AccountBalance
