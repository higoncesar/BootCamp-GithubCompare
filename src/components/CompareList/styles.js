import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 10px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5f5;
      }
    }
  }

  footer {
    padding: 10px 10px;
    display: flex;
    flex-direction: column;

    button {
      margin: 10px 10px;
      height: 50px;
      color: #fff;
      border: 0;
      border-radius: 3px;
      font-size: 18px;
    }
    .update {
      background: #1e88e5;
      &:hover {
        background: #42a5f5;
      }
    }

    .destroy {
      background: #e53935;
      &:hover {
        background: #ef5350;
      }
    }
  }
`;
