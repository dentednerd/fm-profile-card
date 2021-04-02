import styled from 'styled-components';
import Card from './Card';
import Top from './images/bg-pattern-top.svg';
import Bottom from './images/bg-pattern-bottom.svg';

const StyledApp = styled.main`
  position: relative;
  display: flex;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  overflow: hidden;

  .top {
    width: 50rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-100%, -100%);
  }

  .bottom {
    width: 50rem;
    position: absolute;
    bottom: 50%;
    right: 50%;
    transform: translate(100%, 100%);
  }

  div.attribution {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    padding: 1rem 0;
    color: hsl(229, 23%, 23%);

    a {
      text-decoration: none;
      color: white;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: hsl(229, 23%, 23%);
        transition: color 0.2s ease-in-out;
      }
    }
  }
`;

function App() {
  return (
    <StyledApp>
      <img className="top" src={Top} alt="bg top" />
      <img className="bottom" src={Bottom} alt="bg bottom" />
      <Card />
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://joeyimlay.dev">Joey Imlay</a>.
      </div>
    </StyledApp>
  );
}

export default App;
