import * as React from 'react';
import { Button, Cascader, List } from 'zarm/mini';
import './index.scss';

const Demo = () => {
  const [visible, setVisible] = React.useState(false);
  const [value, setValue] = React.useState([]);

  const District = [
    {
      value: '340000',
      label: '安徽省',
      children: [
        {
          value: '340800',
          label: '安庆市',
          children: [
            {
              value: '340803',
              label: '大观区',
              children: [],
            },
            {
              value: '340822',
              label: '怀宁县',
              children: [],
            },
            {
              value: '340882',
              label: '其它区',
              children: [],
            },
          ],
        },
      ],
    },
    {
      value: '310000',
      label: '上海',
      children: [
        {
          value: '310100',
          label: '上海市',
          children: [
            {
              value: '310113',
              label: '宝山区',
              children: [],
            },
            {
              value: '310105',
              label: '长宁区',
              children: [],
            },
            {
              value: '310230',
              label: '崇明县',
              children: [],
            },
            {
              value: '310152',
              label: '川沙区',
              children: [],
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <List>
        <List.Item
          title="普通"
          suffix={
            <Button size="xs" onClick={() => setVisible(true)}>
              选择
            </Button>
          }
        >
          {value.join(',')}
        </List.Item>
      </List>

      <Cascader
        maskClosable
        visible={visible}
        value={value}
        title="级联选择器"
        dataSource={District}
        onChange={(value, items) => {
          console.log('onChange', value, items);
        }}
        onConfirm={(value, items) => {
          console.log('onConfirm', value, items);
          setValue(value);
          setVisible(false);
        }}
        onCancel={() => {
          console.log('onCancel');
          debugger;
          setVisible(false);
        }}
      />
    </>
  );
};

export default Demo;
