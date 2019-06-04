import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const CompareList = ({ repositories, updateRepository, deleteRepository }) => (
  <Container>
    {repositories.map(repository => (
      <Repository key={repository.id}>
        <header>
          <img src={repository.owner.avatar_url} alt="facebook" />
          <strong>{repository.name}</strong>
          <small>{repository.owner.login}</small>
        </header>

        <ul>
          <li>
            {repository.stargazers_count} <small>starts</small>
          </li>
          <li>
            {repository.forks_count} <small>forks</small>
          </li>
          <li>
            {repository.open_issues_count} <small>issues</small>
          </li>
          <li>
            {repository.lastCommit} <small>last commit</small>
          </li>
        </ul>

        <footer>
          <button type="button" className="update" onClick={() => updateRepository(repository.id)}>
            <i className="fa fa-retweet" /> Atualizar
          </button>
          <button type="button" className="destroy" onClick={() => deleteRepository(repository.id)}>
            <i className="fa fa-trash" /> Deletar
          </button>
        </footer>
      </Repository>
    ))}
  </Container>
);

CompareList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      owner: PropTypes.shape({
        login: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
      }).isRequired,
      stargazers_count: PropTypes.number.isRequired,
      open_issues_count: PropTypes.number.isRequired,
      lastCommit: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default CompareList;
