const getters = {
  UserID: state => state.user.UserID,
  name: state => state.userData.name,
  nameEng: state => state.userData.nameEng,
  member: state => state.userData.member,
  address: state => state.userData.address, // 地点
  linkman: state => state.userData.linkman,
  position: state => state.userData.position,
  mobile: state => state.userData.mobile,
  linkmanEmail: state => state.userData.linkmanEmail
};
export default getters;
