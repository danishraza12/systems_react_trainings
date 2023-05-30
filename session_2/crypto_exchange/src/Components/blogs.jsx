import React, { useState } from "react";
import { Table, Modal } from "antd";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import "../Stylings/blogs.css";

const Blogs = () => {
  const [ isVisible, setIsVisible ] = useState(false);

  const dataSource = [
    {
      key: "1",
      blogId: "1001",
      title: "React.js Fundamentals",
      subtitle: "Typescript",
      author: "Danish Raza",
    },
    {
      key: "2",
      blogId: "1003",
      title: "Angular 2+ Fundamentals",
      subtitle: "Typescript",
      author: "Danish Raza",
    },
  ];

  const columns = [
    {
      title: "Unique Blog ID",
      dataIndex: "blogId",
      key: "blogId",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Subtitle",
      dataIndex: "subtitle",
      key: "subtitle",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      align: "center",
      render: (text, record, index) => {
        return (
          <>
            <div className="button-container">
              <div className="edit-outlined">
                <EditOutlined
                  id={record.id}
                  onClick={() => {
                    console.log(record);
                  }}
                />
              </div>
              <div>
                <DeleteOutlined
                  onClick={() => {
                    console.log(record);
                  }}
                />
              </div>
              <div>
                <EyeOutlined
                  onClick={() => {
                    console.log(record);
                  }}
                />
              </div>
            </div>
          </>
        );
      },
    },
  ];

  const handleOk = e => {
    console.log(e);
    setIsVisible(false);
  };

  const handleCancel = e => {
    console.log(e);
    setIsVisible(false);
  };

  const handleOpenModal = () => {
    setIsVisible(true);
  }

  return (
    <div className="blogs-container">
      <div className="blogs-heading-container">
        <div className="left">
          <label className="blogs-heading">Crypto Blogs</label>
        </div>
        <div className="right blogs-heading">
          <PlusCircleOutlined
            onClick={handleOpenModal}
          />
          <Modal
            title="Blogs Modal"
            open={isVisible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
        </div>
      </div>
      <div className="table-container">
        <Table
          dataSource={dataSource}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default Blogs;
