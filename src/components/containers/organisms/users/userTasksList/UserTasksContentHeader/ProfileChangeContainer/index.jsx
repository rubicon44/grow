import { ProfileChange } from '../profileChange';

export const ProfileChangeContainer = (props) => {
  const { editing, error, loading } = props;
  if (error) return <>Error...</>;
  if (loading) return <>Loading...</>;
  if (editing) return <>Editing...</>;
  return <ProfileChange {...props} />;
};