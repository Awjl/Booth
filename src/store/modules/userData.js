const userData = {
  state: {
    name: "",
    nameEng: "",
    member: "",
    address: "", // 地点
    linkman: "",
    position: "",
    mobile: "",
    linkmanEmail: ""
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_NAMEENG: (state, nameEng) => {
      state.nameEng = nameEng;
    },
    SET_MEMBER: (state, member) => {
      state.member = member;
    },
    SET_ADDRESS: (state, address) => {
      state.address = address;
    },
    SET_LINKMAN: (state, linkman) => {
      state.linkman = linkman;
    },
    SET_POSITION: (state, position) => {
      state.position = position;
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile;
    },
    SET_LINKMANEMAIL: (state, linkmanEmail) => {
      state.linkmanEmail = linkmanEmail;
    }
  }
};

export default userData;
