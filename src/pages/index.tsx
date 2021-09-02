import { useState, useEffect } from 'react';
import theme from 'contexts/theme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7007';
let maxId;

const getMaxId = (items) => {
  const idsInDb = items.map(({ id }) => id);
  maxId = Math.max(...idsInDb);
};

function Todo(): JSX.Element {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get('/posts');
      await Promise.resolve(data);
      setTodos(data);
    } catch (e) {
      console.error(e);
    }
  }, []);

  // const idsInDb = todos.map(({ id }) => id);
  // maxId = Math.max(...idsInDb);
  // getMaxId(todos);

  const handleChangeText = (e) => setText(e.target.value);

  const handleClickAddBtn = async () => {
    if (text && text.length > 0) {
      try {
        getMaxId(todos);
        await axios.post('/posts', {
          id: (maxId += 1),
          text,
          done: false,
        });
        const { data } = await axios.get('/posts');
        await Promise.resolve(data);
        setTodos(data);
        setText('');
      } catch (e) {
        console.error(e);
      }
    } else {
      alert('할일을 입력해 주세요.');
    }
  };

  const handleCheckDone = async (id) => {
    try {
      const isChecked = (await axios.get(`/posts/${id}`)).data.done;
      await axios.patch(`/posts/${id}`, {
        done: !isChecked,
      });
      const { data } = await axios.get('/posts');
      await Promise.resolve(data);
      setTodos(data);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDelete = async (id) => {
    if (todos) {
      try {
        await axios.delete(`/posts/${id}`);
        const { data } = await axios.get('/posts');
        await Promise.resolve(data);
        setTodos(data);
      } catch (e) {
        console.error(e);
      }
    }
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
