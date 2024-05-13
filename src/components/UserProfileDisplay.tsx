import PermissionsUtil from "../util/PermissionsUtil";

interface Props {
  firstName?: string;
  lastName?: string;
  permissions: number;
}

const UserProfileDisplay = ({ firstName, lastName, permissions }: Props) => {
  return (
    <>
      <div>{`${firstName} ${lastName}`}</div>
      <div>{PermissionsUtil.transformPermission(permissions)}</div>
    </>
  );
};

export default UserProfileDisplay;
