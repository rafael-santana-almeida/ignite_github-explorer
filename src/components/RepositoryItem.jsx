export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.link} target="_blank">
        Acessar repositóro
      </a>
    </li>
  );
}
