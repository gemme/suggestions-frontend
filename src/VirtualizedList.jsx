import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';

function renderRow(props) {
  const { index, style, data,  } = props;
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`${index + 1}`} />
      </ListItemButton>
      <ListItemButton>
        <ListItemText
            primary={
                <div>
                    <div >{`${data[index]['FirstName']}`}</div>
                    <div>{`${data[index]['LastName']}`}</div>
                </div>
            }
            secondary={`${data[index]['MiddleName']}`} />
      </ListItemButton>
      <ListItemButton>
      <ListItemText
            primary={
                <div>
                    <div >{`${data[index]['Email']}`}</div>
                    <div>{`${data[index]['Salary']}`}</div>
                </div>
            }
            secondary={`${data[index]['Gender']}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList({
    data
}) {
    console.log('data', data);
  return (
    <Box
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={800}
        width={900}
        itemSize={90}
        itemCount={data.length}
        overscanCount={5}
        data={[{name: 'ernesto'}]}
        itemData={data}
        style={{
            display: 'flex',
            flex: 1
        }}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
