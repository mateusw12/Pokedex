import { Table as TableAntd } from "antd";
import type { ColumnsType } from "antd/es/table";

export interface TableColumn {
  dataIndex: string;
  name: string;
}

export interface DataTable {
  key: string;
  value: string;
}

const Table = <T extends object>(props: {
  title: string;
  columns: TableColumn[];
  dataSource: T[];
}) => {
  const tableColumns: ColumnsType<T> = props.columns.map((column) => ({
    title: column.name,
    dataIndex: column.dataIndex,
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
