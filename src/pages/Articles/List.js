import React, { PureComponent } from 'react';
import { Table, Card } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ users }) => ({
  users,
}))
class List extends PureComponent {
  columns = [
    {
      title: '用户名',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: '创建时间',
      dataIndex: 'created_at',
      key: 'created_at',
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'users/fetch',
    });
  }

  render() {
    const {
      data: { list },
    } = this.props;
    return (
      <PageHeaderWrapper title="用户列表">
        <Card>
          <Table dataSource={list} columns={this.columns} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
