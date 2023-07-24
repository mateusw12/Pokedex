import { Table as TableAntd } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface TableColumn<T> {
  dataIndex: keyof T;
  name: string;
}

export interface DataTable {
  key: string;
  value: string;
}

const Table = <T extends object>(props: {
  title: string;
  columns: TableColumn<T>[];
  dataSource: T[];
}) => {
  const tableColumns: ColumnsType<T> = props.columns.map((column) => ({
    title: column.name,
    dataIndex: column.dataIndex,
    render: (text, record) => record[column.dataIndex] as React.ReactNode,
  }));

  return (
    <>
      <TableAntd
        bordered
        pagination={false}
        title={() => props.title}
        columns={tableColumns}
        dataSource={props.dataSource}
        size="middle"
      />
    </>
  );
};

export default Table;
