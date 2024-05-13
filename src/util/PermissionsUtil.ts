class PermissionsUtil {
  transformPermission(permissionFlag: number){
    if(permissionFlag === 2147483647){
      return 'Supreme Leader';
    } else if(permissionFlag & 8){
      return 'Admin';
    } else if(permissionFlag & 4){
      return 'Premium user';
    } else if(permissionFlag & 2){
      return 'Paid user';
    } else{
      return 'Free user';
    }
  }
}

export default new PermissionsUtil();