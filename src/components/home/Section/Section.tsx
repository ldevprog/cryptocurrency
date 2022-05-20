import { Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

import * as S from './Section.styles';

const { Title } = Typography;

interface SectionProps {
  title: string;
  link?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, link, children }) => {
  return (
    <S.Wrapper>
      <Row justify="space-between">
        <Title level={2}>{title}</Title>
        {link && (
          <S.ShowMore>
            <Link to={link}>Show More</Link>
          </S.ShowMore>
        )}
      </Row>
      {children}
    </S.Wrapper>
  );
};
