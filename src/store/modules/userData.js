const userData = {
  state: {
    name: "",
    nameEng: "",
    member: "",
    address: "", // 地点
    linkman: "",
    position: "",
    mobile: "",
    linkmanEmail: "",
    oneIndustry: "", // 一级
    twoIndustry: "", // 二级
    competitor: [], // 竞争
    keywords: [], // 关键词
    supplier: [], // 供应商
    mainProcess: [], // 工艺
    facilitator: [], // 服务商
    summary: "", // 简介
    exhibitions: [], // 会展
    customer: [] // 客户
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
    },
    SET_oneIndustry: (state, oneIndustry) => {
      state.oneIndustry = oneIndustry;
    },
    SET_twoIndustry: (state, twoIndustry) => {
      state.twoIndustry = twoIndustry;
    },
    SET_competitor: (state, competitor) => {
      state.competitor = competitor;
    },
    SET_keywords: (state, keywords) => {
      state.keywords = keywords;
    },
    SET_supplier: (state, supplier) => {
      state.supplier = supplier;
    },
    SET_mainProcess: (state, mainProcess) => {
      state.mainProcess = mainProcess;
    },
    SET_facilitator: (state, facilitator) => {
      state.facilitator = facilitator;
    },
    SET_summary: (state, summary) => {
      state.summary = summary;
    },
    SET_exhibitions: (state, exhibitions) => {
      state.exhibitions = exhibitions;
    },
    SET_customer: (state, customer) => {
      state.customer = customer;
    }
  }
};

export default userData;
