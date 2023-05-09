import { Card, Row, Col, Image } from "antd";
import { useState } from "react";
import PaginationPage from "./Pagination";
import { useSelector } from "react-redux";
import DynamicRouteBtn from './DynamicRouteBtn';
const { Meta } = Card;
const Boxs = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const themeReduc = useSelector((state) => state.darkThemeReducer.darkThemeOn);
  return (
    <div>
      <Row justify="space-between">
        {currentPosts.map((item) => (
          <Col key={item.id}>
            <Card
              className={themeReduc ? "dark" : "light"}
              key={item.id}
              hoverable
              style={{ width: 440 }}
              cover={<Image alt="example" src={item.url} />}
            >
              <Meta title={item.title} description={item.description} />
              {/* <DynamicRouteBtn data={item}/> */}
            </Card>
          </Col>
        ))}
      </Row>
      <PaginationPage
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Boxs;
