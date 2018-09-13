import React, { Component } from 'react';
import { Form, Icon, Button, Table, Popconfirm } from 'antd';

import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';

class FormList extends Component {

  // constructor(props) {
  //   super(props);
  //   // this.onDelete(key) = this.onDelete(key).bind(this);
  //   this.onEdit = () => this.onEdit;
  // }

  onAdd = () => {
    alert('Add');
  }
  onDelete = (key) => {
    console.log('del ->', key);
    // const data = [...this.state.data];
    // this.setState({ data: data.filter(item => item.key !== key) });
  }
  onEdit = (key) => {
    // const data = [...this.state.data];
    console.log('edit ->', key);
  }

  render() {

    const edit = this.onEdit;

    const del = this.onDelete;

    const client = new ApolloClient({ uri: 'https://eu1.prisma.sh/uomgo/task/dev' });

    const GET_INVOICES = gql`
      query {
        invoices {
          id
          direction
          number
          date_created
          date_due
          date_supply
          comment
        }
      }
    `
    // const data = [];
    // for (let i = 1; i <= 100; i++) {
    //   data.push({
    //     key: i,
    //     name: 'John Brown',
    //     age: `${i}2`,
    //     address: `New York No. ${i} Lake Park`,
    //     description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
    //   });
    // }

    const columns = [{
      title: 'Create',
      dataIndex: 'date_created',
      key: 'date_created',
    }, {
      title: 'No',
      dataIndex: 'number',
      key: 'number',
      sorter: (a, b) => a.age - b.age,
      filters: [{
        text: '42',
        value: 42,
      }, {
        text: '22',
        value: 22,
      }, {
        text: 'Submenu',
        value: 'Submenu',
        children: [{
          text: '55',
          value: 55,
        }, {
          text: '48',
          value: 48,
        }],
      }],
      onFilter: (value, record) => record.age.indexOf(value) === 0,
    }, {
      title: 'Supply',
      dataIndex: 'date_supply',
      key: 'date_supply',
      sorter: (a, b) => a.address.localeCompare(b.address)
    }, {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
      render (text, record) {
        return (
          <span>
            <a onClick={ () => edit(record.key) }>Edit</a>
            <span className="ant-divider" />
            <Popconfirm title="Sure to delete?" onConfirm={ () => del(record.key) }>
              <a>Delete</a>
            </Popconfirm>
          </span>
        )
      }
    }];

    return (
      <ApolloProvider client={client}>
        <Form  layout="inline">
          <Button
            style={{ marginBottom: 16 }}
            type="default"
            htmlType="submit"
            onClick={this.onAdd}
          >
            <Icon type="plus" /> Add field
          </Button>
          <Query query={GET_INVOICES}>
            {({ loading, error, data }) => {
              if (loading) return <div>Loading...</div>;
              if (error) return <div>Error :(</div>;

                // Костыль
                const invoices = data.invoices.map( (item,i) => {
                return(item)
              } );
              // console.log(invoices);

              return (
                <Table
                  rowKey='id'
                  footer={() => 'Footer'}
                  pagination={{ position: 'bottom', pageSize: 4 }}
                  dataSource={invoices}
                  columns={columns}
                />
              )
            }}
          </Query>
        </Form>
      </ApolloProvider>
    );
  }
}

export default FormList;