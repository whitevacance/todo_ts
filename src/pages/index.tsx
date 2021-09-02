import { useState } from 'react';
import theme from 'contexts/theme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const DB = [
  {
    id: 1,
    text: 'Hello',
    done: false,
  },
  {
    id: 2,
    text: '2222222',
    done: false,
  },
];

function Todo(): JSX.Element {
  const [text, setText] = useState();

  const handleChangeText = (e) => setText(e.target.value);

  return (
    <div css={{ padding: '4em' }}>
      <h1 css={{ width: '100%', color: theme.palette.primary.main }}>
        TODO LIST
      </h1>
      <div css={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <TextField
          label="할일을 입력하세요"
          size="small"
          variant="outlined"
          onChange={handleChangeText}
        />
        <Button variant="contained" size="large" color="primary">
          등록
        </Button>
      </div>
      <ul>
        {DB.map((item) => (
          <li key={item.id} css={{ padding: '5px 0' }}>
            {item.text}
            <Button
              variant="contained"
              size="small"
              color="secondary"
              css={{ marginLeft: 10 }}
            >
              삭제
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
