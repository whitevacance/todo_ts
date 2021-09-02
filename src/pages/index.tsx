import { useState } from 'react';
import theme from 'contexts/theme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

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

const idsInDb = DB.map(({ id }) => id);
let maxId = Math.max(...idsInDb);

function Todo(): JSX.Element {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState(DB);

  const handleChangeText = (e) => setText(e.target.value);

  const handleClickAddBtn = () => {
    if (text && text.length > 0) {
      setTodos([
        ...todos,
        {
          id: (maxId += 1),
          text,
          done: false,
        },
      ]);
      setText('');
    } else {
      alert('할일을 입력해 주세요.');
    }
  };

  const handleCheckDone = (id) => {
    setTodos(
      todos.map((item) => {
        return {
          id: item.id,
          text: item.text,
          done: item.id === id ? !item.done : item.done,
        };
      })
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

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
          value={text}
          onChange={handleChangeText}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={handleClickAddBtn}
        >
          등록
        </Button>
      </div>
      <ul>
        {todos.map(({ id, text, done }) => (
          <li key={id} id={id} css={{ padding: '5px 0' }}>
            <Checkbox
              color="primary"
              checked={done}
              onChange={() => handleCheckDone(id)}
            />
            <span css={done && { textDecoration: 'line-through' }}>{text}</span>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => handleDelete(id)}
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
