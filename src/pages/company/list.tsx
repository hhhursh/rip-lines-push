import {List, CreateButton} from '@refinedev/antd';
import {Table, Input,Space} from 'antd';
import {SearchOutlined} from '@ant-design/icons'
import { useTable , FilterDropdown} from "@refinedev/antd";
import {useGo} from '@refinedev/core'
import {COMPANIES_LIST_QUERY} from '@/graphql/queries'
import {getDefaultFilter} from '@refinedev/core'
import {CustomAvatar} from '../../components/custom-avatar'
import {Text} from '../../components/text'

export const CompanyList = () => {
  const go = useGo();
  const { tableProps, filters} = useTable({
    resource: 'companies',
    meta:{
      gqlQuery: COMPANIES_LIST_QUERY
    }
  })

  return (
    <List
    breadcrumb={false}
    headerbuttons={()=>(
      <CreateButton 
      onClick ={
        () =>{
          go({
            to:{
              resource: 'comapanies',
              action: 'create'
            },
            options:{
              keepQuery:'true'
            },
            type:'replace'
          })
        }
      }
      />
    )}
    >
        <Table
        {... tableProps}
        pagination={{
          ...tableProps.pagination,
        }}
        >
          <Table.Column 
            dataIndex="name"
            title="Company Title"
            defaultFilteredValue ={getDefaultFilter('id', filters)}
            filterIcon={<SearchOutlined />}
            filterDropdown ={(props) => (
              <FilterDropdown {...props}>
                <Input placeholder="Search Company"/>
              </FilterDropdown>
            )}
            render={(value,record)=>{
              return(
              <Space>
                <CustomAvatar 
                shape="square"
                name={record.name}
                src={record.avatarUrl}
                />
                <Text style={{whiteSpace: 'nowrap'}}>
                {record.name}
                </Text>


              </Space>
              );
            }}
          />
          
        </Table>

    </List>
  )
}

export default CompanyList