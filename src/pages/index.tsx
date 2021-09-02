import theme from 'contexts/theme';
import Button from 'components/Button/DefaultBtn';

const Home = (): JSX.Element => {
  return (
    <div>
      <h1 css={{ width: '100%', color: theme.palette.primary.main }}>
        TODO LIST
      </h1>
      <div>asfasdf</div>
      <ul></ul>
    </div>
  );
};

export default Home;
