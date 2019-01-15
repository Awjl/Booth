const getters = {
  UserID: state => state.user.UserID,
  name: state => state.userData.name,
  nameEng: state => state.userData.nameEng,
  member: state => state.userData.member,
  address: state => state.userData.address, // 地点
  linkman: state => state.userData.linkman,
  position: state => state.userData.position,
  mobile: state => state.userData.mobile,
  linkmanEmail: state => state.userData.linkmanEmail,
  oneIndustry: state => state.userData.oneIndustry,
  twoIndustry: state => state.userData.twoIndustry,
  competitor: state => state.userData.competitor,
  keywords: state => state.userData.keywords,
  supplier: state => state.userData.supplier,
  mainProcess: state => state.userData.mainProcess,
  facilitator: state => state.userData.facilitator,
  summary: state => state.userData.summary,
  exhibitions: state => state.userData.exhibitions,
  customer: state => state.userData.customer,

};
export default getters;
