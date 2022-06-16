import { Col, Row, Typography } from 'antd';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import * as S from './LineChart.styles';

interface LineChartProps {
  coinHistory: { data: { change: string; history: IHistory[] } };
  currentPrice: string;
  coinName: string;
}

interface IHistory {
  price: string;
  timestamp: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart: React.FC<LineChartProps> = ({
  coinHistory,
  currentPrice,
  coinName,
}) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i++) {
    coinPrice.push(coinHistory?.data?.history[i].price);
    coinTimestamp.push(
      new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleTimeString()
    );
  }

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: `Price in USD`,
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
    options: {
      scales: { y: { beginAtZero: true } },
    },
  };

  return (
    <S.Wrapper>
      <Row>
        <Typography.Title level={3}>
          {coinName} 24h Price Chart
        </Typography.Title>
        <Col span={24}>
          <S.Text>Change: {coinHistory?.data?.change}%</S.Text>
          <S.Text>
            Price: {coinName} Price: $ {currentPrice}
          </S.Text>
        </Col>
      </Row>
      <Line data={data} options={data.options} />
    </S.Wrapper>
  );
};
