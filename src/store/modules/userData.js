import { getOne, getTwo } from "@/utils/auth";


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
    oneIndustry: getOne(), // 一级
    oneIndustryname: "",
    twoIndustry: getTwo(), // 二级
    competitor: [
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" }
    ], // 竞争
    keywords: [
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" }
    ], // 关键词
    supplier: [
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" }
    ], // 供应商
    mainProcess: [
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" }
    ], // 工艺
    facilitator: [
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" },
      { key: "点击输入" }
    ], // 服务商
    summary: "", // 简介
    exhibitions: [{ name: "", state: 1, numID: "" }], // 会展
    customer: [{ key: "点击输入" },
    { key: "点击输入" },
    { key: "点击输入" },
    { key: "点击输入" },
    { key: "点击输入" }], // 客户/
    imgList: [],
    logoPic: "",
    introductionPic: ""
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
    SET_oneIndustryname: (state, oneIndustryname) => {
      state.oneIndustryname = oneIndustryname;
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
    },
    SET_imgList: (state, imgList) => {
      state.imgList = imgList;
    },
    SET_logoPic: (state, logoPic) => {
      state.logoPic = logoPic;
    },
    SET_introductionPic: (state, introductionPic) => {
      state.introductionPic = introductionPic;
    }
  }
};

export default userData;
