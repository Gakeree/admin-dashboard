import { Avatar, Rate, Space, Table, Typography } from "antd";
import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Sidebar from '../components/sidebar'
import { getInventory } from "../API/Index";

const Inventory = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getInventory().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);


  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  } 
  return (
    <div className='grid-container'> 
    <Header OpenSidebar={OpenSidebar} />
  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>

  <Space size={20} direction="vertical" style={{paddingLeft:"20px"}} >
      <Typography.Title level={3} style={{color:"black"}}>Inventory</Typography.Title>
      <Table 

        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>Ksh{value}</span>,
          },
          {
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled  />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
          },
        ]}
        dataSource={dataSource}
        pagination={{
          pageSize: 5,
        }}
    
      ></Table>
    </Space>
</div>
  );
}

export default Inventory