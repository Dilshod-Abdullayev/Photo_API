import { Card, Row, Col, Image } from "antd";
const { Meta } = Card;
const Boxs = ({ data }) => {
  return (
    <Row justify="space-between">
      {data.map((item) => (
        <Col key={item.id}>
          <Card
            key={item.id}
            hoverable
            style={{ width: 440 }}
            cover={<Image alt="example" src={item.url} />}
          >
            <Meta title={item.title} description={item.description} />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Boxs;
