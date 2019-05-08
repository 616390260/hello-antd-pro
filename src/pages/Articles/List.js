import React, { PureComponent } from 'react';
import { Table, Card } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

@connect(({ users, loading }) => ({
  users,
  loading: loading.models.users,
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
      render: text => moment(text).format('YYYY-MM-DD HH:mm:ss'),
    },
  ];

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'users/fetch',
    });
  }

  render() {
    const { users, loading } = this.props;

    const {
      data: { list },
    } = users;
    // const data = this.props.data;
    return (
      <PageHeaderWrapper title="用户列表">
        <Card>
          <Table loading={loading} rowKey="id" dataSource={list} columns={this.columns} />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default List;
