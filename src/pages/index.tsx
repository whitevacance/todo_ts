import theme from 'contexts/theme';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Home(): JSX.Element {
  return (
    <div css={{ padding: '4em' }}>
      <h1 css={{ width: '100%', color: theme.palette.primary.main }}>
        TODO LIST
      </h1>
      <div css={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <TextField label="할일을 입력하세요" size="small" variant="outlined" />
        <Button variant="contained" size="large" color="primary">
          등록
        </Button>
      </div>
      <ul></ul>
    </div>
  );
}

export default Home;
